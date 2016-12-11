<template>
  <div id="app">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-xs-6 col-md-4" v-for="name in namelist">
            <router-link :to="{ name: 'courses', params: { id:name }}">
            <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-alphanumeric/070841-glossy-black-icon-alphanumeric-letter-c.png" width="46px" height="46px">
            <h4 class="title">
              ภาษา {{name}}
            </h4>
            </router-link>่
          </div>
          <!-- <div class="col-xs-6 col-md-4">
            <router-link :to="{ name: 'courses', params: { id:namelist[1] }}">
            <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-alphanumeric/070841-glossy-black-icon-alphanumeric-letter-c.png" width="46px" height="46px">
            <h4 class="title">
              ภาษา CPP
            </h4>
            </router-link>่
          </div> -->
          <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['link', 'listplay', 'list'],
  components: {
  },
  mounted () {
    this.thisName()
  },
  methods: {
    thisName () {
      this.namelist = Object.keys(this.listplay)
    }
  },
  data () {
    return {
      namelist: [{}]
    }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
