import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, image, title, price }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/product/" + id);
      };
    return (
        <div className="product-card" onClick={handleClick}>
      <div className="thumbnail">
        <img src={image} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{title}</span>
        <span className="price">&#8377;{price}</span>
      </div>
    </div>
        // <div
        //     className="product-card"
        //     onClick={() => navigate("/product/" + id)}
        // >
        //     <div className="thumbnail">
        //         <img src={prod} alt="" />
        //         {/* <img
        //             src={
        //                 process.env.REACT_APP_STRIPE_APP_DEV_URL +
        //                 data.image.data[0].attributes.url
        //             }
        //         /> */}
        //     </div>
        //     <div className="prod-details">
        //         <span className="name">{data.title}</span>
        //         <span className="price">&#8377;{data.price}</span>
        //     </div>
        // </div>
        
        // <div className="product-card">
        //     <div className="thumbnail">
        //         <img src={prod} alt="" />
        //     </div>
        //     <div className="prod-details">
        //         <span className="name">Hello</span>
        //         <span className="price">499$</span>
        //     </div>
        // </div>
    );
};

export default Product;
