import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";
import { NoteContext, NoteDispatchContext } from "./NoteContext";

let id = 0;

const initialNotes = [
    {id: id++, text: "Learn Html", done: false},
    {id: id++, text: "Learn CSS", done: true},
    {id: id++, text: "Learn Javascript", done: false},
    {id: id++, text: "Learn ReactJS", done: false},
];

//reducer function - logic process
//gunakan reducer untuk mempermudah proses add, update, delete pada state, karena tidak memerlukan banyak event handler.
function notesReducer(notes, action) {
    if (action.type === "ADD_NOTE") {
        notes.push({
                    id: id++,
                    text: action.text,
                    done: false
                });
    } else if (action.type === "CHANGE_NOTE") {
        const index = notes.findIndex(note => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;
    } else if (action.type === "DELETE_NOTE") {
        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);
    }
}

export default function NoteApp() {
    // const [notes, setNotes] = useImmer(initialNotes);
    // const [notes, dispatch] = useReducer(notesReducer, initialNotes); //use Reducer. return reducer bukan set function melainkan action function(dispatch).
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    //notes dan dispatch dihandle oleh context(), jadi tidak perlu kirim props lagi.
    //proses handlechange, addnote, handledelete, dilakukan di child component dengan menggunakan Reducer yang sudah diintegrasikan dengan context().
    //mengirim state dan reducer menggunakan context() yang sebelumnya menggunakan props.

    return (
        <div>
            <NoteContext.Provider value={notes}>
                <NoteDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                        <NoteForm/>
                        <NoteList/>
                    </NoteDispatchContext.Provider>
            </NoteContext.Provider>
        </div>
    )
}