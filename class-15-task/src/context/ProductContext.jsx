import React, { createContext,useEffect,useState } from 'react'
import axios from "axios";

export const ProductDataContext = createContext()
const ProductContext = (props) => {

     const[productData,setProductData] = useState([])

  const getData = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    setProductData(response.data)
  }

  useEffect(function(){
    getData()
  },[])


  return (
   <div>
    <ProductDataContext.Provider value={productData}>
        {props.children}
    </ProductDataContext.Provider>
   </div>
  )
}

export default ProductContext
