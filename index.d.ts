interface GlobalState  {
  cart: Product[]
  orderIsOpen: boolean
  menuIsOpen: boolean
}

interface AppContextInterface {
  state: GlobalState
  addToCart: (payload: Product)=> void
  removeFromCart: (payload: Product)=> void
  toggleOrder: (payload: Product)=> void
  toggleMenu: (payload: Product)=> void
}

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
}

interface Category {
  id: number
  name: string
  image: string
}