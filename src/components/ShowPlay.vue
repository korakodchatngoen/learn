<template>
  <div style="padding:50px;background-color:#363636">
  <div class="container">
    <div class="col-md-8">
      <iframe width="750" height="420" :src="'http://www.youtube.com/embed/'+ link " frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="col-md-4" v-for="num in number">
      <div style="padding:10px;border:1px solid #000;background-color:#252525;text-align:left">
        <a @click = "list(subject,cr,num-1)">
          <img class="menu" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-icons-alphanumeric/070841-glossy-black-icon-alphanumeric-letter-c.png" width="60">
          ตอนที่ {{num}}: {{listplay[subject][cr][num-1].ep}} 
        </a>
        <br>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props: ['link', 'listplay', 'list'],
  mounted () {
    this.link = this.listplay[this.subject][this.cr][0].link
    this.number = this.listplay[this.subject][this.cr].length
  },
  computed: {
    cr () {
      let vm = this
      return vm.$route.params.id
      // vm.$route.params.id.toString()
    },
    subject () {
      let vm = this
      return vm.$route.params.subject
      // vm.$route.params.id.toString()
    }
  },
  data () {
    return {
      number: 0
    }
  }
}

  // data () {
  //   return {
  //     link: '5HoW47BB9ME',
  //     la: ['5HoW47BB9ME', '_AOvS5MdqYM', 'ZeMV0ZtixNc'],
  //     listplay: {
  //       c: [{
  //         cr: 'SIPAProgramming',
  //         ep: 'แนะนำคอร์สเรียน',
  //         link: '5HoW47BB9ME'
  //       },
  //       {
  //         cr: 'SIPAProgramming',
  //         ep: 'การเขียนโปรแกรมคอมพิวเตอร์',
  //         link: '_AOvS5MdqYM'
  //       },
  //       {
  //         cr: 'SIPAProgramming',
  //         ep: 'การเขียนโปรแกรมภาษา C',
  //         link: 'ZeMV0ZtixNc'
  //       }],
  //       cpp: [{
  //         cr: 'mhacomKone',
  //         ep: 'UnderstandBasicOfCPP',
  //         link: 'HypeKlDqcFo'
  //       },
  //       {
  //         cr: 'mhacomKone',
  //         ep: 'coutObject',
  //         link: 'rLD4oQz-wJs'
  //       }]
  //     }
  //   }
  // },
  // methods: {
  //   list (index) {
  //     this.link = this.la[index]
  //   }
  // }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}

</style>
