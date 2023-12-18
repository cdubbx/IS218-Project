import React from 'react';
import Navbar from '../Navbar';
import Footer from '../components/Footer';
import { Stack } from '@chakra-ui/react';

type MailChimpLayoutProps = {
  children?: React.ReactNode;
};

export default function MailChimpLayout(props: MailChimpLayoutProps) {
  return (
    <Stack>
      <Navbar />

      {props.children}

      <Footer />
    </Stack>
  );
}
