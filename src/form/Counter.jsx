import { useState } from "react"

export default function Counter() {
    // dengan menggunakan useState data disimpan tidak akan kembali ke nilai awal ketika render terjadi.
    let [counter, setCounter] = useState(0);
    
    function handleClick() {
        setCounter(counter + 1); //ketika ada perubahan state react akan mengirim antrian untuk memicu render ulang. itu sebabnya perlu menggunakan useState menyimpan data sebelumnya.
        console.log(counter);
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>

            <h1>Counter: {counter}</h1>
        </div>
    )
}