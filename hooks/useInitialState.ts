import { useState } from "react"

const initialState:GlobalState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
}

const useInitialState = (): AppContextInterface => {
  const [state, setState] = useState<GlobalState>(initialState)

  const addToCart = (payload : Product): void => {
    setState({
      ...state,
      cart: state.cart.includes(payload)
        ? state.cart
        : [...state.cart, payload],
    })
  }

  const removeFromCart = (payload: Product):void => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    })
  }

  const toggleOrder = ():void => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    })
  }

  const toggleMenu = ():void => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
  }
}

export default useInitialState
