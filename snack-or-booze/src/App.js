import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Items from "./Items";
import AddItemsForm from "./AddItemsForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const addFoods = (newFoodsObj) => {
      console.log(newFoodsObj)
      let food_type = newFoodsObj.form.foodType;
      delete newFoodsObj.form.foodType;
      let new_food = [{...newFoodsObj.form, id:newFoodsObj.form.name}]
      if (food_type === 'snack'){
        setSnacks(prevSnacks => ([ ...prevSnacks, ...new_food]));
      }
      if (food_type === 'drink'){
            setDrinks(prevDrinks => ([...prevDrinks, ...new_food]));
      }

  }

  console.log("After Add")
  console.log(drinks)
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>
            
            <Route exact path="/snacks">
              <Menu name={"snacks"} foods={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Items items={snacks} cantFind="/snacks" />
            </Route>


            <Route exact path="/drinks">
              <Menu name={"drinks"} foods={drinks} title="Drinks" />
            </Route>
            <Route exact path="/drinks/:id">
              <Items  items={drinks} cantFind="/drinks" />
            </Route>

            <Route path="/addFood/snacks">
              <AddItemsForm addFoods={addFoods} category={"snacks"}/>
            </Route>
            <Route path="/addFood/drinks">
              <AddItemsForm addFoods={addFoods} category={"drinks"}/>
            </Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
