import { ChakraProvider } from '@chakra-ui/react'
import ClientLayout from './layouts/ClientLayout'
import MailChimpLayout from './layouts/MailChimpLayout'
import { useEffect, useState } from 'react';






export default function App(){

 


    return (



        <ChakraProvider>
        <ClientLayout>
            <MailChimpLayout>

            </MailChimpLayout>
            
        </ClientLayout>
        
        
        </ChakraProvider>


    )
}