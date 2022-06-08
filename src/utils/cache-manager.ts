export class CacheManager {
  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  static clear() {
    const token = CacheManager.getToken();
    localStorage.clear();
    token && CacheManager.setToken(token);
  }

  static getHomeSearchHistoryWords() {
    return localStorage.getItem('home-search-history-words')?.split(',') ?? [];
  }

  static setHomeSearchHistoryWords(words: string) {
    return localStorage.setItem('home-search-history-words', words);
  }

  static clearHomeSearchHistoryWords() {
    localStorage.removeItem('home-search-history-words');
  }

  static getOrgSearchHistoryWords() {
    return localStorage.getItem('org-search-history-words')?.split(',') ?? [];
  }

  static setOrgSearchHistoryWords(words: string) {
    return localStorage.setItem('org-search-history-words', words);
  }

  static clearOrgSearchHistoryWords() {
    localStorage.removeItem('org-search-history-words');
  }
}
