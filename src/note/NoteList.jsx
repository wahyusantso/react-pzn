import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NoteContext } from "./NoteContext";

/*
- Memo (Memoization): Teknik optimasi program untuk handle proses berat, dengan cara menyimpan data secara sementara dari hasil kalkulasi
    (proses berat). sehingga tidak dikalkulasi ulang.
- Memo cocok digunakan ketika handle proses kode yang berat dan hasilnya selalu sama, sehingga tidak diperlukan lagi untuk memposes kode yang berat.
*/

export default function NoteList() {
    const notes = useContext(NoteContext);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);

    // implementasi memo untuk user search, ketikan melakukan pencarian key yang sama, dengan memo dapat menggunakan data yang sebelumnya dibandingkan melakukan pencarian ulang. 
    const filteredNotes = useMemo(() => {
        console.info('filtering notes.');
        return notes.filter(note => note.text.includes(search));
    }, [search, notes]); //memo akan digunakan ketika terjadi perubahan data pada parameter.

    function handleClick() {
        console.info('handle search.');
        setSearch(searchInput.current.value);
    }

    return (
        <div>
            <input ref={searchInput} placeholder="Search"/>
            <button onClick={handleClick}>search</button>
            <ul>
                {
                    filteredNotes.map(note => (
                        <li key={note.id}>
                            <Note note={note}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}