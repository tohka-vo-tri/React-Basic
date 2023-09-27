const todo = (props) => {
    //properties
    //chuyển dữ liệu từ paretn  xuống child
    // console.log('>>check my prop', props);
    const todos = props.todos;
    return (
        <div className="todo-container">
            <div className="title">
                {props.title}
            </div>
            {todos.map(todos => {
                console.log('>>>check todo', todos)
                return (
                    <li className='todo-child' key={todos.id}>{todos.title}</li>
                )
            })}
            <hr></hr>
        </div>
    )
}
export default todo;