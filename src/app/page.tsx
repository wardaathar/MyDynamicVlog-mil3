import React from 'react';
import Blog from "../app/blog/page"
import Mega from '@/components/Mega';
import Footer from '@/components/Footer';

function page() {
  return (
    <div>
      <Blog/>
      <Mega/>
      <Footer/>
    </div>
  )
}

export default page