import React from 'react';
import Image from 'next/image';

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>



        <Image
          className="w-20 h-20 rounded-full mr-6 object-cover border-2 border-red-500"
          src="/images/profile.jpg"
          alt=""
          width={100} // Set the width in pixels
          height={100} // Set the height in pixels
          priority // Optional: For faster loading of important images
        />
        <div>
          <h3 className="text-xl font-mono text-violet-900 ">WARDAH</h3>
          <p className='text-slate-600'> STUDENT | WEB DEVELOPER | MEHNDI ARTIST {""}
          </p>
        </div>
      </div>

      <p className='mt-4 text-black leading-relaxed'> This is  me Wardah Ather. I am GIAIC Student Learning Artifical Intelligence & Web Development
        I am a beginner web
        developer eager to learn and grow in the field of web development. I
        have a basic understanding of HTML, CSS, and JavaScript and enjoy
        creating simple and functional websites. I am passionate about
        improving my skills, exploring new technologies, and building projects
        that help me gain practical experience
      </p>
      <div className='mt-4 flex space-x-3'>
        <a
          href="mailto:wardaathar1234@gmail.com"
          className="px-4 text-white bg-blue-500 rounded-md hover:bg-slate-600 transition duration-300"
        >
          Email
        </a>
      </div>
    </div>
  );
}
