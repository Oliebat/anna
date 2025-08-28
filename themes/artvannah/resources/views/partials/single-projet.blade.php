@php
  $data = Single::projet();
@endphp

<div data-taxi-view>
 <div class="single single-projet">
  <section class="s-projet-hero">
    <div class="container-fluid u-h100">
       <div class="row u-h100">
         <div class="col-24 col-xl-14 u-h100">
           <div class="s-projet-hero__image">
             @if($data['image'])
               @include('elements/image', ['data' => $data['image']])
             @endif
           </div>
         </div>
         <div class="col-24 col-xl-7 offset-xl-1">
          <div class="s-projet-hero__wrapper">
            <div class="s-projet-hero__content">
              <h1 class="s-projet-hero__title">{{ $data['title'] }}</h1>
              <div class="s-projet-hero__content s-projet-hero__content--inner">
                <h2 class="s-projet-hero__subtitle">{{ $data['subtitle'] }}</h2>
                <div class="s-projet-hero__description">
                  @if($data['content'])
                    {!! $data['content'] !!}
                  @endif
                </div>
              </div>
            </div>
            @if($data['detail'])
              <div class="s-projet-hero__details">
                @foreach($data['detail'] as $detail_item)
                  <span class="s-projet-hero__detail">{{ $detail_item['details'] }}</span>
                @endforeach
              </div>
            @endif
          </div>
         </div>
       </div>
     </div>
  </section>
  <section class="s-projet-slider u-padding">
    <div class="s-projet-slider__container">
      <div class="s-projet-slider__wrapper">
        @foreach ($data['slider'] as $item)
            <div class="s-projet-slider__image">
                  @include('elements/image', ['data' => $item['image']])
            </div>
        @endforeach
    </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-24">
          <div class="s-projet-slider__bottom">
            <div class="s-projet-slider__desc u-pagers">
            {!! wpautop($data['descSlider']) !!}
          </div>
          <div class="s-projet-slider__pagers u-pagers">
            @include('elements/pager', [
                'mode' => 'prev',
                'class' => 'dashed',
            ])
            @include('elements/pager', [
                'mode' => 'next',
                'class' => 'dashed',
            ])
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <section class="s-projet-content">
      <!-- the_content -->
   </section>
 </div>
</div>
