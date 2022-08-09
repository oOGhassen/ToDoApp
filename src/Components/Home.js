import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const tasks=useSelector(state=>state);
  const dispatch=useDispatch();
  const deleteTask=(id)=>{
    dispatch({type:"DELETE_TASK",payload:id})
  } 
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 my-5 text-right px-5'>
                <Link to='/add' className='btn btn-outline-dark'>Add Task</Link>
                <div className='col-md-6 mx-auto'>
                <table className='table table-hover'>
                  <thead className='text-white bg-dark text-center'>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col' ml-5>task Phrase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task,id)=>(
                      <tr key={id}>
                        <td>{id+1}</td>
                        <td>{task.taskPhrase}</td>
                        <td><Link to={`/edit/${task.id}`} className='btn btn-small btn-primary mr-2'>Edit</Link>
                        <button type='button' onClick={()=> deleteTask(task.id)} className='btn btn-small btn-danger'>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
                </div>
                </div>
                </div>
  )
}

export default Home