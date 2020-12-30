<template>


     
<div class="container" >
  <div class="col-sm-12">
<div class="alert alert-danger alert-dismissible" v-if="error">
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
      {{ msg }}
    </div>
    <div class="alert alert-success alert-dismissible" v-if="success">
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
      {{ msg }}
    </div>
            <template v-if="showAll">

    <table class="table table-striped" style="width:100%;">

                    <thead>
                    <tr>
                    <th>kode transaksi</th>
                    <th>tanggal transaksi</th>
                    <th>total</th>
                    <th>nama kasir</th>
                    </tr>
                    </thead>
                    <tbody>
                          <tr>
                    <td>{{ transactions.code_transaction }}</td>
                    <td>{{ transactions.date_transaction }}</td>
                    <td>{{ transactions.total }}</td>
                    <td>{{ transactions.name }}</td>

                          </tr>
                       
                       

                    </tbody>




                </table>
                <div class="panel">
            <div class="panel-heading">
                <h2>Keranjang Pemesanan</h2>
                </div>
                            <button v-if="transactions == null" class="btn btn-primary" @click="initAddData(user_id)">Tambah Pesanan</button>
                        <button v-if="transactions != null" class="btn btn-primary" @click="initAddDataTrans(user_id,transactions.id)">Tambah Pesanan</button>

            <div class="panel-body">

                    <div class="col-md-12 responsive-table">
                        <v-client-table :data="pesanans" :columns="[ 'name','qty_pesan','subtotal','aksi']">
           
                            <template slot="aksi" slot-scope="props">
                                   <button class="btn btn-success"   @click="initJawaban(props.row.id)">Ubah</button>
                                   <button class="btn btn-info"  @click="initDelete(props.row.id)">Hapus</button>
                 

                             </template>
</v-client-table>


                    </div>
                      <button v-if="pesanans != null" class="btn btn-primary" @click="initAddData(user_id)">Submit Pembayaran</button>
            
                </div>
         </div>
                       
            </template>
            
             <template v-else-if="showLoading">
                <div class="panel">
            <div class="panel-heading">
                <h2>Keranjang Pemesanan</h2>
                </div>
            <div class="panel-body">

                    <div class="col-md-12 responsive-table">
                      <center>
   Mohon Menunggu ...

                      </center>


                    </div>
                </div>
         </div>
            </template>


          <div id="add_data" class="modal fade" data-backdrop="static" role="dialog" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title">Tambah Pesanan</h4>
          </div>

          <div class="modal-body">

              <div class="row">
                  <div class="col-lg-12">
            
 <div class="form-group">
              <label for="">produk yang di pesan</label>
                               <multiselect
                  v-model="value_product"
                  tag-placeholder="Pilih produk"
                  placeholder="Pilih produk"
                  label="name"
                  track-by="id"
                  :options="products"
                  :multiple="false"
                  >
                  <span slot="noResult">Produk Habis </span>
              </multiselect>
             </div>
             
<div class="form-group">
              <label for="">jumlah produk</label>
                  <input type="number" v-model="jumlah" class="form-control">
     
             </div>
                 <input type="hidden" v-model="user_id" class="form-control">
      <input type="hidden" v-model="id_transaction" class="form-control">
     
                  </div>
      
              </div>
           

          </div>
          <div class="modal-footer">
            <button @click="addData" class="btn btn-success">Simpan</button>
          </div>
        </div>
      </div>
    </div>


  </div>
 

</div>



        
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>

    import Multiselect from 'vue-multiselect';
export default {

        data(){

          return {
              state:{
                  date: ''
              },
            error: false,
            success: false,
             showData:false,
             showAll:false,
             showFilter:false,
             showLoading: false,
             keterangan:'',
             value_product:[],
            msg: '',
            user_id: '',
            id_transaction : '',
            id: '',
            jumlah:'',
            id_transaction: '',
            pesanans:[],
            products: [],
            transactions: {
              id : ''
          },

          }
        },
        created() {
            this.readTasks()
        },
        methods: {
          initDelete(id){
              let conf = confirm("Anda yakin ingin menghapus?");
            if (conf === true) {
              let vm = this;

              axios.post('/pesan_delete', {
                      id: id,
                  })
              .then(function (response) {

                vm.reset()
            vm.readTasks()

              if(response.data.code == 400){
                vm.error = true
                vm.msg = response.data.msg
              }else{
                vm.success = true
                vm.msg = response.data.msg
              }


              })
              .catch(function (error) {
                console.log(error)

              });
            }

          },
          addData(){
                  let vm = this;


            axios.post('/add_pesanan', {
                    product : vm.value_product,
                    jumlah : vm.jumlah,
                    user_id : vm.user_id,
                    id_transaction : vm.id_transaction


                })
            .then(function (response) {
              vm.reset()

              vm.readTasks()

                   $("#add_data").modal("hide")
              if(response.data.code == 400){
                vm.error = true
                vm.msg = response.data.msg
              }else{
                vm.success = true
                vm.msg = response.data.msg
              }


            })
            .catch(function (error) {


            });
          },
            initAddData(user_id){

                   $("#add_data").modal("show")

            let vm = this;

            vm.id = user_id
     
            },
             initAddDataTrans(user_id,id_transaction){

                   $("#add_data").modal("show")

            let vm = this;

            vm.id = user_id
            vm.id_transaction = id_transaction
     
            },
            initReapet(id,kategori_id){
                       let self = this;


            self.id = id
            self.kategori_id = kategori_id

                    window.location = "/verifikasi_ulang/"+id+"/"+kategori_id




            },
            initJawaban(id,kategori_id){

                let self = this;


            self.id = id
            self.kategori_id = kategori_id

                    window.location = "/verifikasi_jawaban/"+id+"/"+kategori_id


            },
            setTanggal(kategori_id,year,keterangan){
                  let vm = this;


            axios.post('/set_date', {
                    tanggal: vm.state.date,
                    id_kategori: vm.kategori_id,
                    year: vm.year,
                })
            .then(function (response) {

              vm.reset()
                if(vm.keterangan == 'filter'){
                    vm.readData()
                }
                else if(vm.keterangan == 'pertahun'){
                    vm.readPertahun()
                }else{
                    vm.readTasks()
                }



              if(response.data.code == 400){
                vm.error = true
                vm.msg = response.data.msg
              }else{
                vm.success = true
                vm.msg = response.data.msg
              }


            })
            .catch(function (error) {




            });


            },
            readData(){
            let self = this
      self.showLoading = true
       self.showFilter = false
          self.showAll= false

         axios.post('/get_pesanan', {
                    id_transaction : self.id_transaction
                }).then(response => {
               self.pesanans = response.data.pesanan
                 self.products = response.data.product
                self.user_id= response.data.user_id
                 self.transactions = response.data.transaction
                    self.showLoading = false
                  self.showAll= false
                  self.showFilter = true

            });
          },
          readPertahun(){
                   let self = this;
                 self.showLoading = true
                  self.showAll= false
                   self.showFilter = false
                axios.post('/BadanPublik/list_pertahun', {
                    year : self.value_tahun
                }).then(response => {

                self.badan_publiks = response.data.badan_publik
                 self.kualifikasi = response.data.data_qty
                self.kategori_id = 0
                self.keterangan = 'pertahun'
                self.year = response.data.year
                self.value_kategori = []
                self.showLoading = false
                  self.showAll= true
                  self.showFilter = false

                });

          },
          readTasks(){
               let self = this
                self.showLoading = true
                 self.showAll= false
                  self.showFilter = false
            axios.get('/get_pesanan')
            .then(function (response) {
              self.pesanans = response.data.pesanan
                 self.products = response.data.product
                self.user_id= response.data.user_id
                 self.transactions = response.data.transaction
                self.showLoading = false
                self.showAll= true
                self.showFilter = false

            });

          },

          onFileChange() {
           this.dokumen_juri_1 = this.$refs.file.files[0];


          },
            onFileChange1() {
               this.dokumen_juri_2 = this.$refs.file1.files[0];

          },
            onFileChange2() {
               this.dokumen_juri_3 = this.$refs.file2.files[0];

          },
          reset(){
            this.id = ''
             this.nilai = ''
             this.state.date = ''
             this.nilai_1 = ''
             this.nilai_2 = ''
             this.nilai_3 = ''
             this.juri_1 = ''
             this.juri_2 = ''
             this.juri_3 = ''
            this.dokumen_juri_1 = ''
            this.dokumen_juri_2 = ''
            this.dokumen_juri_3 = ''

          }

        }
      }
</script>



