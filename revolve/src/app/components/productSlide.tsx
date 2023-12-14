import products from '../../../product.json'
import React from 'react'
import Product from './Product'
import { HStack } from '@chakra-ui/react'


export default function ProductSlide() {
 
    const productsL:Product[] = [
        ...(products as [])
    ]
 
    return (
    <HStack mt = {50} ml={250} align={'center'}>
        {productsL.map((product:Product) =>  (
            <Product product = {product} key={product.id} />
        )

        )}
    </HStack>
  )
}
