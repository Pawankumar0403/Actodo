import TodoItem from "./TodoItem"

function TodoList(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    return (
        <div className="bg-[#bdb4ea] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length === 0 ? <p>You haven't added any activity yet</p> : ""}
            {
                activityArr.map(function (item, index) {
                    return <TodoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setactivityArr={setactivityArr} />
                })
            }
        </div>
    )
}

export default TodoList