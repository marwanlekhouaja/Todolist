import React, { useContext, useRef } from "react";
import { context } from "./context";

const AddTask = () => {
  const refMission = useRef();
  const data = useContext(context);

  const save = () => {
    const missionValue = refMission.current.value;

    let task = { mission: missionValue, id: Date.now(), completed: false };
    data.addTask(task);
  };

  return (
    <>
      <form className="add d-flex">
        <input
          type="text"
          placeholder="Enter your task here ..."
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
      </form>
    </>
  );
};

export default AddTask;
