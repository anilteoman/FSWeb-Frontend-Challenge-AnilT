import React from 'react'


const SkillsItem = () => {
    const skillsData = [
        {
          column: 1,
          items: [
            { name: "JAVASCRIPT", image: "/resimler/js.png" },
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
            { name: "FIGMA", image: "/resimler/figma.svg" },
          ],
        },
      ];
  return (
    <div className="flex gap-20">
          {skillsData.map((column) => (
            <div
              key={column.column}
              className="flex flex-col items-center gap-12"
            >
              {column.items.map((item) => (
                <div key={item.name} className="flex items-center gap-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-contain"
                  />
                  <p className="mt-2 text-sm font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
  )
}

export default SkillsItem