<template>

    <div class="panel-body">
        <div v-if="errorsLogin" class="alert alert-danger  alert-dismissable">
            <strong>{{loginError}}</strong>
          </div>
    <div class="form-group form-animate-text"  :class="{'has-error' : errorsID, 'is-filled' : fillID}">
            <input type="username" placeholder="username" id="username_id" v-model="loginDetails.username" required class="form-text js-field" autofocus v-on:keyup.13="initModal">
            <span v-if="errorsID" class="help-block">
                <strong>{{idError}}</strong>
            </span>
          </div>
            <div class="form-group form-animate-text" :class="{'has-error' : errorsPassword, 'is-filled' : fillPassword}">
            <input type="password" placeholder="Password"  id="password_id" v-model="loginDetails.password" required class="form-text js-field" v-on:keyup.13="initModal">
            <span class="form-control-feedback js-password-button" rel="password_id"></span>
            <span v-if="errorsPassword" class="help-block">
                <strong>{{passwordError}}</strong>
            </span>
          </div>


              <button @click.prevent="loginPost" class="btn btn-primary btn-block" >Masuk</button>

    </div>



</template>

<script>
 	export default {
        data(){
            return{
              loginDetails:{
                  username:'',
                  password:'',
              },
              errorsID: false,
              errorsPassword: false,
              idError:null,
              passwordError:null,
              fillID: false,
              fillPassword: false,
              errorsLogin:false,
              loginError: null,
            };
        },
        methods:{
        loginPost(){
            let vm = this;

            axios.post('/login', vm.loginDetails)
            .then(function (response) {
              var resp = response.data
              if(resp.code == 200){
                window.location = resp.tampilan
              }else{
                $('#option').modal("hide")
                vm.errorsLogin = true
                vm.loginError = resp.msg
              }


            })
            .catch(function (error) {



              var resp = error.response

              if(resp.statusText === 'Unprocessable Entity'){
                $('#option').modal("hide")

                  var errors = error.response.data.errors

                  if(resp.data){
                      if(errors.username){
                         vm.errorsID = true
                         vm.fillID = false
                         vm.idError = _.isArray(errors.username) ? errors.username[0]: errors.username
                      }else{
                         vm.errorsID = false
                         vm.fillID = true
                         vm.idError = null
                      }

                      if(errors.password){
                         vm.errorsPassword = true
                         vm.fillPassword = false
                         vm.passwordError = _.isArray(errors.password) ? errors.password[0] : errors.password
                      }else{
                         vm.errorsPassword = false
                         vm.fillPassword = true
                         vm.passwordError = null
                      }

                  }
              }
            });
        },
        initModal(){
          let vm = this

          var error = false
          if(vm.loginDetails.username === ''){
            error = true
            vm.errorsID = true
            vm.fillID = false
            vm.idError = 'The ID field is required.'
          }

          if(vm.loginDetails.password === ''){
            error = true
            vm.errorsPassword = true
            vm.fillPassword = false
            vm.passwordError = 'The Password field is required.'
          }

          if(!error){
            $('#option').modal("show")
          }
        },
        start(){
          let self = this

          self.$Progress.start()

          setTimeout(function () { self.$Progress.pause() }, 4000)
        },
        finish(){
          let self = this

          self.$Progress.finish()
        }
        },
        props: {
          html: {
            type: String,
            default: '',
          },
        },
    }
</script>


