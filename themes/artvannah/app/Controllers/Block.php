<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class Block extends Controller {
  // public static function example($data) {
  //     return [
  //         'title' => Element::title($data),
  //         'image' => Element::image($data['image'], '1920px')
  //     ];
  // }

  public static function flexibleContent($data) {
    $fields = get_field($data['_blocks']);
    $index = 0;
    $components = [];

    foreach($fields as $block) {
      $component_function = toCamelCase($block['acf_fc_layout']);
      $components[$block['acf_fc_layout'] . '_' . $index] = Component::$component_function($block);
      $components[$block['acf_fc_layout'] . '_' . $index]['name'] = $block['acf_fc_layout'];
      $index++;
    }

    return [
      'components' => $components
    ];
  }

  public static function form($data) {
    return [
      'id' => $data['id-form']
    ];
  }

  public static function hero($data) {
      return [
          'title' => $data['title'],
          'image' => Element::image($data['image'], '1920px')
      ];
  }

  public static function projects($data) {
  foreach ($data['projects'] as $item) {
    if ($item) {
      $items[] = [
        'title' => get_the_title($item),
        'link' => get_permalink($item),
        'date' => get_field('date', $item),
        'tags' => get_the_tags( $item),
        'image' => Element::image(get_post_thumbnail_id($item), '1920px', null, true),
      ];
    }
  }

  // champ ACF repeater
  // $examples = [];

  // for ($i = 0; $i <= $data['examples']; $i++) {
  //   $examples[] = [
  //     'name' => $data['examples_' . $i . '_name'],
  //   ];
  // }

    return [
        'projects' => $items
    ];
  }

}
