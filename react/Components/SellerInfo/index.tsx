import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'



const Seller = () => {

  const {selectedItem} = useProduct()
  const test = useOrderForm()
  console.log(test)
  const sellerName = selectedItem?.sellers?.[0]?.sellerName.split("-")[0]
     
  return (
    <div className="mt5 mb3">
     <p><b>Vendido por:</b> {sellerName}</p>
    </div>
  )
}



export default Seller
