<template>
  <div id="app">
    <div class="container">
      <div class="row">
          <div class="col-xs-6 col-md-2" v-for="name in namelist">
            <a href="#!" class="thumbnail" style="vertical-align: middle">
            <router-link :to="{ name: 'courses', params: { id:name }}">
              <img class="menu" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-alphanumeric/070841-glossy-black-icon-alphanumeric-letter-c.png" width="120">
            <h4 class="title">
              {{name}}
            </h4>
            </router-link>่
          </a>
          </div>
          <!-- <div class="col-xs-6 col-md-4">
            <router-link :to="{ name: 'courses', params: { id:namelist[1] }}">
            <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-alphanumeric/070841-glossy-black-icon-alphanumeric-letter-c.png" width="46px" height="46px">
            <h4 class="title">
              ภาษา CPP
            </h4>
            </router-link>่
          </div> -->
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
<style scoped>
#app {
  margin-top: 20px;
}
</style>
