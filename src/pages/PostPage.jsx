import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = React.useState();
  const [load, setLoad] = React.useState(true);

  const fetchServices = async () => {
    const response = await fetch(`https://flowers.avavion.ru/api/products/${id}`);
    const data = await response.json();

    setPost(data.data);
    setLoad(false);
  };

  React.useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      {load ? (
        <h1>Идет загрузка</h1>
      ) : (
        <div className="post">
          <img src={post.preview_image} />
          <h2 className="name">{post.name}</h2>
          <div className="content">{post.text}</div>
          <div className="subtitle">От {post.price} ₽</div>
          <Link to="/" className="link">
            Назад
          </Link>
        </div>
      )}
    </>
  );
};

export default PostPage;
