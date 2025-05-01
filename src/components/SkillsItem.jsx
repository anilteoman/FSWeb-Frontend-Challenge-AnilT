import React from 'react'


const SkillsItem = () => {
    const skillsData = [
        {
          column: 1,
          items: [
            { name: "JAVASCRIPT", image: "/resimler/javascript.svg" },
            { name: "REACT", image: "/resimler/react-2.svg" },
            { name: "REDUX", image: "/resimler/redux.svg" },
          ],
        },
        {
          column: 2,
          items: [
            { name: "NODE", image: "/resimler/node-js.svg" },
            { name: "VS CODE", image: "/resimler/vscode.svg"},
            { name: "FIGMA", image: "/resimler/figma.svg" },
          ],
        },
      ];
  return (
    <div className="flex gap-20 pt-12 sm:pt-0">
          {skillsData.map((column) => (
            <div
              key={column.column}
              className="flex flex-col gap-12"
            >
              {column.items.map((item) => (
                <div key={item.name} className="flex items-center gap-12">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32"
                  />
                  <p className="mt-2 text-sm font-semibold font-inter">{item.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
  )
}

export default SkillsItem