// src/app/api/subscribe/route.js
"use server";

import axios from 'axios';
import { NextResponse } from 'next/server'; // Import the NextResponse object

export async function POST(req) {
  const requestBody = await req.text();
  const { email } = JSON.parse(requestBody);


  console.log(email); // Now you should see the email being logged.

  if (!email) {
    // Use the NextResponse object to create a response
    return new NextResponse(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const API_KEY = process.env.NEXT_PUBLIC_APIKEY ;
  const API_SERVER = process.env.NEXT_PUBLIC_APISERVER;
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_AUDIENCEID;


  console.log(process.env.NEXT_PUBLIC_APIKEY);
  console.log(process.env.NEXT_PUBLIC_APISERVER)
  console.log(process.env.NEXT_PUBLIC_AUDIENCEID)
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status >= 400) {
      // Use the NextResponse object to create a response
      return new NextResponse(JSON.stringify({
        error: `There was an error subscribing to the newsletter. Shoot me an email at [your-email] and I'll add you to the list.`,
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    // Use the NextResponse object to create a response
    return new NextResponse(JSON.stringify({ message: 'success' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    // Use the NextResponse object to create a response
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
