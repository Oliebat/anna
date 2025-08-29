<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Single extends Controller
{

  public static function projet()
  {
    $post_id = get_the_ID();
    $post = get_post($post_id);
    $slider = get_field('slider', $post_id);

    if (!empty($slider)) {
      foreach ($slider as $item) {
        if ($item) {
          $images[] = ['image' => Element::image($item['image'], '50vw', null, true)];
        }
      }
    }

    $details = get_field('detail', $post_id) ?: [];

    if (get_field('date', $post_id)) {
      $details[] = [
        'details' => get_field('date', $post_id)
      ];
    }

    return [
      'title' => $post->post_title,
      'image' => Element::image(get_post_thumbnail_id($post_id), '1920px', null, true),
      'date' => get_field('date', $post_id),
      'subtitle' => get_field('subtitle', $post_id),
      'detail' => $details,
      'content' => get_field('content', $post_id),
      'slider' => $images,
      'descSlider' => get_field('description_slider', $post_id)
    ];
  }
}
