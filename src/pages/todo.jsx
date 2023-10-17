
import { useState, useRef } from "react";
import Listitem from "../components/Listitem";
import { v4 as uuidv4 } from "uuid";
function Todo(){
    //useState nos devuelve un array
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const addTodo = () => {
        const todoValue = inputRef.current.value;
        console.log(inputRef);
        const newTodo = {name: todoValue, id: uuidv4() };
        setTodos([newTodo, ...todos]);
        inputRef.current.value = "";
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    }
    return (
        <div className="flex flex-col gap-2">
            
                <div className="flex gap-2">
                    <input 
                    ref={inputRef} 
                    type="text" 
                    className="bg-slate-400 rounded-md p-2" />
                    <button 
                    onClick={addTodo} 
                    className="bg-indigo-600 rounded-md px-4 py-2">
                    ADD Todo
                    </button>  
                </div> 
            <ul className="flex flex-col gap-2">
                {
                    todos.map((item)=>{
                        return <Listitem 
                        key={item.id} 
                        text={item.name} 
                        onDeleted={() => deleteTodo(item.id)}/>;
                    })
                }
            </ul>
        </div>
        )
}
export default Todo;