import { QSpinnerFacebook, Loading } from 'quasar';

export const requestWithLoading = async <T>(
  request: () => Promise<any>,
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

  const data = await request();
  Loading.hide();
  callback?.(data);
};
