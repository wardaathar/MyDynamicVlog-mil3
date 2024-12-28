"use client";

import React, { useState } from "react";

export default function Footer() {
  const [rating, setRating] = useState(0); // Star rating state
  const [comment, setComment] = useState(""); // Comment state
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    if (comment.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setComment("");
        setRating(0);
        setSubmitted(false);
      }, 3000); // Reset after 3 seconds
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      
      }}
    >
      <h2>Feedback</h2>

      {/* Star Rating */}
      <div style={{ margin: "15px 0" }}>
        <p>Rate Us:</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleStarClick(index)}
              style={{
                cursor: "pointer",
                fontSize: "2rem",
                color: index < rating ? "#f1c40f" : "#7f8c8d",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div style={{ margin: "20px 0" }}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          style={{
            width: "80%",
            height: "100px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #7f8c8d",
            fontSize: "1rem",
          }}
        ></textarea>
        <br />
        <button
          onClick={handleSubmit}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c0392b")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e74c3c")}
        >
          Submit
        </button>
      </div>

      {/* Submission Animation */}
      {submitted && (
        <div
          style={{
            marginTop: "20px",
            color: "#2ecc71",
            fontWeight: "bold",
            animation: "fadeIn 2s",
          }}
        >
          Thank you for your feedback!
        </div>
      )}

      {/* Footer Text */}
      <p style={{ marginTop: "30px" }}>© 2024 Your Company. All rights reserved.</p>
      
    </footer>
  );
}
