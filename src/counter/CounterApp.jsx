import { useState } from "react"
import Counter from "./Counter";

export default function CounterApp() {
    const [show2, setShow2] = useState(true);

    function handleChange(e) {
        setShow2(e.target.checked);
    }

    return(
        <div>
            {/* Ternary Operator */}
            { show2 ? <Counter name={"Wahyu"}/> : <Counter name={"Santoso"}/> }
            {/* - state akan hilang berdasarkan kondisi checkboox, ketika komponen hilang dari layar otmatis state akan terhapus.
                - ketika counter yang ditampilkan berbeda, nilai state akan sama. Ini terjadi karena state mengikuti posisi component/posisi component yang masih sama dan jenis componentnya sama, bukan tergantung pada component yang tampil.  
            */}
            <br/>
            <input type="checkbox" checked={show2} onChange={handleChange}/> Tampilkan Counter 2?
        </div>
    )
}