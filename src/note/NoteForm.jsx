import { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContext";

export default function NoteForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(NoteDispatchContext);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() { 
        setText("");
        dispatch({
            type: "ADD_NOTE",
            text: text
        })
     }

     return (
        <>
            <input placeholder="Add Note" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </>
     )
}