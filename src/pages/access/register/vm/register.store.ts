import { defineStore } from 'pinia';
import { RegisterReqModel } from 'pages/access/register/vm/register-req.model';
import { requestWithLoading } from 'src/utils/functions';
import service from 'src/network';
import { Dialog } from 'quasar';

export const useRegisterStore = defineStore('register', {
  state: () => ({
    user: {} as RegisterReqModel,
    repeatPwd: undefined,
    isPwd: true,
    isAgree: false,
  }),
  actions: {
    submit() {
      if (!this.isAgree) {
        return false;
      }

      requestWithLoading<string>(
        () => service.post('register', this.user),
        (data) => {
          console.log(data);
        }
      ).then();
    },
    showDialog() {
      Dialog.create({
        message: '<p>用户规范，可以使用<strong>html模板</strong></p>',
        title: '用户使用规范',
        html: true,
      });
    },
  },
});
