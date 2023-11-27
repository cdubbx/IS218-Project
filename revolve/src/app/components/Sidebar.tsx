'use client'
import React, { useState } from 'react'
import {Stack, HStack, Text, Box} from '@chakra-ui/react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

export default function SideBar() {
  
    const [hoverStates, setHoverStates] = useState({
        item1: false, // we use make like a json/value list so this way we can use the same state but assign them to different objects so they don't conflict with each 
        item2: false,
        item3: false,
        item4: false,
        item5: false,
        item6: false,
      });
      

      const handleMouseEnter = (item: string) => { // In type script you need to give objects a type


        console.log('function is being called');

        // Functional Update: When you do setHoverStates(prev => ...), you're using the functional update form of useState. 
        
        
        //This is particularly useful when the new state is computed using the previous state. 
        
        //React guarantees that prev will be the most recent state when the update function is executed.

        // Spread Syntax (...): The ...prev syntax is the spread operator in JavaScript. 
        
        //It is used here to create a new object with all the properties of the current hoverStates.
        
        //This is important for maintaining the states of items that are not currently being interacted with.

        // Computed Property Names: [item]: true uses the computed property name syntax in JavaScript. 
        
        //This means the value of the item variable is used as the property name in the new object. 
        
        //For example, if item is 'item1', then [item]: true is equivalent to 'item1': true.

        // State Immutability: In React, it's important to treat state as immutable.
        
        //The spread operator helps achieve this by creating a new object instead of mutating the existing state. 
        
        //React's state updates might be batched for performance reasons, 
            
        // so directly mutating the state (e.g., prev[item] = true) can lead to unpredictable results.

        // So, when you call setHoverStates(prev => ({ ...prev, [item]: true })),
        
        // it effectively creates a new state object with all the previous state values and 
        
        // updates the value for the key specified by item to true. 




        setHoverStates(prev => ({ ...prev, [item]: true }));
      };
      
      const handleMouseLeave = (item: string) => {
        console.log('function is being called');
        
        setHoverStates(prev => ({ ...prev, [item]: false }));
      };
       
    
  
  
  
    return (
    <Stack style = {{borderRight:'0.2px solid lightgray'}} w={200} marginLeft={100} mt={-350}>

    <HStack
    onMouseEnter={() => handleMouseEnter('item1')}
    onMouseLeave={() => handleMouseLeave('item1')}
    >
          <Text>
        Women's Fashion
    </Text> 
    {hoverStates.item1 && <IoIosArrowForward />}
   



    </HStack>
 
    <HStack
    onMouseEnter={() => handleMouseEnter('item2')}
    onMouseLeave={() => handleMouseLeave('item2')}
    >
          <Text>
        Men's Fashion
    </Text> 
    {hoverStates.item2 && <IoIosArrowForward />}
   



    </HStack>
    <HStack
    onMouseEnter={() => handleMouseEnter('item3')}
    onMouseLeave={() => handleMouseLeave('item3')}
    >
          <Text>
       Electronics
    </Text> 
    {hoverStates.item3 && <IoIosArrowForward /> }
   



    </HStack>
    <HStack
    onMouseEnter={() => handleMouseEnter('item4')}
    onMouseLeave={() => handleMouseLeave('item4')}
    >
          <Text>
       Home Lifestyle
    </Text> 
    {hoverStates.item4 && <IoIosArrowForward /> }
   



    </HStack>
    <HStack
    onMouseEnter={() => handleMouseEnter('item5')}
    onMouseLeave={() => handleMouseLeave('item5')}
    >
          <Text>
       Medicine
    </Text> 
    {hoverStates.item5 && <IoIosArrowForward /> }

    </HStack>
   


    </Stack>
  )
}
