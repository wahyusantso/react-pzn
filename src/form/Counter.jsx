import { useState } from "react"

export default function Counter() {
    // dengan menggunakan useState data disimpan tidak akan kembali ke nilai awal ketika render terjadi.
    let [counter, setCounter] = useState(0);
    
    function handleClick() {
        // setCounter(counter + 1); //ketika ada perubahan state react akan mengirim antrian untuk memicu render ulang. itu sebabnya perlu menggunakan useState menyimpan data sebelumnya.
        
        /*
        dalam case snapshot(variabel dalam state), data tidak akan berubah karena state hanya memicu untuk dirender ulang, data baru akan berubah jika render terjadi.
        ketika membuat setCounter sebanyak 3x, bukan berarti react akan render sebanyak 3x, melainkan setCounter terakhir yang akan dirender, ini terjadi karena react menunggu event handler sampai selesai
        
        setCounter(counter + 1);
        setCounter(counter + 1);
        **/

        //gunakan function didalam setCounter, jika ingin mengubah data berkali-kali dalam 1 event handler. ini bisa terjadi karena data disimpan di state management setCounter.
        setCounter((c) => c + 1);
        setCounter((c) => c + 1);
        setCounter((c) => c + 1);
       
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