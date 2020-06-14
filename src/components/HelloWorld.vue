<template>
  <div class="hello-wrapper">
    <h1>{{ msg }}</h1>
    <h1>{{ computedMessage }}</h1>
    <el-button type="primary" v-on:click="onButtonClick">Primary</el-button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

type PropObjType = {
  name: string;
  age: number;
  gender: 'man' | 'woman';
};

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
    msgObj: Object as PropType<PropObjType>,
  },
  created(): void {
    console.log('Call crerated function');
  },
  computed: {
    computedMessage(): string {
      return `name: ${this.msgObj.name}, age: ${this.msgObj.age}, gender: ${this.msgObj.gender}`;
    },
  },
  methods: {
    onButtonClick() {
      console.log('Button Click');
      this.msgObj.age++;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello-wrapper {
  h1 {
    background-color: pink;
  }
}
</style>
