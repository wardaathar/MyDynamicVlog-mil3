import React from 'react';
import Image from 'next/image';

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>



      <Image
  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
  src="/images/profile.jpeg"
  alt="Author Image"
  width={64} // Set the width in pixels
  height={64} // Set the height in pixels
  priority // Optional: For faster loading of important images
/>
      <div>
        <h3 className="text-xl font-mono text-violet-900 ">WARDAH</h3>
        <p className='text-slate-600'> STUDENT | WEB DEVELOPER | {""}
       </p>
      </div>
      </div>

<p className='mt-4 text-black leading-relaxed'> This is  me Wardah Ather. I am GIAIC Student Learning Artifical Intelligence & Web Development</p>
<div className='mt-4 flex space-x-3'>
  <a
    href="#"
    className='px-4 text-white- bg-blue-500 rounded-md hover:bg-slate-600 translate duration-300'>
   Facebook
  </a>
  <a
    href="#"
    className='px-4 text-white- bg-blue-500 rounded-md hover:bg-slate-600 translate duration-300'>
   Github
  </a>
  <a
    href="#"
    className='px-4 text-white- bg-blue-500 rounded-md hover:bg-slate-600 translate duration-300'>
   Email
  </a>
</div>
 </div>
  );
}
