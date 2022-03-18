const ListItem = ({item, deleteTodo}) => {
    return (
        <tr>
            <td>{item.title}</td>
            <td>
                <button onClick={()=>{deleteTodo(item.id)}}>Hapus</button>
            </td>
        </tr>
    )
}

export default ListItem