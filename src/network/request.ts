import { AxiosRequestConfig } from 'axios';
import service from './index';
import { UserStore } from 'stores/user.store';
import { Notify } from 'quasar';

export const KEY_TOKEN = 'Authorization';

export type FetchConfig = AxiosRequestConfig & {
  needAuth?: boolean;
  isShowSuccessMsg?: boolean;
};

const getAuth = (): string => {
  const userStore = UserStore();
  return userStore.token;
};

const showSuccessMsg = (message: string) => {
  Notify.create({
    message,
    position: 'top',
    type: 'positive',
    timeout: 1000,
  });
};

export function fetchGet(url: string, config?: FetchConfig): Promise<any> {
  if (config?.needAuth) {
    const token = getAuth();
    config = {
      headers: {
        ...config.headers,
        [KEY_TOKEN]: token ? `Bearer ${token}` : undefined,
      },
    };
  }
  return service.get(url, config).then((res) => {
    config?.isShowSuccessMsg && showSuccessMsg(res.data.message);
    return res.data;
  });
}

export function fetchPost<T>(
  url: string,
  data?: Partial<T>,
  config?: FetchConfig
): Promise<any> {
  if (config?.needAuth) {
    const token = getAuth();
    config = {
      ...config,
      headers: {
        ...config.headers,
        [KEY_TOKEN]: token ? `Bearer ${token}` : undefined,
      },
    };
  }
  return service.post(url, data, config).then((res) => {
    config?.isShowSuccessMsg && showSuccessMsg(res.data.message);
    return res.data;
  });
}

export function fetchPut<T>(
  url: string,
  data?: Partial<T>,
  config?: FetchConfig
): Promise<any> {
  if (config?.needAuth) {
    const token = getAuth();
    config = {
      ...config,
      headers: {
        ...config.headers,
        [KEY_TOKEN]: token ? `Bearer ${token}` : undefined,
      },
    };
  }
  return service.put(url, data, config).then((res) => {
    config?.isShowSuccessMsg && showSuccessMsg(res.data.message);
    return res.data;
  });
}

export function fetchDel(url: string, config?: FetchConfig): Promise<any> {
  if (config?.needAuth) {
    const token = getAuth();
    config = {
      ...config,
      headers: {
        ...config.headers,
        [KEY_TOKEN]: token ? `Bearer ${token}` : undefined,
      },
    };
  }
  return service.delete(url, config).then((res) => {
    config?.isShowSuccessMsg && showSuccessMsg(res.data.message);
    return res.data;
  });
}
