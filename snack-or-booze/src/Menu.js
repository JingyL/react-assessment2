import React from "react";
import { Link, useParams } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";



function Menu(props) {
  let foods = props.foods;
  console.log(foods)
  let menu_name = props.name;
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {menu_name} Menu       
            <Link to={`/addFood/${menu_name}`}>+</Link>
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {foods.map(food => (
              <Link to={`/${menu_name}/${food.id}`} key={food.id}>
                <ListGroupItem>{food.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;