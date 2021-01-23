import React, { useState } from "react";
import uuid from 'react-uuid'

const Form = ({activities,setActivities}) => {
const [disableSubmit, setdisableSubmit] = useState(true)
const [name, setName] = useState('')
    

    const nameHandler = (e) =>{
        e.target.value.length >= 2 ? setdisableSubmit(false) : setdisableSubmit(true)
        
        setName(e.target.value)
    }

    const submitHandler =(e) =>{
        e.preventDefault() 

        setActivities([...activities,{name: name, status: false, id: uuid() }]);
        setName('')
        setdisableSubmit(true)
    }

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Activity's name</label>
                <input type="text" onChange={nameHandler} value={name} className="form-control" id="exampleFormControlInput1" />
            </div>
            
            <div className="mb-3">
                 <button type="submit" onClick={submitHandler} disabled={disableSubmit} className="btn btn-secondary w-100 p-3">Add activity</button>
            </div>
        </form>
    )
}

export default Form
