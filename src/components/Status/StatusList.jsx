import axios from "axios";
import React, { useEffect, useState } from "react";
import StatusItem from "./StatusItem";

function StatusList({ categoryId,statusChange,setStatusChange,axiosConfig, APIBASE }) {
  const [statuses, setStatuses] = useState([]);

  function getStatuses(categoryId) {
    axios
      .get(`${APIBASE}/status?categoryId=${categoryId}`, axiosConfig)
      .then((response) => {
        setStatuses(response.data);
      })
      .catch((err) => {
        console.log("getStatuses err", categoryId, err);
      });
  }
  useEffect(() => {
    getStatuses(categoryId);
  }, [statusChange]);
  
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Color</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {statuses.map((status, index) => (
            <StatusItem
              status={status}
              statusChange={statusChange}
              setStatusChange = {setStatusChange}
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

export default StatusList;
