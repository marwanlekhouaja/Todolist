import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from "react";
import './style.css';

function TodoListV2() {
  const [listToDo, setListToDo] = useState([]);
  const refMission = useRef();

  const save = () => {
    const missionValue = refMission.current.value;
    let newMission={remove:false,mission:missionValue}

    if (missionValue.length !== 0) {
      setListToDo([...listToDo,newMission]);
      refMission.current.value = "";
    } else {
      alert("impossible d'ajouter une mission vide");
    }
  };

  const removeMission = (index) => {
    const updatedListToDo = [...listToDo];
    updatedListToDo[index].remove = !updatedListToDo[index].remove;
    setListToDo(updatedListToDo);
  };

  const removeDone = (index) => {
    const updatedListToDo = [...listToDo];
    updatedListToDo.splice(index, 1);
    setListToDo(updatedListToDo);
  };

  return (
    <div className="container shadow-lg mt-4 p-4 rounded col-sm-9 col-10 col-md-7 d-flex justify-content-center flex-column">
      <h3
        style={{
          fontFamily: "monospace",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        To Do List
      </h3>
      <div className="to-do-container">
        {listToDo.map((item, index) => (
          <ul className="p-3 shadow rounded" key={index}>
            <div className="d-flex align-items-center">
            <li onClick={() => removeMission(index)} style={{ fontFamily: "monospace", textDecoration: item.remove ? "line-through" : "none" }}>
              {item.mission}
            </li>
            {item.remove ? (
              <button onClick={() => removeDone(index)} className="btn btn-danger">Remove</button>
            ) : null}
            </div>
          </ul>
        ))}
      </div>
      <hr style={{ fontWeight: "bold", color: "black" }} />
      <div className="add d-flex">
        <input
          type="text"
          placeholder="Enter item ..."
          className="form-control w-75"
          ref={refMission}
          name=""
          id=""
        />
        <input
          type="button"
          className="w-25 btn btn-primary"
          onClick={save}
          value="Add"
        />
      </div>
    </div>
  );
}

export default TodoListV2;
