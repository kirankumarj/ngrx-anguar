export interface Article {
  id: number;
  title: string;
  category: string;
}
export interface AppArticleState {
  articleState: ArticleState;
}
export interface ArticleState {
  articles: Article[];
}
