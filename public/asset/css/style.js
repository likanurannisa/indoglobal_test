import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // !
 * (c) Mimin Admin Page v1.0
  'body': {
    'fontFamily': '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'backgroundColor': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 1.42857143 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#58666e !important'
  },
  'a': {
    'WebkitTextDecoration': 'none',
    'MozTextDecoration': 'none',
    'MsTextDecoration': 'none',
    'OTextDecoration': 'none',
    'textDecoration': 'none',
    'color': '#2196F3',
    'fontWeight': 'bold'
  },
  'a:hover': {
    'WebkitTextDecoration': 'none',
    'MozTextDecoration': 'none',
    'MsTextDecoration': 'none',
    'OTextDecoration': 'none',
    'textDecoration': 'none',
    'color': '#2196F3',
    'fontWeight': 'bold'
  },
  'input:focus': {
    'outline': 'none !important',
    'WebkitBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075) !important',
    'MozBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075) !important',
    'MsBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075) !important',
    'OBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075) !important',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.075)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.075)' }, { 'unit': 'string', 'value': '!important' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }, { 'unit': 'string', 'value': '!important' }]
  },
  'textarea:focus': {
    'outline': 'none !important',
    'WebkitBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075) !important',
    'MozBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075) !important',
    'MsBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075) !important',
    'OBoxShadow': 'inset 0 1px 1px rgba(0,0,0,.075) !important',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.075)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.075)' }, { 'unit': 'string', 'value': '!important' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }, { 'unit': 'string', 'value': '!important' }]
  },
  'video': {
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'audio': {
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'code': {
    'textAlign': 'left !important'
  },
  'input[type='text']': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'WebkitBorderRadius': '0px',
    'MozBorderRadius': '0px',
    'MsBorderRadius': '0px',
    'OBorderRadius': '0px',
    'borderRadius': '0px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '0px !important'
  },
  'select': {
    'borderRadius': '0px !important',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'paddingRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'label': {
    'fontWeight': '400'
  },
  'ul li': {
    'listStyle': 'none'
  },
  'pquote': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'pquote:before': {
    'color': '#fff',
    'fontFamily': '"times new roman"',
    'content': 'open-quote',
    'fontSize': [{ 'unit': 'em', 'value': 4 }],
    'lineHeight': [{ 'unit': 'em', 'value': 0.1 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }],
    'verticalAlign': '-.4em'
  },
  'content-header content-header-tab active a': {
    'background': 'none !important'
  },
  'right-option-v1': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'right-option-v1 right-option-v1-icon': {
    'fontSize': [{ 'unit': 'em', 'value': 1.4 }, { 'unit': 'string', 'value': '!important' }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'pointer'
  },
  'content-header': {
    'background': '#f6f8f8',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }, { 'unit': 'string', 'value': '!important' }]
  },
  'thumbnail': {
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  // start: font color
  'text-white': {
    'color': '#fff !important'
  },
  // end: font color
  // background
  'bg-none': {
    'background': 'none !important'
  },
  'bg-primary': {
    'backgroundColor': '#1c84c6 !important'
  },
  'bg-success': {
    'backgroundColor': '#27C24C !important'
  },
  'bg-info': {
    'backgroundColor': '#73CAEF !important'
  },
  'bg-danger': {
    'backgroundColor': '#FEC8C3 !important'
  },
  'bg-warning': {
    'backgroundColor': '#F0AD4E !important'
  },
  'bg-default': {
    'backgroundColor': '#857E7E !important'
  },
  'bg-white': {
    'backgroundColor': '#FFF !important'
  },
  'bg-red': {
    'backgroundColor': '#F44336 !important'
  },
  'bg-pink': {
    'backgroundColor': '#E91E63 !important'
  },
  'bg-purple': {
    'backgroundColor': '#9C27B0 !important'
  },
  'bg-deep-purple': {
    'backgroundColor': '#673AB7 !important'
  },
  'bg-indigo': {
    'backgroundColor': '#3F51B5 !important'
  },
  'bg-blue': {
    'backgroundColor': '#2196F3 !important'
  },
  'bg-light-blue': {
    'backgroundColor': '#03A9F4 !important'
  },
  'bg-cyan': {
    'backgroundColor': '#00BCD4 !important'
  },
  'bg-teal': {
    'backgroundColor': '#009688 !important'
  },
  'bg-green': {
    'backgroundColor': '#4CAF50 !important'
  },
  'bg-light-green': {
    'backgroundColor': '#8BC34A !important'
  },
  'bg-lime': {
    'backgroundColor': '#CDDC39 !important'
  },
  'bg-yellow': {
    'backgroundColor': '#FFEB3B !important'
  },
  'bg-amber': {
    'backgroundColor': '#FFC107 !important'
  },
  'bg-orange': {
    'backgroundColor': '#FF9800 !important'
  },
  'bg-deep-orange': {
    'backgroundColor': '#FF5722 !important'
  },
  'bg-brown': {
    'backgroundColor': '#795548 !important'
  },
  'bg-grey': {
    'backgroundColor': '#9E9E9E !important'
  },
  'bg-light-grey': {
    'backgroundColor': '#f0f3f4 !important'
  },
  'bg-blue-grey': {
    'backgroundColor': '#607D8B !important'
  },
  'bg-dark-red': {
    'backgroundColor': '#d32f2f !important'
  },
  'bg-dark-pink': {
    'backgroundColor': '#c2185b !important'
  },
  'bg-dark-purple': {
    'backgroundColor': '#7b1fa2 !important'
  },
  'bg-dark-deep-purple': {
    'backgroundColor': '#512da8 !important'
  },
  'bg-dark-indigo': {
    'backgroundColor': '#303f9f !important'
  },
  'bg-dark-blue': {
    'backgroundColor': '#1976d2 !important'
  },
  'bg-dark-light-blue': {
    'backgroundColor': '#0288d1 !important'
  },
  'bg-dark-cyan': {
    'backgroundColor': '#0097a7 !important'
  },
  'bg-dark-teal': {
    'backgroundColor': '#00796b !important'
  },
  'bg-dark-green': {
    'backgroundColor': '#388e3c !important'
  },
  'bg-dark-light-green': {
    'backgroundColor': '#689f38 !important'
  },
  'bg-dark-lime': {
    'backgroundColor': '#afb42b !important'
  },
  'bg-dark-yellow': {
    'backgroundColor': '#fbc02d !important'
  },
  'bg-dark-amber': {
    'backgroundColor': '#ffa000 !important'
  },
  'bg-dark-orange': {
    'backgroundColor': '#f57c00 !important'
  },
  'bg-dark-deep-orange': {
    'backgroundColor': '#e64a19 !important'
  },
  'bg-dark-brown': {
    'backgroundColor': '#5d4037 !important'
  },
  'bg-dark-grey': {
    'backgroundColor': '#616161 !important'
  },
  'bg-dark-blue-grey': {
    'backgroundColor': '#455a64 !important'
  },
  // end background
  // start: Mega Menu
  'menu-large': {
    'position': 'static !important',
    'color': '#918C8C !important'
  },
  'menu-large sub-megamenu': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'page-action': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'marginTop': [{ 'unit': 'px', 'value': 16 }],
    'backgroundColor': '#f8f8f8',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'page-action btn': {
    'position': 'relative',
    'zIndex': '2'
  },
  'page-action btnpull-left': {
    'marginRight': [{ 'unit': 'px', 'value': 8 }]
  },
  'page-action btnpull-right': {
    'marginLeft': [{ 'unit': 'px', 'value': 8 }]
  },
  'page-action mid': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 8 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 200 }],
    'paddingRight': [{ 'unit': 'px', 'value': 200 }]
  },
  'megamenu': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'marginTop': [{ 'unit': 'px', 'value': -5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'megamenu> li > ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'megamenu> li > ul > li': {
    'listStyle': 'none'
  },
  'megamenu> li > ul > li > a': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 20 }],
    'clear': 'both',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.428571429 }],
    'color': '#333333',
    'whiteSpace': 'normal'
  },
  'megamenu> li ul > li > a:hover': {
    'textDecoration': 'none',
    'color': '#262626',
    'backgroundColor': '#f5f5f5'
  },
  'megamenu> li ul > li > a:focus': {
    'textDecoration': 'none',
    'color': '#262626',
    'backgroundColor': '#f5f5f5'
  },
  'megamenudisabled > a': {
    'color': '#999999'
  },
  'megamenudisabled > a:hover': {
    'color': '#999999'
  },
  'megamenudisabled > a:focus': {
    'color': '#999999'
  },
  'megamenudisabled > a:hover': {
    'textDecoration': 'none',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'filter': 'progid:DXImageTransform.Microsoft.gradient(enabled = false)',
    'cursor': 'not-allowed'
  },
  'megamenudisabled > a:focus': {
    'textDecoration': 'none',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'filter': 'progid:DXImageTransform.Microsoft.gradient(enabled = false)',
    'cursor': 'not-allowed'
  },
  'megamenudropdown-header': {
    'color': '#428bca',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  // end: Mega Menu
  // start: Lock Screen
  'lock-screen-v1 img': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  },
  // end: Lock Screen
  // start: page 404
  'page-404': {
    'paddingTop': [{ 'unit': '%V', 'value': 0.1 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'page-404 img': {
    'marginBottom': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 350 }]
  },
  'page-404 a': {
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'page-404 a span': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  // end: page 404
  // start: price
  'price panel-header': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'price sub': {
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'fontWeight': 'bold'
  },
  'price price-money': {
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'price list-group-item': {
    'borderColor': '#eee !important',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'price sup': {
    'top': [{ 'unit': 'px', 'value': -20 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'price panel-header span': {
    'fontSize': [{ 'unit': 'em', 'value': 5 }],
    'fontWeight': '600'
  },
  // end: price
  // start:product grid
  'product-location': {
    'position': 'absolute',
    'zIndex': '9',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 17 }]
  },
  'product-grid rate': {
    'color': '#F0AD4E !important',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'product-grid img': {
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'product-location pull-right': {
    'marginRight': [{ 'unit': 'px', 'value': 40 }]
  },
  'product-price': {
    'backgroundColor': '#fff',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'zIndex': '9',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'position': 'absolute'
  },
  'product-price-bottom': {
    'top': [{ 'unit': '%V', 'value': 0.49 }]
  },
  // end: product grid
  // start: Login
  'form-signin-wrapper': {
    'background': '#e6eae0 !important'
  },
  'form-signin': {
    'maxWidth': [{ 'unit': 'px', 'value': 600 }],
    'padding': [{ 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 32 }],
    'margin': [{ 'unit': 'px', 'value': 61 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 61 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'form-signin a': {
    'color': '#fff !important',
    'fontWeight': 'bold'
  },
  'form-signin btn': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'form-signin form-group': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }]
  },
  'form-signin panel': {
    'background': '#000000',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'form-signin panel-body': {
    'paddingBottom': [{ 'unit': 'px', 'value': 50 }],
    'paddingTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'form-signin atomic-symbol': {
    'fontSize': [{ 'unit': 'em', 'value': 10 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': '500',
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'form-signin atomic-mass': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'fontWeight': '600',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }],
    'color': '#ffffff'
  },
  'form-signin element-name': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'fontWeight': '600',
    'lineHeight': [{ 'unit': 'px', 'value': 1.2 }],
    'color': '#ffffff'
  },
  'form-signin label': {
    'color': '#fff !important'
  },
  'form-signin bar:before': {
    'backgroundColor': '#fff !important'
  },
  'form-signin bar:after': {
    'backgroundColor': '#fff !important'
  },
  // end: login
  // start:profile v1
  'profile-v1': {
  },
  'profile-v1 profile-v1-cover': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'maxHeight': [{ 'unit': 'px', 'value': 300 }],
    'minHeight': [{ 'unit': 'px', 'value': 300 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'overflow': 'hidden'
  },
  'profile-v1 profile-v1-body': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'profile-v1 profile-v1-name h2': {
    'fontWeight': 'bold',
    'color': '#fff',
    'textShadow': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#111111,' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#363636' }]
  },
  'profile-v1 profile-v1-cover img': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'profile-v1 profile-v1-pp': {
    'zIndex': '9',
    'position': 'absolute',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'profile-v1 profile-v1-pp h2': {
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': '#fff'
  },
  'profile-v1 profile-v1-pp btn': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'profile-v1 profile-v1-pp img': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }]
  },
  'profile-v1 profile-v1-right': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'profile-v1 profile-v1-right sub-profile-v1-right': {
    'minHeight': [{ 'unit': 'px', 'value': 150 }],
    'background': '#fff'
  },
  'profile-v1 profile-v1-right sub-profile-v1-right h1': {
    'fontSize': [{ 'unit': 'em', 'value': 4 }]
  },
  'profile-v1 profile-v1-right sub-profile-v1-right p': {
    'marginTop': [{ 'unit': 'px', 'value': -10 }]
  },
  'profile-v1 profile-v1-right sub-profile-v1-right1': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'profile-v1 profile-v1-right sub-profile-v1-right2': {
    'color': '#fff',
    'background': '#6254b2',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 28 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.25)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.25),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.22)' }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'profile-v1 profile-v1-right sub-profile-v1-right3': {
    'color': '#fff',
    'background': '#2196f3',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'profile-v1 profile-v1-right sub-profile-v1-right3:after': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -10 }],
    'left': [{ 'unit': 'px', 'value': 132 }],
    'display': 'inline-block',
    'borderRight': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderBottom': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '#2196f3' }],
    'borderLeft': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'content': ''''
  },
  // end: profile
  // start: search v1
  'search-v1': {
  },
  'search-v1 panel': {
    'background': '#fbfbfb'
  },
  'search-v1 panel-body': {
    'background': '#fbfbfb'
  },
  'search-v1 tabs-area': {
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'marginTop': [{ 'unit': 'px', 'value': -18 }],
    'background': '#fff'
  },
  'search-v1 #tabs-demo6 li': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'search-v1 #tabs-demo6 liactive:after': {
    'borderColor': 'rgba(185, 9, 8, 0)',
    'borderTopColor': '#fbfbfb',
    'marginTop': [{ 'unit': 'px', 'value': 18 }],
    'zIndex': '9'
  },
  'search-v1 search-v1-avatar': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'borderRadius': '100%',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'search-v1 #tabs-demo6': {
    'backgroundColor': '#fbfbfb !important'
  },
  'search-v1 #tabs-demo6 a': {
    'backgroundColor': '#fbfbfb !important'
  },
  'search-v1 tab-pane': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'search-v1 search-v1-menu1 media-left': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0.7 }],
    'fontWeight': 'bold',
    'paddingTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'search-v1 search-v1-menu1 media-heading': {
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'color': '#2196F3 !important',
    'fontWeight': '600 !important'
  },
  'search-v1 media': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'search-v1 media:nth-child(2n+2)': {
    'backgroundColor': 'rgba(0,0,0,0.02) !important'
  },
  'search-v1 panel': {
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'WebkitBoxShadow': 'none !important',
    'MozBoxShadow': 'none !important',
    'MsBoxShadow': 'none !important',
    'OBoxShadow': 'none !important',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'search-v1 #search-v1-images': {
    'position': 'absolute'
  },
  'search-v1 #search-v1-images post': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'background': 'cyan',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'search-v1 #search-v1-images tall': {
    'height': [{ 'unit': 'px', 'value': 200 }]
  }
});
