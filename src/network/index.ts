import axios, { AxiosInstance } from 'axios';
import { UserStore } from 'src/stores/user.store';
import { Loading, Notify } from 'quasar';

// 创建axios
const service = axios.create({
  baseURL: 'http://8.142.78.19:24746/api/', // 线上环境
  //baseURL: "http://localhost:24746/api/", // 本地环境
  timeout: 10000,
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const userStore = UserStore();

    if (userStore.token.length > 0) {
      config.headers!.Authorization = `Bearer ${userStore.token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    if (
      response.status >= 200 &&
      response.status < 300 &&
      response.data.message
    ) {
      Notify.create({
        message: response.data.message,
        position: 'top',
        type: 'positive',
        timeout: 1000,
      });
    }

    return response;
  },
  function (error) {
    if (Loading.isActive) Loading.hide();
    if (error.response.data.message) {
      Notify.create({
        message: error.response.data.message,
        position: 'top',
        type: 'negative',
        timeout: 1000,
      });
    }

    return Promise.reject(error);
  }
);

export default service as AxiosInstance;
