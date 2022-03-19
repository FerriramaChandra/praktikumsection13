import { Component } from "react";

import ListTodo from "./pages/ListTodo";
import TodoInput from "./pages/TodoInput";



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: 1,
                    title: "Mengerjakan exercise",
                    completed: true
                },
                {
                    id: 2,
                    title: "Mengerjakan Assignment",
                    completed: false
                },
            ]
        }
    }

    deleteTodo = (id) => {
        const newListTodo = this.state.data.filter((item) => item.id !== id)
        this.setState({data : newListTodo})
    }
    addTodo = (newTodo) => {
        const newTugas = {id : this.state.data.length + 1, ... newTodo}
        this.setState({data: [...this.state.data, newTugas]})
    }
    handleCheckBoxChange = (id) => {
        const newList = this.state.data.map(data=> {
            if (data.id === id)
            return { ...data,completed:!data.completed }
        return data;
        })
        this.setState({data:newList})
    }

    render() {

        return (
            <div>
                <TodoInput addTodo = {this.addTodo}/>
                <ListTodo data={this.state.data} deleteTodo={this.deleteTodo} handleCheckBoxChange={this.handleCheckBoxChange} />
            </div>
        )
    }
}

export default Home