import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListTodo from "./ListTodo";
import styles from "./styles.module.css";
import TodoInput from "./TodoInput";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: uuidv4(),
                    title: "Mengerjakan exercise",
                    completed: true
                },
                {
                    id: uuidv4(),
                    title: "Mengerjakan Assignment",
                    completed: true
                },
            ]
        }
    }

    deleteTodo = (id) => {
        const newListTodo = this.state.data.filter((item) => item.id !== id)
        this.setState({data : newListTodo})
    }
    addTodo = (newTodo) => {
        const newTugas = {id : uuidv4(), ... newTodo}
        this.setState({data: [...this.state.data, newTugas]})
    }


    handleBukaInput = () => {
        this.setState ({
            editing:false
        })
    }
    handleTutupInput = () => {
        this.setState ({
            editing:true
        })
    }


    render() {
        return (
            <div className={styles.Home}>
                <ListTodo data={this.state.data} deleteTodo={this.deleteTodo}/>
                <TodoInput/>
            </div>
        )
    }
}

export default Home