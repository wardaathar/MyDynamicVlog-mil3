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
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "60px", color: "black" }}>
        My Live Blog
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          justifyItems: "center",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              width: "100%",
              maxWidth: "350px",
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={350}
              height={200}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderBottom: "1px solid #ddd",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h2 style={{ margin: "10px 0", fontSize: "1.2em", color: "#333" }}>
                {post.title}
              </h2>
              <p style={{ fontSize: "0.9em", color: "#777", margin: "5px 0" }}>
                {post.date}
              </p>
              <p style={{ fontSize: "1em", color: "#555", margin: "15px 0" }}>
                {post.content}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
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
