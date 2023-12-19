"use client"
import React from 'react'
import { Stack, HStack, Text,InputGroup, InputRightElement, Input, InputLeftElement, Box, Button, Icon, useMediaQuery} from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiShoppingCart} from "react-icons/ci";
import Link from 'next/link';



export default function Navbar() {
    

    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");


    function heartIcon(){
        // 2. Use the `as` prop
        return <Icon as={CiHeart} />

    }    
    
    return (

        <>

        {!isLargerThan800 ? (
            <Stack>

                 <HStack bg={'#1F393C'}>
                <Text color='white'>E-Commerce WebPage</Text>
                    
                </HStack>

                <HStack>
                    <Text as = {'h3'}>Revolve</Text> 
                    <HStack spacing={30} pr={20} ml={20} >
                    <Link  style={{textDecoration:'none', cursor:'pointer', color:'black', fontSize: 12}} href={'/'}>
                        Home
                    </Link>
    
                    <Link style={{textDecoration:'none', cursor:'pointer', color:'black', fontSize: 12}} href={'/contact'}>
                        Contact 
                    </Link>
    
                    <Link style={{textDecoration:'none', cursor:'pointer', color:'black', fontSize: 12}} href={'/about'} >
                        About 
                    </Link>
    
               
                </HStack>
               
            </HStack>
            </Stack>
           
            
        ) : (
             <Stack mt={-10} w = {'auto'}>
    <HStack bg={'#1F393C'} w={{'base':'full', 'md':'100vw'}} p={2} pl = {20}>
        <Text color='white'>E-Commerce WebPage</Text>
    </HStack>
    <Stack mr={100} ml={100}>
 <HStack justifyContent={'space-between'} w={{'base':'full', 'md':'100vw'}} align={'center'}>
        
                <Text as = {'h1'}>
                        Revolve
                </Text>
    
                <HStack spacing={30} pr={20} >
                    <Link  style={{textDecoration:'none', cursor:'pointer', color:'black', }} href={'/'}>
                      <Text fontSize = {'md'}>Home</Text>
                    </Link>
    
                    <Link style={{textDecoration:'none', cursor:'pointer', color:'black',}} href={'/contact'}>
                        Contact 
                    </Link>
    
                    <Link style={{textDecoration:'none', cursor:'pointer', color:'black',}} href={'/about'} >
                        About 
                    </Link>
    
                   
                </HStack>

            <HStack>
                  <InputGroup 
                w={{base:100, md:200}} 
                border={1}
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                mr={20}
                
                >
                
                  <Input
                    placeholder='What are you looking for?'
                    variant={'filled'}
                    w={{base:100, md:300}}
                    
                    p={5}
                    
                    />

                <InputRightElement 
                display={'flex'}
                alignItems={'center'}
                textAlign={'center'}
                top={6}
                right={5}
                >
                
                    <IoIosSearch/>

                </InputRightElement>

                </InputGroup>



            <HStack>
            
                 
                <CiHeart style = {{fontSize:20}} />
                <CiShoppingCart style = {{fontSize:20}} />


            </HStack>
            </HStack>
               
              

              


                  

                    

              
                                
                
               
                
                
                
                
    
    
    
        </HStack>
    </Stack>
       
    
        </Stack>
        )}

        </>

       
      )
}
