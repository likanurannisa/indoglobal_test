<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Indoglobal Shop</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- start: Css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/css/bootstrap.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('asset/css/plugins/font-awesome.min.css')}}"/>
    <link rel="stylesheet" type="text/css" href="{{asset('asset/css/plugins/simple-line-icons.css')}}"/>
    <link rel="stylesheet" type="text/css" href="{{asset('asset/css/plugins/animate.min.css')}}"/>
    <link rel="stylesheet" type="text/css" href="{{asset('asset/css/plugins/fullcalendar.min.css')}}"/>
    <link href="{{asset('asset/css/style.css')}}" rel="stylesheet">
   </head>
   <body>

 <div class="form-signin">
 <div class="panel periodic-login">
      <div class="panel-body text-center">
      <p class="atomic-mass">PT Indoglobal Nusa Persada</p>
      <p class="element-name">Indoglobal Shop</p>



      <div id="app">

   <login-form></login-form>

   </div>

  </div>
</div>
   </body>


  <script src="asset/js/plugins/icheck.min.js"></script>
<!-- custom -->
<script src="asset/js/main.js"></script>
<script src="{{ asset('js/app.js') }}"></script>

</html>





