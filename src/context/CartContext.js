import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
})

export default CartContext
