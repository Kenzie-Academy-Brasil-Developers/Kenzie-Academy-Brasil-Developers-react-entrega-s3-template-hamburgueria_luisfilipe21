import { ProductCard } from "./ProductCard";
import style from './style.module.scss';

export const ProductList = ({ productList, setCartList, addToCart, test}) => {
   return (
      <section className="container">
         <ul className={style.cardBox}>
            {productList.map((product) => (
               <ProductCard
                  key={product.id}
                  product={product}
                  setCartList={setCartList} 
                  addToCart={addToCart}
                  test={test}
                  />
            ))}
         </ul>
      </section>
   );
};
