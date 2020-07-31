import React,{useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
const Task = ({task}) => {
    const { removeTask,findItem }=useContext(TaskListContext)
    
    return (
      <li className="list-item">
          <span>{task.title}</span>
          <div>
              <button
              onClick={()=>removeTask(task.id)}
               className="btn-delete task-btn">
                    <FontAwesomeIcon icon={faTrash} />
              </button>
              
              <button 
              onClick={()=>findItem(task.id)}
              className="btn-edit task-btn">
                   <FontAwesomeIcon icon={faPen} /> 
              </button>
          </div>
      </li>

    )
}

export default Task
