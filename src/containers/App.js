import React from 'react';
import style from './App.css';
import Title from '../components/Title.js';
import TodoForm from  '../components/TodoForm.js';
import TodoList from '../components/TodoList.js';
import uuid from 'uuid';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    text: "Rubish",
                    id: 1
                },
                {
                    text: "Huvering",
                    id: 2
                },
                {
                    text: "Learning",
                    id:3
                }
            ]
        };
    }
    addTodo(event) {
        const todo = {
            text: this.state.text,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        event.preventDefault();
        debugger
    }
    onChangeHandle(event) {
        this.setState({
            text: event.target.value
        })
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        //const thingsToDo = this.state.data.map(oneThing => <li key={oneThing.id}>{oneThing.text}</li>) /  /   <ul>{thingsToDo}</ul>
        return (
            <div className={style.TodoApp}>
                <Title title='Misje do zrobienia' />
                <TodoForm action={this.addTodo.bind(this)} text={this.state.text} onChangeHandle={this.onChangeHandle.bind(this)} />
                <TodoList list={this.state.data} action={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}
export default App;