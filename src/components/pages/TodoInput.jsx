import { Component } from "react";
import styles from "./styles.module.css";

class TodoInput extends Component {
    state = {
        id: "",
        title: "",
        completed: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.title;
        if (formIsNotEmpty) {
            const newData = {
                title: this.state.title
            }

            this.props.addTodo(newData);
            this.setState ({
            title: ""
            })
        } else {
            alert("Data masih Kosong")
        }
    }


    render() {
        return (
            <div>
                <div className={styles.container}>
                    <input type="text" placeholder="Add Todo..." value={this.state.title} name="title" onChange={(e) => {this.onChange(e)}} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}
export default TodoInput