export class AssetsHelper {
  public static imgUrl(path: string): string {
    const url = new URL(`/src/assets/images/${path}`, import.meta.url);
    return url.href;
  }
}
