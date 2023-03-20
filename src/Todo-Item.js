import {useState} from "react";

const TodoItem = ({id, text, confirmed}) => {
    const [done,setDone] = useState(confirmed);
    const cls = ['todo'];
    if (done) cls.push('completed');

    return (
        <li className={cls.join(' ')} >
            <label>
                <input type={"checkbox"}
                        checked={done}
                       onChange={() => setDone(!done)}
                />
                <span> {text} </span>
                <span className="material-symbols-outlined">
                delete
                </span>
            </label>
        </li>
    )
}

export default TodoItem;