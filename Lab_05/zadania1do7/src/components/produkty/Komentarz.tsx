import React, { useState } from "react";

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

const Comment: React.FC<propsComment> = ({id,body,postId,likes,user}) => {
    const [likesCount,setLikes] = useState(likes);

    const clickLike = () => setLikes(likesCount + 1);
    const clickDislike = () => setLikes(likesCount > 0 ? likesCount - 1 : 0);

    return (
        <div className="Comment">
            <h3>{user.fullName} ({user.username})</h3>
            <p>{body}</p>
            <div className="Details">
                <span>ID komentarza: {id}</span>
                <span>ID posta: {postId}</span>
            </div>
            <div className="Likes">
                <button onClick={clickLike}>👍</button>
                <button onClick={clickDislike}>👎</button>
                <span>Likes: {likesCount}</span>
            </div>
        </div>
    );
};

export default Comment;