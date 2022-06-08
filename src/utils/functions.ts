import { QSpinnerFacebook, Loading } from 'quasar';
import { AxiosResponse } from 'axios';

export const requestWithLoading = async <T>(
  request: () => Promise<AxiosResponse>,
  callback?: (data: T) => void
) => {
  Loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: 'yellow',
    spinnerSize: 140,
    backgroundColor: 'purple',
    message: '拼命加载中...',
    messageColor: 'black',
  });

  const res = await request();
  Loading.hide();
  callback?.(res.data);
};
