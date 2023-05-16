import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    return (
        // <div className="products-container">
        //     {!innerPage && <div className="sec-heading">{headingText}</div>}
        //     <div className={`products ${innerPage ? "innerPage" : ""}`}>
        //         {products?.data?.map((item) => (
        //             <Product
        //                 key={item.id}
        //                 id={item.id}
        //                 data={item.attributes}
        //             />
        //         ))}
        //     </div>
        // </div>
        <div className="products-container">
           { !innerPage &&  <div className="sec-heading">{headingText}</div>}

            <div className="products">
               <Product
                  id = { 1}
                  image = { require("../../assets/products/cat-1.jpg") }
                  title = "Product 1"
                  price = { 9.99}
                />

               <Product
                id={2}
                image={require("../../assets/products/cat-2.jpg")}
                title="Product 2"
                price={19.99}
               />
                <Product
                id={3}
                image={require("../../assets/products/cat-3.jpg")}
                title="Product 3"
                price={19.99}
               />
                <Product
                id={4}
                image={require("../../assets/products/cat-4.jpg")}
                title="Product 4"
                price={19.99}
               />
               <Product
                  id = { 1}
                  image = { require("../../assets/products/cat-1.jpg") }
                  title = "Product 1"
                  price = { 9.99}
                />

               <Product
                id={2}
                image={require("../../assets/products/cat-2.jpg")}
                title="Product 2"
                price={19.99}
               />
                <Product
                id={3}
                image={require("../../assets/products/cat-3.jpg")}
                title="Product 3"
                price={19.99}
               />
                <Product
                id={4}
                image={require("../../assets/products/cat-4.jpg")}
                title="Product 4"
                price={19.99}
               />

             </div>
         </div>
    );
};

export default Products;
