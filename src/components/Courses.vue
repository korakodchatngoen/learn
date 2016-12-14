<template>
  <div id="app">
    <div id="app">
      <div style="height:190px;background-color:#42494b">
        <div class="container">
          <div class="row">
          <div class="col-xs-12 col-md-4" style="vertical-align: middle">
            <img class="pull-left" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-alphanumeric/070841-glossy-black-icon-alphanumeric-letter-c.png" width="70px">
            <h2 style="color:#fff" class="pull-left">C language</h2>
          </div>
          </div>
          <hr>
          <p style="color:#fff;font-size:large;text-align:left">Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.</p>
        </div>
      </div>
      <div class="container">
        <div cass="row">
          <div class="col-xs-12 col-md-12" style="vertical-align: middle;padding:20px">
            <h4>C Courses</h4>
          </div>
        </div>
              <!-- <router-link :to="'/showplay?v='+namelist[0]"> -->
            <div class="col-xs-6 col-md-4" v-for="name in namelist">
                <a href="#!" class="thumbnail" style="vertical-align: middle;">
              <router-link :to="{ name: 'showplay', params: { id:namelist[0], subject:subject }}">
              <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-alphanumeric/070841-glossy-black-icon-alphanumeric-letter-c.png" width="100px">
              <h4 class="title">
                {{name}}
              </h4>
              </router-link>่
            </a>
        </div>
        </div>
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
  margin-top: 0px;
}
</style>
