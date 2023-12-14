"use client"

import { Box, HStack, VStack, Text, Divider, Input, Button, Stack, useToast} from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


  


export default function MailChimpForm() {
  
  const [email, setEmail] = useState('');
  const toast = useToast()
  const router = useRouter();

        const handleSubmit = async (e:any) => {

          console.log('function is being called');
          
          e.preventDefault();
          if (!email) {
            toast({
              duration:5000,
              description:'Email Required',
              title:"Email",
              status:'error',
              isClosable:true,
            })
            return;
          }
          try {
            const response = await axios.post('/api/subscribe', { email });
            console.log(response.status);
            
            if (response.status === 201) {
              toast({
                duration: 5000,
                description: 'Thank you for signing up',
                title: 'Success',
                status: 'success',
                isClosable: true,
              });
              router.push('/thank-you');

            }
          } catch (error:any) {
            toast({
              duration:5000,
              description:error,
              title:'Error',
              status:'error',
              isClosable:true
            })
          }
        };
      
    return (
    
    <Stack justify={'center'} align = 'center' spacing={10}>
       

        
                <form onSubmit={(handleSubmit)}>
        <VStack borderColor = {'gray'} p={50} spacing={20}>
                    <Text fontSize={27}>Sign up for Emails</Text>
                    <Input style={{border:'none', background:'#f0f0f0', padding:10}} w={'30rem'} placeSelf={'center'} placeholder='Your name'/>

                    <Input
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     style={{border:'none', background:'#f0f0f0', padding:10}}
                     w={'30rem'}
                     placeholder='Your email'
        />
                    <Input style={{border:'none', background:'#f0f0f0', padding:10}}  w={'30rem'}  placeholder='Your phone' />

                <Button type='submit'>Sign Up</Button>  
                
                </VStack>
                </form>
              
            
      
    </Stack>


  )
}


