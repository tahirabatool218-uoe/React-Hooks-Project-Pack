const treeData = [
  {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      {
        id: 2,
        name: "components",
        type: "folder",
        children: [
          {
            id: 3,
            name: "Button.jsx",
            type: "file",
          },
          {
            id: 4,
            name: "Card.jsx",
            type: "file",
          },
        ],
      },
      {
        id: 5,
        name: "pages",
        type: "folder",
        children: [
          {
            id: 6,
            name: "Home.jsx",
            type: "file",
          },
          {
            id: 7,
            name: "About.jsx",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "public",
    type: "folder",
    children: [
      {
        id: 9,
        name: "index.html",
        type: "file",
      },
    ],
  },
  {
    id: 10,
    name: "package.json",
    type: "file",
  },
];

export default treeData;