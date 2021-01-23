import React from 'react'
import Activity from "./Activity";

const Activities = ({activities, setActivities}) => {

    if(activities.length === 0){
        return (

            
                <div id="activity" className=" mb-5 text-center" >
                No activites found. Please add an activity.
               
                </div>
           
            
            
        )
    }


    return (

        <div>
            <div className="mb-3">
                <label className="form-label">Activities</label>
            </div>
            <div id="activity" className=" mb-5" >
            {
                activities.map(activity =>(

                    <Activity key ={activity.id} activity={activity} activities={activities} setActivities={setActivities}/>
                ))
            }
           
            </div>
        </div>
        
        
    )
}

export default Activities
