import React from "react";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id.toString() === params.id);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link
          href="/"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition-all"
        >
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">{post.title}</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">{post.description}</p>
        <Link
          href="/"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition-all"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
