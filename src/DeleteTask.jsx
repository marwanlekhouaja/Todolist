import React, { useContext } from "react";
import { context } from "./context";

const DeleteTask = ({idTask}) => {
  const data = useContext(context);
  const deletetask = () => {
    data.removeTask(idTask);
  };
  console.log(idTask)
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal2"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title " id="exampleModalLabel2">
                delete task
              </h5>
              <button
                type="button"
                className="btn-close text-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <h5 className="">Do you really want to remove this task !</h5>
              <button
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={deletetask}
              >
                yes
              </button>
              <button data-bs-dismiss="modal" className="btn btn-danger ms-2">
                no
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
