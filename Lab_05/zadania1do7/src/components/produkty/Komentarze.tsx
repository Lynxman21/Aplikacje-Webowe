import React, { useEffect, useState } from "react";
import Comment from "./Komentarz";

interface User {
    id: number;
    username: string;
    fullName: string;
}

interface propsComment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}

const Comments: React.FC = () => {
    const [comments,setComments] = useState<propsComment[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
            .then(response => response.json())
            .then(data => {
                setComments(data.comments);
            })
            .catch(error => console.error('Błąd podczas pobierania danych: ', error));
    },[]);

   return (
        <div className="Comment">
            <h1>Komentarze</h1>
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    id={comment.id}
                    body={comment.body}
                    postId={comment.postId}
                    likes={comment.likes}
                    user={{id: comment.user.id, username: comment.user.username, fullName: comment.user.fullName}}
                />
            ))}
        </div>
   );
};
export default Comments;