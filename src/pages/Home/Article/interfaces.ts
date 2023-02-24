export interface IArticle {
    body: string,
    created_at: Date,
    id: number,
    picture: string,
    title: string,
    updated_at: Date,
    user_id: string
}

export interface IArticleState {
    articles: IArticle[],
    fetchStatus: string,
    articleDetails: any
}