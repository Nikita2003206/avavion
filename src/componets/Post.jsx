import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({image, name, content, price, id}) => {
  return (
    <div className="post">
      <img src={image} />
      <h2 className="name">{name}</h2>
      <div className="content">
        {content}
      </div>
      <div className="subtitle">от {price} Р</div>
      <Link to={"/posts/" + id} className='link'>Перейти</Link>
    </div>
  );
};

export default Post;
