@php
 $data = Single::projet();
@endphp

<div data-taxi-view>
 <div class="single single-projet">
  <section class="hero">
    <div class="container-fluid u-h100">
       <div class="row u-h100">
         <div class="col-24 col-xl-14 u-h100">
           <div class="hero__image">
             @if($data['image'])
               @include('elements/image', ['data' => $data['image']])
             @endif
           </div>
         </div>
         <div class="col-24 col-xl-7 offset-xl-1">
          <div class="hero__wrapper">
            <div class="hero__content">
              <h1 class="hero__title">{{ $data['title'] }}</h1>
              <div class="hero__content hero__content--inner">
                <h2 class="hero__subtitle">{{ $data['subtitle'] }}</h2>
                <div class="hero__description">
                  @if($data['content'])
                    {!! $data['content'] !!}
                  @endif
                </div>
              </div>
            </div>
            @if($data['detail'])
              <div class="hero__details">
                @foreach($data['detail'] as $detail_item)
                  <span class="hero__detail">{{ $detail_item['details'] }}</span>
                @endforeach
              </div>
            @endif
          </div>
         </div>
       </div>
     </div>
  </section>
  <section class="slider">
  <!-- slier sur projet -->
  </section>
   <section class="post-content">
      <!-- the_content -->
   </section>
 </div>
</div>
