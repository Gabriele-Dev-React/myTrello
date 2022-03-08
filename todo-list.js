//ID RANDOM
const IdCreator = Math.floor(Math.random() * 900000) + 100000;

//TASK
const task = {
  description: "calcio",
};

// ARRAY DI TASK
const tasklist = [
  { id: 1, task: "calcio", priority: "high", completed: false },
  { id: 2, task: "rubgy", priority: "low", completed: false },
  { id: 3, task: "tennis", priority: "medium", completed: true },
];

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

// ADD ACTION
var add = (task, assignTo, priorityID) => {
  var obj = {
    id: IdCreator,
    task: task,
    assign: assignTo,
    priority: priorityID,
    completed: false,
  };
  return [...tasklist, obj];
};

console.log(add(task.description, assignTo[1].nome, priorityID[1].desc));

// FILTER ACTION
const newArray2 = tasklist.filter((item) => {
  return item.id !== 1;
});
console.log(newArray2);

// EDIT ACTION

const newArray = tasklist.map((item) => {
  /* return (item.task = "football"); */
  if (item.id == 1) {
    return (item.task = "football");
  }
});
console.log(tasklist);

// SEARCH ACTION

const toogle = (tasklist) => {
  const newArray = tasklist.filter((item) => item.completed !== false);
  return newArray;
};
const complete = toogle(tasklist);
console.log(complete);
