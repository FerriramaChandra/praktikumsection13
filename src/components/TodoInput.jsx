import { Component } from "react";

class TodoInput extends Component {
    state = {
        id: "",
        title: "",
        completed: "",
        editing: true
    }

    render() {
        const viewMode = {};
        const editMode = {};
        if (this.state.editing) {
            viewMode.display = 'none';
        } else {
            editMode.display = 'none';
        }
        
        return (
            <div>
                <div></div>
                <button onClick={this.handleBukaInput} style={editMode}>Masukkan Todo</button>
            </div>
        )
    }
}
export default TodoInput