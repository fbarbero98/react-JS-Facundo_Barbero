import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
const { Provider } = CartContext;

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //isInCart busca el producto elegido, y devuelve true si ya esta en el carrito o false si no
  const isInCart = (productId) => {
    return cart.some((prod) => prod.id === productId); //some compara el id (del onAdd) con el id de cada producto del carrito y retorna true o false
  };

  //addItem va a usar a isInCart, si el producto ya esta en el carrito le va a sumar la cantidad que hayas elegido, si no, entonces va a sumar el producto nuevo con la cantidad elegida
  const addItem = (item, quantity) => {
    const newCartItem = {
      // aca armamos un item nuevo, que tiene todos los detalles del item, y le suma la cantidad que pusimos en itemCount
      ...item,
      quantity,
    };
    if (isInCart(newCartItem.id)) {
      const findProduct = cart.find((prod) => prod.id === newCartItem.id); //Busca en el carrito que busca si en el cart tenemos este id ya
      const productIndex = cart.indexOf(findProduct); //busca el indice de findProduct
      const cartAuxiliar = [...cart]; //Hacemos una copia del state cart, para no modificarlo directamente.
      cartAuxiliar[productIndex].quantity += quantity; //aca encuentra el indice de producto que matchea con el id de findProduct, y a la quantity de ese item, le suma la quantity que pasamos por parametro
      setCart(cartAuxiliar); //Actualizamos el state original para que el cart sea = al auxiliar
    } 
    else {
      setCart([...cart, newCartItem]); //Si el newCartItem.id NO estaba en el carrito de antes, entonces suma al array cart el nuevo item
    }
  };

  //deleteItem borra el item seleccionado
  const deleteItem = (id) => {
    return cart.filter(prod => prod.id !== id) //retorna un array con todos los productos que no tengan el id que se le pasa por parametro

  };

  //emptyCart vacia el carrito, se le pone un array vacio
  const emptyCart = () => {
    setCart([]);
  };

  // Se usa en el cartWidget, para ver cuantos item tenemos en total en el carrito (la cantidad de items y la cantidad de cada uno)
  const getItemCant = () => {
return cart.reduce((acum, x) => acum += x.quantity, 0 )    //reduce recibe por parametro una funcion que tiene parametros adentro (acumulador, variable de iteracion). Le damos valor inicial 0 al acumulador para que se sume la cantidad a 0

  };

  // getItemPrice nos va a decir el precio total del carrito
  const getItemPrice = () => {
    return cart.reduce((acum, x) => acum += x.quantity *  x.precio, 0) //aca el reduce recibe el acumulador, la variable de iteracion, y multiplica la cantidad x el precio del item, para devolver el total de todos
  };

  return (
    <Provider
      value={{
        cart,
        setCart,
        isInCart,
        addItem,
        deleteItem,
        emptyCart,
        getItemCant,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
}
