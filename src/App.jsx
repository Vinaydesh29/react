import "./App.css";
import List from "./components/List/List";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
function App() {
  const student = [
    { id: 1, name: "jas", age: 20 },
    {
      id: 2,
      name: "arjun",
      age: 21,
    },
    {
      id: 3,
      name: "surya",
      age: 23,
    },
  ];
  const product = [
    {
      product: "phone1",
      quantity: 10,
      unit_price: 100,
    },
    { product: "phone2", quantity: 20, unit_price: 200 },
    { product: "phone3", quantity: 30, unit_price: 300 },
    { product: "phone4", quantity: 40, unit_price: 400 },
  ];
  function call(a) {
    console.log(a);
  }
  return (
    <>
      <h1 style={{ color: "red" }}>text Content</h1>
      <List data={student} />
      <Table data={product} />
      <Button data={call} />
    </>
  );
}

export default App;
