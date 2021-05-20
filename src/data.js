function getDate() {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  console.log(`${date}.${month}.${year}`);
  return `${date}.${month}.${year}`;
}

export const boardData = [{
    id: 1,
    header: "To Do",
    todos: [{
        text: "Make test",
        id: "g1",
        date: getDate(),
        bg: "rgb(250, 237, 203)",
      },
      {
        text: "Learn React Native",
        id: "g2",
        date: getDate(),
        bg: "rgb(238, 139, 213)",
      },
      {
        text: "Create App",
        id: "g3",
        date: getDate(),
        bg: "rgb(238, 198, 139)",
      },
      {
        text: "Download images",
        id: "g4",
        date: getDate(),
        bg: "rgb(193, 223, 233)",
      },
      {
        text: "Change text content",
        id: "g5",
        date: getDate(),
        bg: "rgb(247, 193, 215)",
      },
      {
        text: "Translate content",
        id: "g6",
        date: getDate(),
        bg: "rgb(230, 222, 112)",
      },
    ],
  },
  {
    id: 2,
    header: "in Progress",
    todos: [{
        text: "Prepare breakfast",
        id: "g7",
        date: getDate(),
        bg: "rgb(197, 197, 236)",
      },
      {
        text: "Check email",
        id: "g8",
        date: getDate(),
        bg: "pink",
      },
      {
        text: "Clean room",
        id: "g9",
        date: getDate(),
        bg: "rgb(243, 204, 181)",
      },
      {
        text: "Check messages",
        id: "g10",
        date: getDate(),
        bg: "rgb(181, 243, 181)",
      },
      {
        text: "Learn React",
        id: "g11",
        date: getDate(),
        bg: "rgb(243, 181, 228)",
      },
    ],
  },
  {
    id: 3,
    header: "Done",
    todos: [{
        text: "Answer emails",
        id: "g12",
        date: getDate(),
        bg: "lightblue",
      },
      {
        text: "Meeting with managers",
        id: "g13",
        date: getDate(),
        bg: "rgb(243, 159, 243)",
      },
      {
        text: "Learn CSS",
        id: "g14",
        date: getDate(),
        bg: "rgb(223, 191, 11)",
      },
      {
        text: "Learn HTML",
        id: "g15",
        date: getDate(),
        bg: "rgb(178, 250, 250)",
      },
      {
        text: "Finish layout of the site",
        id: "g16",
        date: getDate(),
        bg: "rgb(205, 240, 190)",
      },
    ],
  },
];