import { HStack, VStack, Text, Input } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <HStack bg={'#1F393C'} h={300} spacing = {50}   mr={150} ml={150} justify={'center'} align={'flex-start'} mt = {"60px"}>

    <VStack mt = {60} align={'flex-start'} >

    <Text color={'whitesmoke'} fontSize={'large'}>Exclusive</Text>
     
        <Text  color={'whitesmoke'} fontSize={'medium'}>Subscribe</Text>

        <Text  color={'whitesmoke'} fontSize={'smaller'}>Get 10% off your first purchase</Text>


        <Input placeholder='Enter your email'/>


    </VStack>

    <VStack mt = {60} align={'flex-start'}>

<Text  color={'whitesmoke'} >Support</Text>


<VStack spacing={2} align={'flex-start'}  >
    <Text   color={'whitesmoke'} fontSize={'smaller'}>100 MLK BLVD</Text>

    <Text  color={'whitesmoke'} fontSize={'smaller'}>Newark, NJ</Text>
</VStack>
 
    


    <Text  color={'whitesmoke'} fontSize={'x-small'}>ecommerce@gmail.com</Text>


<Text mt={-1} color={'whitesmoke'} fontSize = {'x-small'} >+88015-888888-9999</Text>

</VStack>




    </HStack>

  )
}
