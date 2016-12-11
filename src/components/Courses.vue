<template>
  <div id="app">
    <div id="app">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row">

              <!-- <router-link :to="'/showplay?v='+namelist[0]"> -->
            <div class="col-xs-6 col-md-4" v-for="name in namelist">
              <router-link :to="{ name: 'showplay', params: { id:namelist[0], subject:subject }}">
              <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-alphanumeric/070841-glossy-black-icon-alphanumeric-letter-c.png" width="46px" height="46px">
              <h4 class="title">
                {{name}}
              </h4>
              </router-link>่
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
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
      this.namelist = Object.keys(this.listplay[this.subject])
    }
  },
  data () {
    return {
      namelist: [{}]
    }
  },
  computed: {
    subject () {
      let vm = this
      return vm.$route.params.id
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
