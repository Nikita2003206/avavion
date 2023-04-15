import React, { useState } from 'react'
import Post from '../componets/Post';

const HomePage = () => {
    const [posts, setPosts] = React.useState();
    const [load, setLoad] = React.useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [select, setSelect] = useState('');

    const onChangeSearchValue  = (value) => {
        setSearchValue(value)
    }

    const onChangeSort = (value) => {
        setSelect(value)
        
    }

    const test = (a, b, value) => {
        if (value === 'DESC') {
            return b.price - a.price
        } else if (value === 'ASC') {
            return a.price - b.price
        } else {
            return posts;
        }
    }

    const fetchServices = async () => {
      const response = await fetch('https://flowers.avavion.ru/api/products');
      const data = await response.json();
  
      setPosts(data.data);
      setLoad(false);
    };
    React.useEffect(() => {
      fetchServices();
    }, []);

    

  return (
    <div>
        <input value={searchValue} onChange={(event) => onChangeSearchValue(event.target.value)} className='search' placeholder='Поиск'/>
        <select className='select' onChange={(event) => onChangeSort(event.target.value)}>
            <option selected value="none" disabled>Выбрать сортировку</option>
            <option value="DESC">От большего к меньшему</option>
            <option value="ASC">От меньшего к большему</option>
        </select>
    {load === true ? (
      <h1 className="title">Идет загрузка</h1>
    ) : (
      posts.sort((a,b) => test(a, b, select)).filter((post) => post.name.toLowerCase().includes(searchValue.toLowerCase()) ).map((post) => (
        <Post
          key={post.id}
          id={post.id}
          image={post.preview_image}
          name={post.name}
          content={post.text}
          price={post.price}
        /> 
      ))
    )}
  </div>
  )
}

export default HomePage