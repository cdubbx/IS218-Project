import { ChakraProvider } from '@chakra-ui/react';
import ClientLayout from './layouts/ClientLayout';
import MailChimpLayout from './layouts/MailChimpLayout';
import Script from 'next/script'; // Import the Script component from Next.js

export default function App() {
    return (
        <>
            {/* Google Analytics Scripts */}
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>

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
