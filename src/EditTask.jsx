import React, { useContext, useRef } from "react";
import "bootstrap/dist/js/bootstrap";
import { context } from "./context";
function EditTask({idEdit,dataTaskEdit}) {
  
  const data=useContext(context)
  const refTask=useRef()
  const refCompleted=useRef()
  const editTask=()=>{
    const saveEdit={
      id:idEdit,
      mission:refTask.current.value,
      completed:refCompleted.current.checked?true:false
    }
    data.updateTask(saveEdit)
  }
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                edit task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {dataTaskEdit.map((task,index)=>(
                <form action="" key={index}>
                <input
                  type="text"
                  placeholder="Enter your task here ..."
                  className="form-control"
                  ref={refTask}
                  defaultValue={task.mission}
                  // ref={refMission}
                />
                <div className="d-flex align-items-center mt-2 mb-2">
                  <label className="">completed</label>
                  <input type="checkbox" ref={refCompleted} defaultChecked={`${task.completed?true:false}`} className=" ms-2 mt-1" id="" />
                </div>
                <input
                  type="button"
                  className="mt-2 w-100 btn btn-success"
                  // onClick={save}
                  data-bs-dismiss="modal"
                  value="edit task" onClick={editTask}
                />
              </form>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
