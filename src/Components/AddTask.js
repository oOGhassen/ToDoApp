import React, {useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const AddTask = () => {
    const [taskPhrase, setTaskPhrase] = useState("") ;
    // const [taskPhrase, setTaskPhrase] = useState("") ;

    const tasks=useSelector((state)=>state);
    const dispatch=useDispatch();
    const history=useHistory();
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data ={
            id: tasks[tasks.length - 1].id + 1,
            taskPhrase,
        };
        dispatch({type:"ADD_Task",payload:data});
        history.push("/")
    };
  return (


    <div className='container'>
            <h1 className='display-3 my-5 text-center'>Add Task</h1>
        <div className='row'>
                <div className='col-md-6 shadow mx-auto'>
                <form className='my-5'onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input className='form-control' type='text' placeholder="Enter Your Task here" value={taskPhrase} onChange={e=>setTaskPhrase(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value="Add Task" className='btn btn-block btn-dark'/>
                    </div>
                    </form>
            </div>
                </div>
                </div>
  )
}

export default AddTask