import { useState } from "react";

function Listitem({text, onDeleted}){
    
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
       setChecked(!checked);
    }
    return (
        <li className={`flex justify-between p-2 rounded-md bg-indigo-950 ${checked ? 'line-through' : null}`}>
        <div>
        {text} <input 
        type="checkbox" 
        checked = {checked} 
        onChange={handleCheck}/> 
        </div>
        <button 
        onClick={onDeleted}
        className="rounded-md bg-red-500 p-2 hover:bg-red-800 ">
        Delete
        </button>
        </li>)
}
export default Listitem; 