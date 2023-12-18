import React from 'react'
import ClientLayout from '../layouts/ClientLayout'
import { Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function ThankYou() {
  return (
    <ClientLayout>
        <VStack align={'center'} justify={'center'} mt={50} w={'100%'} ml={250} mr={250}>
            <Text textAlign={'center'} w={'60%'} fontWeight={'bold'} fontSize={30}>You have sucessful subscribed to Revolve</Text>
            <Text textAlign={'center'} w={'60%'} fontWeight={'bold'} fontSize={15}>This is your official confirmation. Thank you for joining Revolve</Text>

            <Image src={'/images/undraw_undraw_completion_progress_1oxr_ymj2.svg'} height={200} width={200} alt='image-description'/>

        </VStack>
    </ClientLayout>
  )
}
