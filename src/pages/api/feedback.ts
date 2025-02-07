import { NextApiRequest, NextApiResponse } from "next";

const feedbacks: { rating: number; comment: string; timestamp: Date }[] = []; // Memory storage (DB replace karein yahan)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { rating, comment } = req.body;

    if (!rating || !comment) {
      return res.status(400).json({ error: "Rating and comment are required" });
    }

    const newFeedback = {
      rating,
      comment,
      timestamp: new Date(),
    };

    feedbacks.push(newFeedback); // Feedback add kar diya
    return res.status(201).json({ message: "Feedback submitted successfully!" });
  }

  if (req.method === "GET") {
    return res.status(200).json(feedbacks); // Sare feedback bhej diye
  }

  // Invalid method ke liye
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
