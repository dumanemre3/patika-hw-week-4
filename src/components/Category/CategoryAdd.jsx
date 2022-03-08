import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";

function CategoryAdd({
  statusChange,
  setStatusChange,
  categoryVisible,
  categoryAdd,
  setCategoryAdd,
  axiosConfig,
  APIBASE,
}) {
  const [categoryName, setCategoryName] = useState([]);

  function saveCategory() {
    axios
      .post(
        `${APIBASE}/category`,
        {
          title: categoryName,
        },
        axiosConfig
      )
      .then(() => {
        setCategoryAdd(categoryAdd + 1);
        setCategoryName("");
      })
      .catch((err) => {
        alert("Could not add todo item.");
      });
  }
  return (
    <>
      {categoryVisible && (
        <div>
          <div className="row">
            <div className="col">
              <h2>Category Add</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="form-control"
                placeholder="Enter Category Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-3">
              <button
                onClick={() => saveCategory()}
                className="btn btn-block btn-primary"
              >
                Add Category
              </button>
            </div>
          </div>
          <CategoryList statusChange={statusChange} setStatusChange={setStatusChange} categoryAdd={categoryAdd} setCategoryAdd={setCategoryAdd} APIBASE={APIBASE} axiosConfig={axiosConfig}></CategoryList>
        </div>
      )}
    </>
  );
}

export default CategoryAdd;
