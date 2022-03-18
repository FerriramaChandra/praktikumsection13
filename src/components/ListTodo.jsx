import ListItem from "./ListItem"

const ListTodo = (props) => {
    const {data, deleteTodo} = props 

    return (
        <div>
            <table>
                <thead>
                    <td>Title</td>
                    <td>Completed</td>
                </thead>
                <tbody>
                    {data.map((todo) => <ListItem key={todo.id} item={todo} deleteTodo={deleteTodo}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo