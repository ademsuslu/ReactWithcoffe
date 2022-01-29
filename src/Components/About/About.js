import React, { useState } from 'react';
import AboutImg from "./img/About.jpg"

const info = "Lorem ipsum dolor dolorem a laboriosam nobis repudiandae suscipit facilis, in deserunt iste debitis quae obcaecati molestiae ipsam. Quaerat consequatur explicabo at molestias tenetur perferendis illo sit rem, libero officiis blanditiis assumenda facere unde minus expedita odit quisquam magnam possimus commodi accusamus nesciunt, natus eum delectus! Praesentium, debitis mollitia doloremque assumenda adipisci autem tenetur provident dolores, sed, esse iusto cumque dolorum quia! Dolores totam eligendi, beatae aperiam dolor voluptatum doloremque laboriosam aliquid fugit incidunt harum saepe est sequi magni. Temporibus facere deserunt molestias dicta ullam iusto aliquid id animi, autem illo repellat veritatis itaque consectetur esse, accusamus dignissimos distinctio cupiditate magni optio voluptates! Eaque incidunt commodi consequuntur quisquam similique dignissimos, cumque nulla nesciunt laudantium maiores excepturi velit in quasi autem debitis labore iusto! Fugit non itaque, commodi reprehenderit assumenda nostrum sed dolore officia fuga soluta, neque quos facere velit placeat aliquid aut excepturi dolorum architecto distinctio, explicabo veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus dolor alias esse, quos magni neque vero ab atque magnam voluptate nihil quas suscipit eos veritatis impedit fugit vitae eius non molestias. Odio consequuntur corrupti corporis  unde voluptas et sapiente mollitia!"
const About = () => {
  const [readMore, setReadMore] = useState(false);
  return <div id="Abouts" className="Abouts">
    <div className="About-img">
      <img src={AboutImg} alt="Coffe" />
    </div>
    <div className="info">
      <h1>About Us</h1>
      <p>
        {
          readMore ? info : `${info.substring(0, 200)}...`
        }
      </p>
      <a className="link" onClick={() => setReadMore(!readMore)}>
        {readMore ?  "See Less" : "See More"}
      </a>
    </div>
  </div>;
};

export default About;
