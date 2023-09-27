const todo = (props) => {
    //properties
    //chuyển dữ liệu từ paretn  xuống child
    console.log('>>check my prop', props);
    const todos = props.mydata;
    return (
        <div className="todo-container">
            {todos.map(todos => {
                console.log('>>>check todo', todos)
                return (
                    <li className='todo-child' key={todos.id}>{todos.title}</li>
                )
            })}
        </div>
    )
}
export default todo;