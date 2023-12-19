
"use client"


import React from 'react'
import ClientLayout from '../layouts/ClientLayout'
import { HStack, Stack, Text, VStack, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'

export default function page() {
  
 const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
 

  const servicesCard = [

    {
        id:1,
        title: "Fast and Free Delivery ", 
        desc: "Free Delivery for orders over $140",
        image:'/images/truck.png'
    }, 
    {
        id:2,
        title:'24/7 Customer Service', 
        desc:'Friendly 24/7 customer support',
        image:'/images/headphones1.png'
    }, 
    {
        id:3,
        title: 'Money Back Guarantee', 
        desc: 'We allow returns up 30 days',
        image:'/images/check1.png'
    }
  ]
  
  
    return (
   <ClientLayout>
    
    
    {!isLargerThan800 ? (

<Stack mt={50}>
<HStack>
    <Text color={'GrayText'} fontSize={10}>Home / </Text>
    <Text fontSize={10}>About</Text>
</HStack>
<VStack ml = {-150} mt = {50}spacing={70} >
    <VStack align = {'center'} w = {'40%'}>
        <Text textAlign={'center'} fontSize = {40} fontWeight={'bold'}>Our Story</Text>
        <Text fontSize={16} textAlign={'center'}>Launched in 2023, Revolve is North America&apos;s premier online shopping marketplace with an active presence in other countries. Supported by a wide range of tailored marketing, data, and service solutions, Revolve has many sellers and brands and serves thousands of customers across the region.</Text>
        <Text fontSize={16} textAlign={'center'}>Revolve has a variety of products to offer, growing at a very fast rate. Revolve offers a diverse assortment in categories.</Text>

    </VStack>

    <Image src={'/images/bookimage.png'} height={300} width={500} alt='book-image' />
</VStack>
<VStack spacing = {50} mt = {50} align = {'center'} justify = {'center'} ml = {-150}>
    {servicesCard.map((card,index) => (
    <VStack align={'center'} key={index} justify={'center'}>
        <Image src={card?.image} height={60} width={60} alt='desc' />
        <Text fontWeight = {'bold'}>{card?.title}</Text>
        <Text mt = {-10} fontSize = {12}>{card?.desc}</Text>
    </VStack>
))}
    
    </VStack>


</Stack>


    ) : ( <Stack ml={100} mt={50}>
        <HStack>
            <Text color={'GrayText'} fontSize={10}>Home / </Text>
            <Text fontSize={10}>About</Text>
        </HStack>
        <HStack mt = {50} ml = {100} spacing={70} >
            <VStack   align = {'flex-start'} w = {'30%'}>
                <Text textAlign={'left'} fontSize = {40} fontWeight={'bold'}>Our Story</Text>
                <Text fontSize={16} textAlign={'left'}>Launched in 2023, Revolve is North America&apos;s premier online shopping marketplace with an active presence in other countries. Supported by a wide range of tailored marketing, data, and service solutions, Revolve has many sellers and brands and serves thousands of customers across the region.</Text>
                <Text fontSize={16} textAlign={'left'}>Revolve has a variety of products to offer, growing at a very fast rate. Revolve offers a diverse assortment in categories.</Text>

            </VStack>

            <Image src={'/images/bookimage.png'} height={400} width={600} alt='book-image' />
        </HStack>
        <HStack spacing = {50} mt = {50} align = {'center'} justify={'center'}>
            {servicesCard.map((card,index) => (
            <VStack align={'center'} key={index} justify={'center'}>
                <Image src={card?.image} height={60} width={60} alt='desc' />
                <Text fontWeight = {'bold'}>{card?.title}</Text>
                <Text mt = {-10} fontSize = {12}>{card?.desc}</Text>
            </VStack>
        ))}
            
            </HStack>

        
    </Stack>)}
    
   
   </ClientLayout>
  )
}
