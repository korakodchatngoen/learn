<template>
  <div id="app">
    <router-view :link="link" :listplay="listplay" :list="list"></router-view>
  </div>
</template>

<script>
import Mains from './components/Mains'
import ShowPlay from './components/ShowPlay'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDjI8vU1Ej2jGsuXTKj26MKMSVIOU8nCYU',
  authDomain: 'project-c2a75.firebaseapp.com',
  databaseURL: 'https://project-c2a75.firebaseio.com',
  storageBucket: 'project-c2a75.appspot.com',
  messagingSenderId: '584449234491'
}
firebase.initializeApp(config)

var Listplay = firebase.database().ref('listplay')

export default {
  name: 'app',
  components: {
    Mains,
    ShowPlay
  },
  mounted () {
    var vm = this
    vm.$router.push('./mains')
    Listplay.on('child_added', function (snapshot) {
      var item = snapshot.val()
      vm.listplay[snapshot.key] = item
    })
    Listplay.on('child_changed', function (snapshot) {
      var id = snapshot.key
      var list = vm.listplay.find(list => list.id === id)
      list.color = snapshot.val().color
      list.pic = snapshot.val().pic
      list.x = snapshot.val().x
      list.y = snapshot.val().y
      // change
    })
    Listplay.on('child_removed', function (snapshot) {
      var id = snapshot.key
      vm.listplay.splice(vm.listplay.findIndex(list => list.id === id), 1)
    })
    // console.log(vm.listplay.c)
    // var list = {
    //   c: {
    //     SIPAProgramming: [{
    //       ep: 'แนะนำคอร์สเรียน',
    //       link: '5HoW47BB9ME'
    //     }, {
    //       ep: 'การเขียนโปรแกรมคอมพิวเตอร์',
    //       link: '_AOvS5MdqYM'
    //     }, {
    //       ep: 'การเขียนโปรแกรมภาษา C',
    //       link: 'ZeMV0ZtixNc'
    //     }]
    //   }
    // }
    firebase.database().ref('listplay/c').update({
      SIPAProgramming: [{
        ep: 'แนะนำคอร์สเรียน',
        link: '5HoW47BB9ME'
      }, {
        ep: 'การเขียนโปรแกรมคอมพิวเตอร์',
        link: '_AOvS5MdqYM'
      }, {
        ep: 'การเขียนโปรแกรมภาษา C',
        link: 'ZeMV0ZtixNc'
      }],
      SIPAProgrammings: [{
        ep: 'แนะนำคอร์สเรียน',
        link: '5HoW47BB9ME'
      }, {
        ep: 'การเขียนโปรแกรมคอมพิวเตอร์',
        link: '_AOvS5MdqYM'
      }, {
        ep: 'การเขียนโปรแกรมภาษา C',
        link: 'ZeMV0ZtixNc'
      }]
    })
    firebase.database().ref('listplay/cpp').update({
      mhacomKone: [{
        ep: 'UnderstandBasicOfCPP',
        link: 'HypeKlDqcFo'
      },
      {
        ep: 'coutObject์',
        link: 'rLD4oQz-wJs'
      }]
    })
  },
  data () {
    return {
      link: '',
      listplay: {
        c: {
        },
        cpp: {
        }
      //   c: {
      //     SIPAProgramming: [{
      //       ep: 'แนะนำคอร์สเรียน',
      //       link: '5HoW47BB9ME'
      //     },
      //     {
      //       ep: 'การเขียนโปรแกรมคอมพิวเตอร์',
      //       link: '_AOvS5MdqYM'
      //     },
      //     {
      //       ep: 'การเขียนโปรแกรมภาษา C',
      //       link: 'ZeMV0ZtixNc'
      //     }]
      //   },
      //   cpp: {
      //     mhacomKone: [{
      //       ep: 'UnderstandBasicOfCPP',
      //       link: 'HypeKlDqcFo'
      //     },
      //     {
      //       ep: 'coutObject์',
      //       link: 'rLD4oQz-wJs'
      //     }]
      //   }
      }
    }
  },
  methods: {
    list (subject, cr, index) {
      this.link = this.listplay[subject][cr][index].link
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
