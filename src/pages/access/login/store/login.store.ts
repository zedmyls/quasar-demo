import { defineStore } from 'pinia';
import { Dark } from 'quasar'

export const useLoginStore = defineStore('login', {
  state: () => ({
    username: '',
    password: '',
    isCachePassword: false,
  }),
  actions: {
    submit() {
      Dark.toggle();
      console.log(this.username);
      console.log(this.password);
      console.log(this.isCachePassword);
    },
  },
});
