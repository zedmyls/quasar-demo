import { defineStore } from 'pinia';
import { RegisterReqModel } from 'pages/access/register/vm/register-req.model';
import { requestWithLoading } from 'src/utils/functions';
import service from 'src/network';

export const useRegisterStore = defineStore('register', {
  state: () => ({
    user: {} as RegisterReqModel,
    repeatPwd: undefined,
  }),
  actions: {
    submit() {
      requestWithLoading<string>(
        () => service.post('register', this.user),
        (data) => {
          console.log(data);
        }
      );
    },
  },
});
