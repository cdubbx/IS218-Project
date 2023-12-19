import products from '../../../product.json'
import React from 'react'
import Product from './Product'
import { HStack, Stack, VStack, useMediaQuery } from '@chakra-ui/react'


export default function ProductSlide() {
 
 
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

    const productsL:Product[] = [
        ...(products as [])
    ]
 
    return (
    
        <>
        
        {!isLargerThan800 ? (

            <VStack mt = {300} align = {'center'} justify = {'center'}>

        {productsL.map((product:Product) =>  (
            <Product product = {product} key={product.id} />
        )

        )}

            </VStack>


        ) : (


 <HStack  mt = {50} ml={250} align={'center'}>
        {productsL.map((product:Product) =>  (
            <Product product = {product} key={product.id} />
        )

        )}
    </HStack>

        )}
        
        </>
    
    
   
  )
}
