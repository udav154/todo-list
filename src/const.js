import {
    randomCreatedDate,
  } from "@mui/x-data-grid-generator";

export const PATHS = {
    todo: {
        url: '/'
    },
    basket: {
        url: '/basket'
    },
    home: {
        url: '/home'
    },
    archive: {
        url: '/archive'
    },
    registration: {
      url: '/registration'
    },
    authentication: {
      url: '/authentication'
    }
}


 export const initialRows = [
    {
      id: 1,
      name: "Damien",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 2,
      name: "Nicolas Nicolas Nicolas Nicolas Nicolas Nicolas",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 3,
      name: "Kate",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 4,
      name: "Damien",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 5,
      name: "Nicolas",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 6,
      name: "Kate",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 7,
      name: "Nicolas",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 8,
      name: "Kate",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 9,
      name: "Damien",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 10,
      name: "Nicolas",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    },
    {
      id: 11,
      name: "Kate",
      dateCreated: randomCreatedDate(),
      dateDone: randomCreatedDate()
    }
  ];