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
            {/* { show2 ? <Counter name={"Wahyu"}/> : <Counter name={"Santoso"}/> } */}
            {/* { show2 ? <Counter name={"Wahyu"}/> : <p>State Hilang.</p> } */}
            {/* {   show2 ? (
                    <div>
                        <Counter name={"Wahyu"}/>
                    </div>
                ) : (
                    <section>
                        <Counter name={"Santoso"}/>
                    </section>
                )
            } */}

            {/* contoh component sama, tetapi state atau posisi berbeda. */}
            {/* { show2 && <Counter name={"Wahyu"}/> }
            { !show2 && <Counter name={"Santoso"}/> } */}

            {/* Menambahkan key di component */}
            { show2 ? <Counter key={"1"} name={"Wahyu"}/> : <Counter key={"2"} name={"Santoso"}/> }

            {/* - state akan hilang berdasarkan kondisi checkboox, ketika komponen hilang dari layar otmatis state akan terhapus.
                - ketika counter yang ditampilkan berbeda, nilai state akan sama. Ini terjadi karena state mengikuti posisi component/posisi component yang masih sama dan jenis componentnya sama, bukan tergantung pada component yang tampil.  
                - reset state, juga dapat dilakukan dengan cara mengganti dengan component lain. Misalkan <p>.
                - merubah posisi component juga dapat mengakibatkan reset state. Misalkan mengubah container Counter sebelumnya <div> menjadi <section>
                - menambahkan key pada component, walaupun posisi sama tetapi key berbeda maka component dianggap berbeda dan state akan reset.
            */}
            <br/>
            <input type="checkbox" checked={show2} onChange={handleChange}/> Tampilkan Counter 2?
        </div>
    )
}