<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Single extends Controller
{

  public static function projet()
  {
    $post_id = get_the_ID();
    $post = get_post($post_id);

    $title = $post->post_title;
    $date = get_field('date', $post_id);
    $image = Element::image(get_post_thumbnail_id($post_id), '1920px', null, true);
    $subtitle = get_field('subtitle', $post_id);
    $detail = get_field('detail', $post_id);
    $content = get_field('content', $post->post_content);

    return [
      'title' => $title,
      'image' => $image,
      'date' => $date,
      'subtitle' => $subtitle,
      'detail' => $detail,
      'content' => $content

    ];
  }
}
