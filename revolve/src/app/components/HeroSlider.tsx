"use client"

import { useEffect, useRef, useState } from "react"
import { Box, HStack, Button, Text, VStack } from '@chakra-ui/react';
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
        <Box ml={100} mt={40}>
           <VStack>

           
           <HStack>
             <HStack  bg={'#a29985  '} h={320} w={'auto'} >
                    
                    <VStack ml={40}>
                           <Text color={'white'} as = {'h1'} w={200}  mr={-30}>
                        We offer the best in class electronics 
                    </Text>

                        <button style={{background:'#a18585d2d'}}>
                          Buy now
                        </button>

                    </VStack>
                    
                 
                    <Image src={heroItems[counter].img} alt="hero img" width={600} height = {500} style = {{padding:0}}/> 

            </HStack>
            
           </HStack>

           <HStack justify={'space-between'}>
                <Box onClick={()=> handleClicked('left')}>
                    <IoIosArrowBack style = {{fontSize: 20}}/>
                </Box>
                <Box  onClick={()=> handleClicked('right')}>
                <IoIosArrowForward style = {{fontSize: 20}}/>


                </Box>

            </HStack>
           </VStack>
        </Box>
    )





    
}