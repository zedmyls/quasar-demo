import { defineStore } from 'pinia';
import { ArticleModel } from 'src/models/article/article.model';

export const useArticleEditStore = defineStore('article-edit', {
  state: () => ({
    article: {
      content: '',
    } as ArticleModel,
  }),

  actions: {
    submit() {
      console.log(this.article);
    },
  },
});
