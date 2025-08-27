{{--
 Title: Hero
 Description: Bloc Hero avec image de fond, texte
 Category: template-blocks
 Icon: cover-image
 Post-Type: page post
 Keywords: Hero Image de fond Texte
--}}

@php
 $data = Block::hero($block['data']);
@endphp

<section class="b-hero">
  <div class="b-hero__background">
    <div></div>
    <div></div>
    <div></div>
  </div>
  @if (!empty($data['image']))
    <div class="b-hero__image">@include('elements/image', ['data' => $data['image']])</div>
  @endif
  <h1 class="b-hero__title">{!! wpautop($data['title']) !!}</h1>
</section>
