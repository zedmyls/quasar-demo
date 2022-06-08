import { defineStore } from 'pinia';
import { CacheManager } from 'src/utils/cache-manager';
import service from 'src/network';
import { UserModel } from 'src/models/user.model';
import Router from 'src/router';

export const UserStore = defineStore('user', {
  state: () => ({
    token: '',
    user: <UserModel>{},
  }),
  getters: {
    isLogin(state) {
      return state.token.length > 0;
    },
  },
  actions: {
    setToken(t: string) {
      this.token = t;
      CacheManager.setToken(t);
    },
    logOut() {
      this.$reset();
      CacheManager.setToken('');
      Router.replace('/');
    },
    async load() {
      const res = await service.get('user');
      this.user = res.data.user;
    },
  },
});
