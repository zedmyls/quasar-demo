import { defineStore } from 'pinia';
import { RegisterReqModel } from 'src/models/access/register-req.model';
import { requestWithLoading } from 'utils/functions';
import { Dialog } from 'quasar';
import { fetchPost } from 'network/request';

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
        () => fetchPost('register', this.user, { isShowSuccessMsg: false }),
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
