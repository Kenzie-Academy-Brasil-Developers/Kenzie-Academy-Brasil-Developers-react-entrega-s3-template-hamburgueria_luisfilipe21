import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

import style from './style.module.scss';
import { useEffect, useRef } from "react";

export const CartModal = ({ cartList, setModalVisible, excludeAll, deleteById }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const modalRef = useRef(null);
   const buttonRef = useRef(null);


   useEffect(() => {
      const handleModalClick = (e) => {
         if (!modalRef.current?.contains(e.target)) {
            setModalVisible(true);
         }
      }

      window.addEventListener('mousedown', handleModalClick);

      return () => {
         window.removeEventListener('mousedown', handleModalClick);
      }
   }, [])

   useEffect(() => {
      const handleKeyClick = (e) => {
         if (e.key === "Escape") {
            buttonRef.current?.click();
            setModalVisible(true);
         }
      }
      window.addEventListener('keydown', handleKeyClick);

      return () => {
         window.removeEventListener('keydown', handleKeyClick);
      }
   }, []);

   return (
      <div className={style.modalContainer} role="dialog">
         <div className={style.modalBox} ref={modalRef}>
            <div className={style.modalHeader}>
               <h2 className="heading3">Carrinho de compras</h2>
               <button
                  aria-label="close"
                  title="Fechar"
                  onClick={() => setModalVisible(true)}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className={style.modalList}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard
                        key={product.id}
                        product={product}
                        deleteById={deleteById} />
                  ))}
               </ul>
            </div>
            <hr />
            <div className={style.modalRemove}>
               <div>
                  <span className="body601">Total</span>
                  <span className="body602">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className="btn" onClick={excludeAll}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
