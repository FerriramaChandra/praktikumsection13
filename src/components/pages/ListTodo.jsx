import ListItem from "./ListItem"

const ListTodo = (props) => {
    const {data, deleteTodo, handleCheckBoxChange} = props 
    return (
        <div>
            <table style={{borderCollapse:"collapse"}}>
                <tbody>
                    {data.map((todo) => <ListItem key={todo.id} item={todo} deleteTodo={deleteTodo} handleCheckBoxChange={handleCheckBoxChange}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo