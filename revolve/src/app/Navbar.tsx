"use client"
import React from 'react'
import { Stack, HStack, Text,InputGroup, InputRightElement, Input, InputLeftElement, Box, Button, Icon} from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiShoppingCart} from "react-icons/ci";
import Link from 'next/link';



export default function Navbar() {
    
    function heartIcon(){
        // 2. Use the `as` prop
        return <Icon as={CiHeart} />

    }    
    
    return (
        <Stack mr={100} ml={100}>
    
        <HStack justifyContent={'space-between'} align={'center'}>
        
                <Text as={'h1'}>
                        Revolve
                </Text>
    
                <HStack spacing={40} pr={20} >
                    <Link style={{textDecoration:'none', cursor:'pointer', color:'black'}} href={'/'}>
                        Home 
                    </Link>
    
                    <Link style={{textDecoration:'none', cursor:'pointer', color:'black'}} href={'/contact'}>
                        Contact 
                    </Link>
    
                    <Link style={{textDecoration:'none', cursor:'pointer', color:'black'}} href='/#' >
                        About 
                    </Link>
    
                    <Text>
                        Products 
                    </Text>
                </HStack>

            <HStack>
                  <InputGroup 
                w={200} 
                border={1}
                justifyContent={'center'}
                alignItems={'center'}
                display={'flex'}
                mr={20}
                
                >
                
                  <Input
                    placeholder='What are you looking for?'
                    variant={'filled'}
                    w={300}
                    
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
      )
}
