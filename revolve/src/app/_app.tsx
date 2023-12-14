import { ChakraProvider } from '@chakra-ui/react'
import ClientLayout from './layouts/ClientLayout'
import MailChimpLayout from './layouts/MailChimpLayout'

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