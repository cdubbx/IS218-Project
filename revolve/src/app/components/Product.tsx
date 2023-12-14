import { Box, Stack,Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;

}

export default function Product({product}:{product:Product}) { // passing an object into props, passing the product field and giving it a type which is an array
  
  
  
    return (
    <Stack w={200} spacing={2} align = {'center'} justify = {'center'}>

        <Box  p={10}>
                <Image src={product.image} height={100} width={100} alt={product.description}/>

        <Text>{product.name}</Text>
        </Box>

    
        <Text mt={-10} w={'80%'} style={{fontSize:12, color:'gray'}}>{product.description}</Text>
        <Text mt={-10} w={'80%'} style={{fontSize:12}}>${product.price}</Text>


    </Stack>
  )
}
