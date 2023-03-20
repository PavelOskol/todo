import React, {useState} from "react";
import './App.css';
import TodoList from "./Todo-List";

function App() {
    const [currentText, setCurrentText] = useState("")
    const [todoList, setTodoList] = useState([
        {id: 1, text: 'Che ta sdelat', confirmed: false},
        {id: 2, text: 'Poiti k maksu', confirmed: false},
    ])
    const keyPress = (e) => {
        if (e.key === 'Enter') {
            setTodoList([...todoList, {
                id: Date.now(),
                text: currentText,
                confirmed: false
            }]);
            setCurrentText("")
        }
    }


return (
    <div className="App">
            <header>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </header>
            <input type={"text"}
                   value={currentText}
                   onChange={e => setCurrentText(e.target.value)}
                   onKeyPress={e => keyPress(e)}
                   placeholder={'Enter todo'}
            />
        <ui>
            <TodoList todos={todoList}/>
        </ui>

    </div>

);
}
export default App;
