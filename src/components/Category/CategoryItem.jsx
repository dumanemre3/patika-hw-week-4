import axios from "axios";
import React, { useEffect, useState } from "react";
import StatusAdd from "../Status/StatusAdd";

function CategoryItem({
  statusChange,
  setStatusChange,
  axiosConfig,
  categoryAdd,
  setCategoryAdd,
  APIBASE,
  category,
  categoryChange,
}) {

  const [statusVisible,setStatusVisible] = useState(false);
  function deleteCategory(id) {
    axios.delete(`${APIBASE}/category/${id}`, axiosConfig).then(() => {
      setCategoryAdd(categoryAdd + 1);
    });
  }

  return (
    <tr>
      <td>{category.title}</td>
      <td>
        <button
          className="btn btn-primary mr-1"
          onClick={() => (setStatusVisible(!statusVisible))}>
          Statüleri Düzenle
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            deleteCategory(category.id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
        {statusVisible && <StatusAdd statusChange={statusChange} APIBASE={APIBASE} axiosConfig={axiosConfig} setStatusChange={setStatusChange} categoryId={category.id}/>}
      </td>
    </tr>
  );
}

export default CategoryItem;
