import axios from "axios";
import React, { useEffect, useState } from "react";
import StatusList from "./StatusList";

function StatusAdd({
  categoryId,
  statusChange,
  setStatusChange,
  axiosConfig,
  APIBASE,
}) {
  const [statusName, setStatusName] = useState([]);
  const [colorName, setColorName] = useState([]);

  function saveStatus() {
    axios
      .post(
        `${APIBASE}/status`,
        {
          title: statusName,
          categoryId:categoryId,
          color:colorName
        },
        axiosConfig
      )
      .then(() => {
        setStatusChange(statusChange + 1);
        setStatusName("");
      })
      .catch((err) => {
        alert("Could not add todo item.");
      });
  }
  return (
    <>
      <div>
          <div className="row">
            <div className="col">
              <h2>Status Add</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                value={statusName}
                onChange={(e) => setStatusName(e.target.value)}
                className="form-control"
                placeholder="Enter Status Name"
              />
              <select class="form-control" onChange={(e) => setColorName(e.target.value)}>
                  <option value="" disabled selected>Select your color</option>
                  <option value={"green"}>Green</option>
                  <option value={"brown"}>Brown</option>
                  <option value={"gray"}>Gray</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <button
                onClick={() => saveStatus()}
                className="btn btn-block btn-primary"
              >
                Add Status
              </button>
            </div>
          </div>
          <StatusList categoryId={categoryId} statusChange={statusChange} setStatusChange={setStatusChange} APIBASE={APIBASE} axiosConfig={axiosConfig}></StatusList>
        </div>
    </>
  );
}

export default StatusAdd;
