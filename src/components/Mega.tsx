"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Mega() {
  const [posts] = useState([
    {
      id: 1,
      title: "Dynamic Project",
      content: "A customizable CV builder.",
      image: "/dynmic.PNG",
      date: "20 Dec, 2024",
      link: "https://dynamic-editable-sharable-cv-builder.vercel.app",
    },
    {
      id: 2,
      title: "Group Routes Pages",
      content: "Login and signup pages using group routing.",
      image: "/groprte.PNG",
      date: "18 Dec, 2024",
      link: "https://login-signup-pages-using-the-concept-of-group-routing.vercel.app",
    },
    {
      id: 3,
      title: "Responsive Design",
      content: "A fully responsive website using HTML and CSS.",
      image: "/html.PNG",
      date: "15 Dec, 2024",
      link: "https://responsive-website-using-html-css-xi.vercel.app",
    },
    {
      id: 4,
      title: "Todo App",
      content: "A simple task management app.",
      image: "/todo.PNG",
      date: "12 Dec, 2024",
      link: "https://todo-app-nine-lilac.vercel.app",
    },
    {
      id: 5,
      title: "Portfolio Project",
      content: "A custom personal portfolio website.",
      image: "/porfolio.PNG",
      date: "10 Dec, 2024",
      link: "https://project-coustom-portfolio.vercel.app",
    },
    {
      id: 6,
      title: "Static Project",
      content: "A static CV builder using HTML and CSS.",
      image: "/static.PNG",
      date: "8 Dec, 2024",
      link: "https://static-cv-builder-psi.vercel.app",
    },
    {
      id: 7,
      title: "Java Project",
      content: "A basic Java project for learning.",
      image: "/java.PNG",
      date: "5 Dec, 2024",
      link: "https://first-project-in-java.vercel.app",
    },
    {
      id: 8,
      title: "E.com Project",
      content: "A multi-page e-commerce website.",
      image: "/multiple.PNG",
      date: "2 Dec, 2024",
      link: "https://multiple-webisite-in-tailwand-css-whq6.vercel.app",
    },
  ]);

  return (
    <div className="px-6 py-12 font-sans bg-gray-100">
      <h1 className="text-center text-3xl font-bold mb-10 text-gray-800">
        My Live Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={350}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold inline-block hover:bg-blue-700 transition"
              >
                View Online
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
