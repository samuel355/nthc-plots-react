const data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "" },
  {},
  { id: 3, name: "Jane Smith" },
  { id: 4, name: "", age: 25 },
  { id: 5, name: "Bob Johnson" }
];

const filteredData = data.filter(obj => Object.keys(obj).length !== 0);

filteredData.forEach(obj => {
  console.log(obj);
});