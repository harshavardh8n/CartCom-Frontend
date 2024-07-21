import { useState } from 'react';
import {createContext,useContext,useEffect} from 'react'

const ProductContext = createContext();

const ProductStateProvider = ({children})=>{

  const [products,setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  

const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:4000/products', {
      method: 'GET',
    });
    const data = await response.json();
    const productsdata = data.msg;
    setProducts(productsdata);
  } catch (error) {
    console.log(error);
  }
};

return(
  <ProductContext.Provider value={{products}}>
    {children} 
  </ProductContext.Provider>
)
}

const useProductContext = ()=>{
  return useContext(ProductContext)
}

export {ProductStateProvider,ProductContext,useProductContext}
