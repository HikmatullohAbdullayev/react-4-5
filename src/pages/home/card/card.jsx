import React from "react";
import { Link } from "react-router-dom";
import { Loader } from "../loading";
import cardStyle from "./card.module.css";
export const Card = () => {
  const [state, setState] = React.useState([]);

  const getData = async () => {
    try {
      <Loader />;
      const res = await fetch("https://testserver-ql7j.onrender.com/posts");
      const data = await res.json();

      setState(data);

      return data;
    } catch (error) {}
  };

  React.useEffect(() => {
    getData();
  }, []);
  console.log(state);

  return (
    <>
     <div className={cardStyle.products_container}>
     {state.map((item) => (
        <Link target="_blank" to="product">
        <div className={cardStyle.product_box}>
          <img className={cardStyle.card_img} src={item.img} />
          <div className={cardStyle.content_box}>
            <p className={cardStyle.product_name}>{item.title}</p>
            <p className={cardStyle.product_pricr}>{item.price}</p>
            <p className={cardStyle.product_discount}>{item.discountPrice}</p>
          </div>
        </div>
        </Link>

      ))}
     </div>
    </>
  );
};
