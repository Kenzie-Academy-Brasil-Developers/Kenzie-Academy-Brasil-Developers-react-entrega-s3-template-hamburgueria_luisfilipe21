import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burgerApi } from "../../components/Request";

export const HomePage = () => {
   const localProduct = localStorage.getItem("@HamburKenzie");


   const [cartList, setCartList] = useState(localProduct ?
      JSON.parse(localProduct) : []);

   const [modal, setModalVisible] = useState(true);

   // renderiza
   const [productList, setProductList] = useState([]);

   const addToCart = (productToAdd) => {
      const listItems = cartList.some((item) => item.id === productToAdd.id);

      if(!listItems){
         setCartList([...cartList, productToAdd]);
         
      }else{
      //  toast 
      }
   }

   const excludeAll = () => {
      setCartList([])
   }

   const deleteById = (productId) => {
      const newList = cartList.filter(list => list.id !== productId);

      setCartList(newList)
   }

   useEffect(() => {
      const getMenu = async () => {
         try {
            const { data } = await burgerApi.get("/products")
            setProductList(data)
         } catch (err) {
            alert(err.message)
         }
      }
      getMenu()
   }, []);

   useEffect(() => {
      localStorage.setItem("@HamburKenzie", JSON.stringify(cartList));

   }, [cartList]);

   // filtro de busca

   return (
      <>
         <Header
            cartList={cartList}
            setModalVisible={setModalVisible}
         />
         <main>
            <ProductList
               
               productList={productList}
               setCartList={setCartList}
               addToCart={addToCart}
            />

            {!modal ? (<CartModal
               deleteById={deleteById}
               excludeAll={excludeAll}
               cartList={cartList}
               setModalVisible={setModalVisible} />)
               : null}

         </main>
      </>
   );
};
