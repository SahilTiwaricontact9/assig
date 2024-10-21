'use client';
import React from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default page