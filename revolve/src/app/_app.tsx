import { ChakraProvider } from '@chakra-ui/react';
import ClientLayout from './layouts/ClientLayout';
import MailChimpLayout from './layouts/MailChimpLayout';
import Script from 'next/script'; // Import the Script component from Next.js

export default function App() {
    return (
        <>
            {/* Google Analytics Scripts */}
            

            {/* Your Application */}
            <ChakraProvider>
                <ClientLayout>
                    <MailChimpLayout>
                        {/* Your content goes here */}
                    </MailChimpLayout>
                </ClientLayout>
            </ChakraProvider>
        </>
    );
}
