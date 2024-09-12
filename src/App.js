import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Category from "./components/Category";
import Item from "./components/Item";
import items from "./data";
import { useState } from "react";

function App() {
  const [dataItems, setDataItems] = useState(items);
  // filter by category
  const filterData = (cat) => {
    if (cat === "all") {
      setDataItems(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      console.log("new Arr", newArr);
      setDataItems([...newArr]);
    }
  };

  // search
  const search = (searchVal) => {
    console.log("val", searchVal);
    const newArr = items.filter((item) => item.title === searchVal);
    console.log("new Arr", newArr);
    setDataItems([...newArr]);
  };

  // all categories
  // eslint-disable-next-line no-unused-expressions
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  console.log("allCa", allCategories);
  return (
    <div>
      <NavBar search={search} />
      <Container>
        <Title></Title>
        <Category
          filterData={filterData}
          allCategories={allCategories}
        ></Category>
        <Item dataItems={dataItems}></Item>
      </Container>
    </div>
  );
}

export default App;
