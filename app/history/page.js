import React from "react";
import Deletebutton from "@/components/Deletebutton";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api1/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Prompts");
    }
    return res.json();
  } catch (error) {
    console.log("error loading prompts:", error);
    return { topics: [] }; // Return an empty array if there's an error
  }
};

export default async function Page() {
  const { topics } = await getTopics();

  return (
    <>
      <div className="flex flex-col items-center mt-16">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-8">
          List Of Your Prompts/Learnings
        </h1>

        {/* Learning Boxes */}
        {topics.map((t, index) => (
          <div key={index} className="w-fit p-6 bg-white shadow-lg border border-gray-200 rounded-md flex items-center mt-4">
            <p className="text-lg text-gray-700 mr-4">{t.topic}</p>
            <Deletebutton id={t._id }/>
          </div>
        ))}
      </div>
    </>
  );
}
