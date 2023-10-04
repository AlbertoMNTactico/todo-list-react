import Listitem from "../components/Listitem";

function Todo(){
    return (
        <div>
            <ul>
                <Listitem text="item 1" checked={true}></Listitem>
                <Listitem text="item 2" checked={true}></Listitem>
                <Listitem text="item 4" checked={false}></Listitem>
            </ul>
        </div>
        )
}
export default Todo;