{{--
 Title: Projets
 Description: Affiche tous les projets
 Category: template-blocks
 Icon: format-gallery
 Post-Type: page
 Keywords:
--}}

@php
 $data = Block::projects($block['data']);
@endphp

{{-- @php  echo "<pre style='position: fixed; top: 0; left: 0; width: 100%; z-index: 9999; height:70vh;overflow-y: scroll;font-size: 1rem;padding: 10px; font-family: Consolas, Monospace; background-color: #000; color: #fff;'>", var_dump($data['projects']), "</pre>"; @endphp --}}

<section class="b-projects u-padding">
  <div class="container-fluid">
    <div class="row">
      <div class="col-24">
        <div class="b-projects__list">
          @foreach ($data['projects'] as $item)
            <div class="b-projects__item">
              <a href="{{ $item['link'] }}" class="b-projects__link">
                <div class="b-projects__image">
                  @include('elements/image', ['data' => $item['image']])
                </div>
                <div class="b-projects__content">
                  <h2 class="b-projects__title">{{ $item['title'] }}</h2>
                  <div class="b-projects__meta">
                    <span class="b-projects__date u-font-tag">{{ $item['date'] }}</span>
                    <span class="b-projects__more u-font-tag">Voir plus →</span>
                  </div>
                </div>
                @if( $item['tags'] )
                  <div class="b-projects__tags">
                    @foreach( $item['tags'] as $tag )
                      <span class="b-projects__tag u-font-tag">{{ $tag->name }}</span>
                    @endforeach
                  </div>
                @endif
              </a>
            </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</section>
