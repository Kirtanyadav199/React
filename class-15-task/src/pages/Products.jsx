import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

  const productData = useContext(ProductDataContext)
  return (
    <div className='allproducts'>
      {productData.map(function(elem,idx){
          return <Link  className='product' key={idx} to={`/products/${elem.id}`}>
          <div>
              <img src={elem.image} alt="" />
              <h2>{elem.title}</h2>
            </div>
          </Link>
      })}
    </div>
  )
}

export default Products
