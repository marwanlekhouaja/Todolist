import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from "react";
import "./style.css";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import EditTask from "./EditTask";
import { context } from "./context";
import {motion} from 'framer-motion'
import DeleteTask from "./DeleteTask";
function TodoListV2() {
  // const [listToDo, setListToDo] = useState([]);
  const data=useContext(context)
  const refMission = useRef();

  const [id,setId]=useState(null)
  const [dataTaskEdit,setTaskEdit]=useState([])
  
  console.log(data.listToDo)
  const save = () => {
    const missionValue = refMission.current.value;

    let task={mission:missionValue,id:Date.now(),completed:false}
    data.addTask(task)

  };


  const completedMission=(idTask)=>{
    data.completeTask(idTask)
  }
  
  const deleteTask=(idTask)=>{
    setId(idTask)
  }
  const editTask=(item)=>{
    setId(item.id)
    setTaskEdit(item)
  }

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
        {data.listToDo.map((item) => (
          <motion.ul layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} className="p-2 card rounded" key={item.id}>
            <div className="d-flex align-items-center">
              <li>{item.mission}</li>
              <div
                className="d-flex align-items-center"
                               
              >
                <span onClick={()=>completedMission(item.id)} style={{cursor:'pointer'}} className={`${item.completed?'card bg-success me-2 text-light p-2':'card bg-danger text-light me-2 p-2'}`} >{item.completed?<span>completed</span>:<span>incompleted</span>}</span>
                <button className="btn btn-danger" data-bs-toggle="modal" onClick={()=>deleteTask(item.id)}
                  data-bs-target="#exampleModal2" >
                  <MdDeleteForever />
                </button>
                <button
                  className="btn btn-success ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"

                  onClick={()=>editTask(item)}
                >
                  <FiEdit  />
                </button>
              </div>
            </div>
          </motion.ul>
        ))}
      </div>
      <hr style={{ fontWeight: "bold", color: "black" }} />
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

      <EditTask idEdit={id} dataTaskEdit={[dataTaskEdit]} />
      <DeleteTask idTask={id} />
      </div>
  );
}

export default TodoListV2;
