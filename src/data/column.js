export const column = [
  {
    name: "Application ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Q. Received",
    selector: (row) => row.received,
    sortable: true,
  },
  {
    name: "User Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "Project Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Project Summary",
    selector: (row) => row.summary,
    sortable: true,
  },
  {
    name: "View Quotes",
    selector: (row) => row.view,
    sortable: true,
  },
];
export const data = [
  {
    id: "23917HR12",
    received: 4,
    department: "Human Resources",
    title: "PROFORMA/7/03/2022",
    summary:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    quotes: "Open",
  },
  {
    id: "23917HR12",
    received: 7,
    department: "Technical",
    title: "PROFORMA/7/03/2022",
    summary:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    quotes: "Open",
  },
];
