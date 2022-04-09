import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";


function AddItemsForm({addFoods, category}) {
    const [form, updateForm] = useState({foodType: category,
                                        name: '', 
                                        description:'',
                                        recipe: '', 
                                        serve: ''}
                                        );

    const history = useHistory();
  
    function handleChange(e) {
      e.persist();
      console.log(e.target.value)
      updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(form)
      addFoods({form});
      history.push("/");
    }
  
    const {foodType, name, description, recipe, serve} = form;
  
    return (
      <div className="Form">
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="foodType"> Food Type</label>
            <select name="foodType" value={category} onChange={handleChange}>
                <option value={category}>{category}</option>
            </select>
          </div>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              name="name"
              id="name"
              placeholder="Enter Food Name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              name="description"
              id="description"
              onChange={handleChange}
              value={description}
            />
          </div>

          <div>
            <label htmlFor="recipe">Recipe</label>
            <input
              name="recipe"
              id="recipe"
              onChange={handleChange}
              value={recipe}
            />
          </div>
          <div>
          <label htmlFor="serve">Serve</label>
            <input
              name="serve"
              id="serve"
              onChange={handleChange}
              value={serve}
            />
          </div>

          <input type="Submit" value="Add this food" readOnly />
        </form>
      </div>
    );
  }

export default AddItemsForm;