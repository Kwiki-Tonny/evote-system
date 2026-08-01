'use client'; //tells Next.js to run this in the browser

import {useState, useEffect} from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  //this runs once when the page is loading
  useEffect(() => {
    //try to fetch the backend API
    fetch('api/health')
    
  })
}