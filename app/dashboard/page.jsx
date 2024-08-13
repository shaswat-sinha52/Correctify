'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function page() {

  const [question, setQuestion] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent default form submission

    if (!question) {
      alert("Enter the prompt first");
      return;
    }
    try {
      const res=await fetch("http://localhost:3000/api1/topics",{
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify({topic:question}),
      })
      if(res.ok){
        alert("Prompt accepted")
        setQuestion("");
      }else{
        throw new Error("Write the prompt again")
      }
    } catch (error) {
      console.log("Error")
      
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-start mt-10">
      <div className="flex space-x-2 mx-auto">
        <input
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          className="w-96 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          placeholder="Enter your prompt"
        />
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600'>
          Submit
        </button>
        <Link href="/history" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          History
        </Link>
      </div>
    </form>
  );
}
