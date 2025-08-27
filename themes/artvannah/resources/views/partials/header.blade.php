<header class="header">
  <div class="container-fluid">
    <div class="row">
      <div class="col-24">
        <div class="header__wrapper">
            <a class="header__logo" href="{{ get_home_url() }}">Anna Virem</a>
            <div class="header__button">
                @include('elements/button', [
                  'data' => $GLOBALS['options']['header']['h_button'],
                  'is_link' => true
                ])
            </div>
        </div>
      </div>
    </div>
  </div>
</header>

