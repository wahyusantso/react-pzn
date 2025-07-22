import { useRef, useState } from "react"

/*
- Menggunakan useRef jika ingin menyimpan data, tetapi tidak ingin memicu render ulang.
- Saat terjadi render ulang data ref akan hilang, jadi ref tidak ditujukan untuk menyimpan data saat render ulang.
- ref jarang digunakan di tampilan component, hanya sering digunakan di internal proses. 
*/
export default function Timer() {
    const [start, setStart] = useState(null);
    const [now, setNow] = useState(null);
    const timer = useRef(null);

    function handleStart() {
        setStart(Date.now());
        setNow(Date.now());

        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10); //data update setiap 10 ms.
    }

    function handleStop() {
        clearInterval(timer.current);
    }

    return (
        <>
            <h1>Timer: {now - start} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}