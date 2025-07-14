import { useState } from "react"

export default function Counter({name}) {

    /*- react menyimpan state sesuai dengan posisi komponennya, jadi walaupun terdapat state yang sama nilai tidak akan tertukar.
      - state akan reset ketika browser/halaman direfresh.  
    **/
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>Counter {name} Clicked: {count}</h1>
            <button onClick={handleClick}>Increament</button>
        </div>
    )
}