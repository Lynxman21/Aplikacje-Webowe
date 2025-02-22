import React from "react";
import { useParams } from "react-router-dom";

interface Article {
    id: number;
    title: string;
    content: string;
}

const Article: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const storedArticles = localStorage.getItem('articles');
    const articles: Article[] = storedArticles ? JSON.parse(storedArticles) : [];
    const articleId = id ? parseInt(id,10) : undefined;
    const article = articles.find(a => a.id === articleId);

    return (
        <div>
            {article ? (
                <>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                </>
            ) : (
                <p>Artykuł nie istnieje</p>
            )}
        </div>
    );
};

export default Article;