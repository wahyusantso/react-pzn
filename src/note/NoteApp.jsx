import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

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

    function handleAddNote(text) {
        /* Without Reducer
        setNotes((draft) => {
            draft.push({
                id: id++,
                text: text,
                done: false
            });
        });
        **/

        //object action yang dikirim ke reducer
        dispatch({
            type: "ADD_NOTE",
            text: text
        });
    }

    function handleChangeNote(note) {
        /* Without Reducer
        setNotes((draft) => {
            const index = draft.findIndex(item => item.id === note.id); //cari index note yang ingin diupdate.
            draft[index] = note;
        });
        **/

        dispatch({
            ...note,
            type: "CHANGE_NOTE"
        });
    }

    function handleDeleteNote(note) {
        /* Without Reducer
        setNotes((draft) => {
            const index = draft.findIndex(item => item.id === note.id); //cari index note yang ingin diupdate.
            draft.splice(index, 1); //hapus berdasarkan indexnya dan jumlah data yang dihapus 1.
        });
        **/

        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        });
    }
    
    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )
}