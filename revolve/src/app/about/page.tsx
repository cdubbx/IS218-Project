
"use client"


import React from 'react'
import ClientLayout from '../layouts/ClientLayout'
import { HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function page() {
  
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
    <Stack ml={100} mt={50}>
        <HStack>
            <Text color={'GrayText'} fontSize={10}>Home / </Text>
            <Text fontSize={10}>About</Text>
        </HStack>
        <HStack mt = {50} ml = {100} spacing={70} >
            <VStack   align = {'flex-start'} w = {'30%'}>
                <Text textAlign={'left'} fontSize = {40} fontWeight={'bold'}>Our Story</Text>
                <Text fontSize={16} textAlign={'left'}>Launched in 2023, Revolve is North America's premier online shopping marketplace with an active presence in other countries. Supported by wide range of tailored marketing, data and service solutions, Revolve has many sellers and brands and serves thousands of customers across the region </Text>
                <Text fontSize={16} textAlign={'left'}>Revolve has a variety of products to offer, growing at a very fast rate. Revolve offers a diverse assortment in categories</Text>
            </VStack>

            <Image src={'/images/bookimage.png'} height={400} width={600} alt='book-image' />
        </HStack>
        <HStack spacing = {50} mt = {50} align = {'center'} justify={'center'}>
            {servicesCard.map((card,index) => (
            <VStack align={'center'} justify={'center'}>
                <Image src={card?.image} height={60} width={60} alt='desc' />
                <Text fontWeight = {'bold'}>{card?.title}</Text>
                <Text mt = {-10} fontSize = {12}>{card?.desc}</Text>
            </VStack>
        ))}
            
            </HStack>

        
    </Stack>
   </ClientLayout>
  )
}
