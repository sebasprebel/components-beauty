import React from 'react'
import { useItemContext } from 'vtex.product-list/ItemContext'

const sellerList: any = {
  '1': 'Beautyholics',
  mindnaturals: 'Mind Naturals',
  dermatologicaco: 'Dermatológica',
  onewayinnovationcol: 'One Way',
  atypical: 'Atypical',
  prebellz: 'Lz',
  vibes: 'Vibes',
}

const SellerInfoCart = () => {
  const { item } = useItemContext()

  return (
    <div className="mt5 mb3">
      <p style={{ fontSize: '.8rem' }}>
        <b>Vendido por: </b>
        {sellerList[item?.seller]}
      </p>
    </div>
  )
}

export default SellerInfoCart
