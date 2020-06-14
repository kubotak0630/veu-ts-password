<template>
  <div id="app">
    <PassWord
      class="passwd"
      v-if="!passwordDoneFlg"
      @password-event="onRecievePasswordResult"
    ></PassWord>
    <HelloWorld v-if="passwordDoneFlg" :msg="msg" :msgObj="msgObj"></HelloWorld>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import PassWord from './components/PassWord.vue';

type DataType = {
  msg: string;
  msgObj: { name: string; age: number; gender: 'man' | 'woman' };
  passwordDoneFlg: boolean;
};

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    PassWord,
  },
  data(): DataType {
    return {
      msg: 'Kubota',
      msgObj: { name: 'kubota', age: 44, gender: 'man' },
      passwordDoneFlg: false,
    };
  },
  methods: {
    onRecievePasswordResult(result: boolean) {
      this.passwordDoneFlg = result;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* .passwd {
  margin: 100px auto;
} */
</style>
