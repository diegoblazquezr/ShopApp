import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Home = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:3000/api/categories`);
        const json = res.data;

        // console.log(json);
        setCategories(json);
      } catch (e) {
        console.error(e);
        setCategories([]);
      }
    }

    fetchData();
  }, []);

  const renderCategories = () =>
    categories.map((category) => (
      <a href={`http://localhost:5173/products?search=&categoryName=${category.name}&filter=dateadded&order=asc&limit=10&offset=0`} className="linkCategory" key={uuidv4()}>
        <article className="articleCateogories">
          <img src={category.image_url} alt={name} />
          <h3>{category.name}</h3>
        </article>
      </a>
    ));

  return (
    <section>
      <h2 className="titlePage">/Home</h2>
      <section id="sectionCategories">
        {renderCategories()}
      </section>
    </section>
  )
};

export default Home;
