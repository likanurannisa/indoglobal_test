<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
   <title>Indoglobal shop</title>

    <!-- start: Css -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/css/bootstrap.min.css')}} ">
    <!-- plugins -->
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/css/plugins/font-awesome.min.css')}}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/css/plugins/animate.min.css')}}"/>
    <link  type="text/css" href="{{ asset('asset/css/style.css')}}" rel="stylesheet">
  <!--   <link  type="text/css" href="{{ asset('css/app.css')}}" rel="stylesheet">
     --><link  type="text/css" href="{{ asset('css/datatables.bootstrap.css')}}" rel="stylesheet">

  </head>

  <body id="mimin" class="dashboard topnav">
    <!-- start: Header -->
    <nav class="navbar navbar-default header navbar-fixed-top">
      <div class="col-md-12 nav-wrapper">
        <div class="navbar-header" style="width:100%;">
          <a href="" class="navbar-brand">
          @if(session('group_id') == 1 )
            <b>Admin Indoglobal Shop</b>
            @elseif(session('group_id') == 2 )
            <b>Employee Indoglobal Shop</b>
            @endif
          </a>
          <ul class="nav navbar-nav navbar-right user-nav">
          @if(session('group_id') == 2)
          
          @elseif(session('group_id') == 1 )
        <li class=""><a href="{{ route('home')}}">Pemesanan Produk</a></li>
          @endif

            <li class="">
            @if(session('user_id'))
            <a href="{{ route('logout') }}" class="menu user-menu" onclick="event.preventDefault();document.getElementById('logout-form').submit();"><span>Keluar</<span></a>
          <form id="logout-form" action="{{ route('logout') }}" method="get" style="display: none;">
              {{ csrf_field() }}
          </form>
            @else
            <a href="{{ route('login')}}">Login</a></li>
            @endif
          </ul>
        </div>
      </div>
    </nav>
    <!-- end: Header -->
    <!-- start: content -->
    <div id="content" >
    <div id="app">

    @yield('content')
    </div>

      <!-- end: content -->
    </div>

    <!-- start: Javascript -->
    <script src="{{ asset('js/app.js') }}"></script>

    <script src="{{ asset('asset/js/jquery.min.js') }}" ></script>

    <script src="{{asset('asset/js/jquery.ui.min.js')}}"></script>
    <script src="{{asset('asset/js/bootstrap.min.js')}}"></script>


    <script src="{{asset('asset/js/plugins/moment.min.js')}}"></script>
    <script  src="{{asset('asset/js/plugins/fullcalendar.min.js')}}"></script>
    <script src="{{asset('asset/js/plugins/jquery.nicescroll.js')}}"  ></script>
  <!-- custom -->
    <script src="{{asset('asset/js/main.js')}}"></script>
    <script src="{{ asset('js/jquery.dataTables.min.js') }}"></script>
    @yield('js')


  </body>
</html>
