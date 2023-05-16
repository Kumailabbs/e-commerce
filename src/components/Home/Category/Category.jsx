import { useNavigate } from "react-router-dom";
import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import cat2 from "../../../assets/category/cat-2.jpg"
import cat3 from "../../../assets/category/cat-3.jpg"
import cat4 from "../../../assets/category/cat-4.jpg"

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                 {/* <div className="category">
                  <img src={cat1} alt=""/>
              </div>
              <div className="category">
                  <img src={cat1} alt=""/>
              </div>
              <div className="category">
                  <img src={cat1} alt=""/>
              </div>
              <div className="category">
                  <img src={cat1} alt=""/>
             </div> */}
                
                    <div className="category"
                        onClick={() => navigate(`/category/1`)}
                    >
                        <img
                            src={cat1
                                // process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                // item.attributes.img.data.attributes.url
                            }
                            alt=""
                        />
                    </div>
                    <div className="category"
                        onClick={() => navigate(`/category/2`)}
                    >
                        <img
                            src={cat2
                                // process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                // item.attributes.img.data.attributes.url
                            }
                            alt=""
                        />
                    </div>
                    <div className="category"
                        onClick={() => navigate(`/category/3`)}
                    >
                        <img
                            src={cat3
                                // process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                // item.attributes.img.data.attributes.url
                            }
                            alt=""
                        />
                    </div>
                    <div className="category"
                        onClick={() => navigate(`/category/4`)}
                    >
                        <img
                            src={cat4
                                // process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                // item.attributes.img.data.attributes.url
                            }
                            alt=""
                        />
                    </div>
             
               
            </div>
        </div>
    );
};

export default Category;
