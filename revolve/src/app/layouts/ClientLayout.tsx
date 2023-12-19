"use client"

import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../components/Sidebar'
import { HStack, Stack } from '@chakra-ui/react';
import Footer from '../components/Footer';

type ClientLayoutProps = {
    children: React.ReactNode;
  };

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <Stack w={{base:'430px', md:'auto'}}> 
<Navbar />
<HStack align={'center'}>
    {/* <SideBar /> */}


    {children}
</HStack>

<Footer />
    </Stack>
  )
}
