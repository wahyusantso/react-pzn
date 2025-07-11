import { useState } from "react"
import { useImmer } from "use-immer";

/* penggunaan useImmer pada array, dengan ketentuan membuat array baru setiap melakukan perubahan */

export default function Task() {
    const [item, setItem] = useState(""); //menyimpan data sementara ketika terdapat perubahan pada input
    const [items, setItems] = useImmer([]); //data yang disimpan sementara akan disimpan di array.

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();

        setItems((draft) => {
            draft.push(item); //ambil data sementara, simpan ke array
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
            <h1>List Task</h1>
            <ul>
                {items.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}