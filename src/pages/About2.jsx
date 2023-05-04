import React from 'react'
import { Link } from 'react-router-dom';
import path from './2.2.jpg'
import q from './About.module.css';


const About2 = () => {

  const technologies = [
    {
      name: "development2",
      sr: path,
      link: "/",
    },
  ];
  return (
    <div>
      {
        technologies.map((el) => {
          return (
          <Link to={el.link} key={`${el.path}`} >
              <img className={q.sas} src={el.sr} alt="" />
          </Link>
          )
        })};
            <div className={q.content}>
        <h1>News</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni magnam
        illo, error aut, autem totam atque, ratione nisi voluptates labore
        perspiciatis eligendi. Velit quidem laborum dicta nisi, eveniet qui
        quos? Eius aut veritatis libero iusto perspiciatis dolores, ipsam
        inventore laboriosam tenetur nulla eum, ad tempore fuga, consequuntur
        sit vel quam pariatur earum non distinctio dolor est enim facilis!
        Adipisci, aspernatur. Ad laboriosam laudantium placeat dolorem
        voluptatibus! Non ipsa esse accusantium autem eum nobis vero quo quod
        dolorem quae, suscipit similique est, velit repudiandae. Adipisci nobis
        velit accusantium a. Eaque, consequuntur.
      </p></div>
    </div>
  )
}

export default About2