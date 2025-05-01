import React from "react";

const Skills = () => {
  const skillsData = [
    {
      column: 1,
      items: [
        { name: "JAVASCRIPT", image: "../assets/javascript.svg" },
        { name: "REACT", image: "/rectangle-35.png" },
        { name: "REDUX", image: "/rectangle-34.png" },
      ],
    },
    {
      column: 2,
      items: [
        { name: "NODE", image: "/node-logo-1.png" },
        {
          name: "VS CODE",
          image: "/rectangle-34-1.png",
        },
        { name: "FIGMA", image: "" },
      ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="flex w-4/6 mx-auto p-6">
        <h1 className="text-6xl">Skills</h1>
        <div className="flex gap-20">
          {skillsData.map((column) => (
            <div
              key={column.column}
              className="flex flex-col items-center gap-12"
            >
              {column.items.map((item) => (
                <div key={item.name} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="mt-2 text-sm font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
