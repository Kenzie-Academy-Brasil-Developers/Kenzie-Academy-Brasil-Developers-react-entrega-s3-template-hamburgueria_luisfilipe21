import { MdDelete } from "react-icons/md";

import style from "./style.module.scss";

export const CartItemCard = ({ product, deleteById }) => {
   const { img, name, price } = product;
   return (
      <li className={style.itemList}>
         <div>
            <img src={img} alt={name} />
            <div className={style.itemInfo}>
               <h3 className="heading3">{name}</h3>
               <p className="body600">{price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
               })}</p>
            </div>
         </div>
         <button 
         aria-label="delete" 
         title="Remover item" 
         onClick={() => deleteById(product.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
