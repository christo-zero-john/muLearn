import React from "react";

export default function SkillCard({ skillset, title }) {
  return (
    <div className="flex flex-col gap-5 border-2 border-gray-500 p-5 rounded-md mx-auto w-64">
      <p className="text-lg font-bold text-cyan-400">{title}</p>
      <div className="flex-wrap">
        {skillset.map((skill, index) => (
          <div className="p-2 m-2 inline-block border border-violet-500 w-fit rounded-md hover:bg-gray-700 hover:cursor-pointer">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
