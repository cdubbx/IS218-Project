"use client"

import { useEffect, useRef, useState } from "react"
import { Box, HStack, Button, Text, VStack } from '@chakra-ui/react';
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function HeroSlider(){


    const [clicked, setClicked] = useState({ left: false, right: false });
    const [counter, setCounter] = useState(0);
  
    const isInitialMount = useRef(true);


    const heroItems = [

        {
            id: 1,
            img: "/images/pexels-craig-dennis-205421.png", 
            description: 'camera'
        },

        {
            id:2, 
            img:"/images/pexels-math-90946.png",
            description: 'camera2'
        },

        {
            id: 3,
            img: "/images/pexels-photo-821651.png",
            description: 'headphones'
        }
    ]


    useEffect(() => {
      if (!isInitialMount.current) {
          if (clicked.right) {
              setCounter((prevCounter) => (prevCounter + 1) % heroItems.length);
           }else if (clicked.left){
             setCounter((prevCounter) => (prevCounter - 1 + heroItems.length) % heroItems.length);
         }
         
       } else {
          isInitialMount.current = false;
       }

       if (clicked.left || clicked.right) {
        setClicked({ left: false, right: false });
    }
      
  }, [clicked, heroItems.length]); // Keep clicked here if it's necessary
  
  

    //   useEffect(()=>{

    //     console.log(heroItems[0].img);
    //   },[heroItems[0].img])

    
      function handleClicked(item: string) {
        setClicked((prev) => ({ ...prev, [item]: true }));
      }


      

    return (
        <Box ml={250} mt={40}>
           <VStack>

           
           <HStack>
             <HStack  spacing = {100} h={320} w={'auto'} >
                    
                    <VStack ml={40}  spacing={10} justify = {'center'} align = {'left'} >
                           <Text color={'black'} fontStyle={'adorn-serif'} textAlign={'left'} fontSize={50} fontWeight={'bold'} w={350}>
                       30% OFF ON YOUR FIRST ORDER!
                    </Text>
                      
                      <Link href={'/contact'}>
                      <Button  p = {5} w={100} style = {{border:'none', alignSelf:'left', cursor:'pointer'}}>
                      Sign Up
                     </Button>
                      </Link>
                   
                   

                    </VStack>
                    
                 
                    <Image src={'/images/image.png'} alt="hero img" width={425} height = {250} style = {{padding:0}}/> 

            </HStack>
            
           </HStack>

           
           </VStack>
        </Box>
    )





    
}