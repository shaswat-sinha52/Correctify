'use client'
import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeTopic = async () => {
      const confirmed = confirm("Are you sure?");
  
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api1/topics?id=${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
      }
    };
  
    return (
      <button onClick={removeTopic} className="text-red-400">
        <FaTrash size={24} />
      </button>
    );
  }
