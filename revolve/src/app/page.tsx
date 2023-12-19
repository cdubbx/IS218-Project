"use client"
import React, { useEffect, useState } from 'react'
import { Stack, HStack, Text,InputGroup, InputRightElement, Input, InputLeftElement, Box, Button, Icon} from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiShoppingCart} from "react-icons/ci";
import Link from 'next/link';
import ClientLayout from './layouts/ClientLayout';
import HeroSlider from './components/HeroSlider';
import ProductSlide from './components/productSlide';



const CookieConsentBanner = ({ onConsent }: any) => {
  return (
      <HStack justify = {'center'} bg={'#D7EFEB'} mt = {40} w = {'100vw'} mb = {-20} align = {'center'} className="cookie-banner" spacing = {50}>
          <Text>We use cookies for improving your experience.</Text>
          <HStack>
          <Button cursor = {'pointer'} color={'white'} borderRadius = {5}  p = {10} border = {'none'} bg = {'#0B6655'} onClick={() => onConsent(true)}>Accept</Button>
          <Button cursor = {'pointer'}  color={'white'} p ={10} borderRadius = {5}  border = {'none'} bg = {'#0B6655'} onClick={() => onConsent(false)}>Decline</Button>
            </HStack>

       
      </HStack>
  );
};


export default function page() {
    




    function heartIcon(){
        // 2. Use the `as` prop
        return <Icon as={CiHeart} />

    }    
    
    return (
      
     <ClientLayout>
     
     <Stack>


        <HStack>

      <HeroSlider />

      </HStack> 


         <ProductSlide />


    

     </Stack>
     


     </ClientLayout>
         
      
     
      

      
      
        // <Stack mr={100} ml={100}>
    
        // <HStack justifyContent={'space-between'} align={'center'}>
        
        //         <Text as={'h1'}>
        //                 Revolve
        //         </Text>
    
        //         <HStack spacing={40}>
        //             <Text>
        //                 Home 
        //             </Text>x
    
        //             <Text>
        //                 Contact 
        //             </Text>
    
        //             <Text>
        //                 About 
        //             </Text>
    
        //             <Text>
        //                 Products 
        //             </Text>
        //         </HStack>

        //     <HStack>
        //           <InputGroup 
        //         w={200} 
        //         border={1}
        //         justifyContent={'center'}
        //         alignItems={'center'}
        //         display={'flex'}
        //         mr={20}
                
        //         >
                
        //           <Input
        //             placeholder='What are you looking for?'
        //             variant={'filled'}
        //             w={300}
                    
        //             p={5}
                    
        //             />

        //         <InputRightElement 
        //         display={'flex'}
        //         alignItems={'center'}
        //         textAlign={'center'}
        //         top={6}
        //         right={5}
        //         >
                
        //             <IoIosSearch/>

        //         </InputRightElement>

        //         </InputGroup>



        //     <HStack>
            
                 
        //         <CiHeart style = {{fontSize:20}} />
        //         <CiShoppingCart style = {{fontSize:20}} />


        //     </HStack>
        //     </HStack>
               
              

              


                  

                    

              
                                
                
               
                
                
                
                
    
    
    
        // </HStack>
    
        // </Stack>
      )
}
