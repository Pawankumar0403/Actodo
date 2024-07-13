import { useState } from "react"

function AddTodoForm(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity,setnewactivity]=useState("")

    function handleChange(evt){
        setnewactivity(evt.target.value)
    }

    function handleAdd(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" onChange={handleChange} value={newactivity}/>
                <button className="bg-black text-white p-1 border border-black" onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default AddTodoForm