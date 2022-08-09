import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link,useHistory,useParams } from 'react-router-dom';

const EditTask = () => {
    const [taskPhrase, setTaskPhrase] = useState("");
    const {id}= useParams();

    const tasks= useSelector(state => state);
    const dispatch=useDispatch();
    const history=useHistory();
    const currentTask = tasks.find(task=>task.id === parseInt(id)
    );

    useEffect(()=> {
        if (currentTask){
            setTaskPhrase(currentTask.taskPhrase)
        }
    }, [currentTask]);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const data ={
            id:parseInt(id),
            taskPhrase,
        };
        dispatch({type:"UPDATE_TASK",payload:data});
        history.push("/")
    };
  return (
    <div className='container'>
        {currentTask? (
            <>
            <h1 className='display-3 my-5 text-center'>Edit Task {id}</h1>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type='text' placeholder="Enter Edited Task Here" value={taskPhrase} onChange={e=>setTaskPhrase(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value="Update Task" className='btn btn-dark'/>
                        <Link to='/' className='btn btn-danger ml-3'>Cancel</Link>
                    </div>
                    </form>
            </div>
                </div>
            </>
            ): (
                <h1 className='display-3 my-5 text-center'>There is no task having this id : {id} !!</h1>
            )}
                </div>
  );
};

export default EditTask