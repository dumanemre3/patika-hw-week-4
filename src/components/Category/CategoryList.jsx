import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ statusChange,setStatusChange,categoryAdd,setCategoryAdd,axiosConfig, APIBASE }) {
  const [categories, setCategories] = useState([]);

  function getCategories() {
    axios
      .get(`${APIBASE}/category`, axiosConfig)
      .then((response) => {
        console.log("res", response);
        setCategories(response.data);
      })
      .catch((err) => {
        console.log("getCategories err", err);
      });
  }
  useEffect(() => {
    getCategories();
  }, [categoryAdd]);
  
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <CategoryItem
              statusChange={statusChange}
              setStatusChange={setStatusChange}
              category={category}
              categoryAdd={categoryAdd}
              setCategoryAdd = {setCategoryAdd}
              axiosConfig={axiosConfig}
              APIBASE={APIBASE}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CategoryList;
