<!doctype html>
<html @php language_attributes() @endphp>
  @include('partials.head')

  <body class="{{ App::formSubmit() }}">

    <div class="app">
      @php do_action('get_header') @endphp

      @include('partials.header')

      @if ($GLOBALS['options']['debug'])
        @include('partials.grid')
      @endif

      <main class="content" data-taxi role="document">
        @yield('content')
      </main>

      <div class="panel">
        <div class="panel__progress"></div>
        <div class="panel__wrapper">
            <div class="panel__logo">
              <span>AV</span>
              <span>AV</span>
            </div>
            <div class="panel__text">
              <span class="u-font-tag">(plasticienne - designer)</span>
            </div>
        </div>
        <div class="panel__preloader">
          {!! display_svg('preloader') !!}
        </div>
      </div>

      @include('partials.footer')

      @php wp_footer() @endphp
    </div>
  </body>
</html>
