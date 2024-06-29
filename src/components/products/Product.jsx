import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../FetchFunc/fetchEcommerceApi'

function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function getSingleProduct(params) {
      const productDetails = await getProduct(productId)
      setProduct(productDetails.data.data)
    }

    getSingleProduct()
  }, [productId])

  console.log(product);

  return (
    <>
      {product && <div>
        <h1>{product.name}</h1>
      </div>}
    </>
    // <div></div>
  )
}

export default Product
