//ID RANDOM
const IdCreator = Math.floor(Math.random() * 900000) + 100000;

//TASK
const task = {
  description: "calcio",
};

// ARRAY DI TASK
const tasklist = [];

//ASSIGN
const assignTo = [
  {
    id: IdCreator,
    nome: "filippo",
    cognome: "rossi",
  },
  {
    id: IdCreator,
    nome: "Giuseppe",
    cognome: "Blu",
  },
];

// PRIORITY ID
const priorityID = [
  { id: 1, desc: "low" },
  { id: 2, desc: "medium" },
  { id: 3, desc: "high" },
];

// ACTION ADD
const add = (task, assignTo, priorityID) => {
  const obj = {
    id: IdCreator,
    task: task,
    assign: assignTo,
    priority: priorityID,
    completed: false,
  };
  return [...tasklist, obj];
};

console.log(add(task.description, assignTo[1].nome, priorityID[1].desc));