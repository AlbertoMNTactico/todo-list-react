import { useState } from "react";

function Listitem({text, onDeleted}){
    
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
       setChecked(!checked);
    }
    return (<li className={`p-2 rounded-md bg-indigo-950 ${checked ? 'line-through' : null}`}>
        {text} <input type="checkbox" checked = {checked} onChange={handleCheck}/> </li>)
}
export default Listitem; 