import React from 'react'

const Activity = ({activity,activities, setActivities}) => {

    const deleteHandler = () =>{
            setActivities(activities.filter(item => item.id !== activity.id))
    }

    const activeHandler = () => {
            setActivities(activities.map(item =>{
                if(item.id === activity.id){
                    return {
                        ...item, status: !item.status
                    }
                }
                return item
            }))
    }


    return (
        <div >
        

            <div className="border mb-2 p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <div className="name" >{activity.name}</div>
                        <div className="status">{activity.status}</div>
                    </div>
                    <div>
                        <i onClick={activeHandler} className={ `far fa-calendar-times cp ${ activity.status ? 'an-active' : 'in-active' }`}></i>
                        <i onClick={deleteHandler} className="fas fa-trash cp"></i>
                    </div>
                </div>
            
            
           
            </div>
        
        </div>
       
    )
}

export default Activity
