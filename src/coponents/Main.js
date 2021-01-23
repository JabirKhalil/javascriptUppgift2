import React, {useState} from 'react'
import Form from "./Form";
import Activities from "./Activities";

const Main = () => {
    const [activities,setActivities] = useState([])
    return (
        <main className="container mt-4 ">
            <div className="row">
                <div className="col-5 ">
                <Form activities={activities} setActivities={setActivities} />
                </div>
                <div className="col-7 ps-5 ">
                <Activities activities={activities} setActivities={setActivities}/>
                </div>

            </div>
           
        </main>
    )
}

export default Main
