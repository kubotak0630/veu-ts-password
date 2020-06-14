<template>
  <div class="passwd-wrapper">
    <h1>Welcome to XXXXXX</h1>
    <div>{{ msg }}</div>
    <el-input
      class="passwd-input"
      placeholder="Please input password"
      v-model="input"
      v-on:change="onEnterPassword"
      show-password
    ></el-input>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import checkPasswordAsync from '../password';

type DataType = {
  input: string;
  msg: string;
};

export default Vue.extend({
  name: 'PassWord',
  props: {},
  data(): DataType {
    return {
      input: '',
      msg: 'Please enter password',
    };
  },
  methods: {
    onEnterPassword(password: string) {
      console.log(password);
      //checkPasswordAsync関数はPromiseを返す
      checkPasswordAsync(password)
        .then(() => {
          console.log(`Promise: resolve`);
          (this as any).$emit('password-event', true);
        })
        .catch(() => {
          console.log('Promise: reject');
          this.msg = 'Wrong password! Try again.';
          (this as any).$emit('password-event', false);
          this.input = '';
        });
    },
  },
});
</script>

<style scoped lang="scss">
.passwd-input {
  margin-top: 6px;
  width: 300px;
}
</style>
