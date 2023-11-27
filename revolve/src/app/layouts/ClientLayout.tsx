"use client"

import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../components/Sidebar'
import { HStack } from '@chakra-ui/react';

type ClientLayoutProps = {
    children: React.ReactNode;
  };

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div> 
<Navbar />
<HStack align={'center'}>
    <SideBar />


    {children}
</HStack>


    </div>
  )
}
