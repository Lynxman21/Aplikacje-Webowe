import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style/form.css';

interface Article {
    id: number,
    title: string,
    content: string,
}

const AddArticle: React.FC = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const navigate = useNavigate();

    const add = () => {
        const storedArticles = localStorage.getItem('articles');
        const articles = storedArticles ? JSON.parse(storedArticles) : [];
        const newID = articles.length > 0 ? articles[articles.length-1].id + 1 : 1;
        const newArticle: Article = {
            id: newID,   
            title,
            content,
        };
        articles.push(newArticle);
        localStorage.setItem('articles',JSON.stringify(articles));
        navigate('/blog');
    };

    return (
        <div>
            <h1>Dodaj artykuł</h1>
            <div className="input">
                <input type="text" placeholder="Tytuł" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea style={{width:'325px', height: '400px'}} placeholder="Treść" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <button onClick={add}>DODAJ</button>
            </div>
        </div>
    );
};

export default AddArticle;