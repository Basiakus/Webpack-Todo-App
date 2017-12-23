import React from 'react';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from  '../components/TodoList';

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
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        //const thingsToDo = this.state.data.map(oneThing => <li key={oneThing.id}>{oneThing.text}</li>) /  /   <ul>{thingsToDo}</ul>
        return (
            <div className={style.TodoApp}>
                <Title title='Tytuł aplikacji' />
                    Tutaj pojawią się komponenty naszej aplikacji.
                 <TodoList list={this.state.data} action={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}
export default App;