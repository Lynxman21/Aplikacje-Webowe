import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Article {
    id: number,
    title: string,
    content: string,
}

const Blog: React.FC = () => {
    const [articles,setArticle] = useState<Article[]>([]);

    useEffect(() => {
        const storedArticle = localStorage.getItem('articles');
        if (storedArticle) {
            setArticle(JSON.parse(storedArticle));
        }
        console.log(articles);
    },[]);

    return (
        <div>
            <h1>Blogi</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;