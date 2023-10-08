import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from './style.module.scss';

export const Header = ({cartList, setModalVisible}) => {
   const [value, setValue] = useState("");
   
   const totalItems = cartList.length;
   
   return (
      <header>
         <div className={`${style.headerBox} container`}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={style.divShop}>
               <button onClick={() => setModalVisible(false)}>
                  <MdShoppingCart size={22} />
                  <span>{totalItems}</span>
               </button>
               {/* <form>
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                  <MdSearch size={21} />
                  </button>
               </form> */}
            </div>
         </div>
      </header>
   );
};
