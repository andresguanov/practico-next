import { useContext } from 'react'
import AppContext from '@context/AppContext'
import styles from '@styles/ProductItem.module.scss'
// import Image from 'next/image'

const ProductItem = ({ product }: { product: Product }) => {
	const { state, addToCart } = useContext(AppContext)

	const handleClick = (item: Product) => {
		console.log('in cart: ', state.cart.includes(item))
		addToCart(item)
	}

	return (
		<div className={styles.ProductItem}>
			<img src={product.images[0]} alt={product.title} />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className={styles['more-clickable-area']} onClick={() => handleClick(product)} >
					{
						state.cart.includes(product)
							? <img className={(styles.disabled, styles['add-to-cart-btn'])} src='/icons/bt_added_to_cart.svg' alt='added to cart' />
							: <img className={(styles['add-to-cart-btn'], styles.pointer)} src='/icons/bt_add_to_cart.svg' alt='add to cart' />
					}

				</figure>
			</div>
		</div>
	)
}

export default ProductItem
