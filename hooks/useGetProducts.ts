import { useEffect, useState } from "react"

const useGetProducts = (API:string) => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(function(){

		fetch(API)
			.then(res => res.json())
			.then(setProducts)

	}, [API])

	return products
}

export default useGetProducts
