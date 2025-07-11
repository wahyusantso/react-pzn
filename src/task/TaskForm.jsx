import { useState } from "react";

export default function TaskForm({setItems}) {
    const [item, setItem] = useState(""); //menyimpan data sementara ketika terdapat perubahan pada input

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setItems((draft) => {
            draft.push(item);
        });
        
        setItem(""); //reset
    }

    return (
        <div>
            <h1>Create Task</h1>
            <form>
                <input value={item} onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}