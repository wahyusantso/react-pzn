import { useEffect, useRef, useState } from "react";
import Product from "./Product";

/*
- menggunakan useEffect untuk proses yang memerlukan dijalankan setelah render terjadi.
- penggunaan effect harus hati2 karena bisa menyebabkan infinite loop ketika mengubah state didalam effect.
- gunakan clean up, jika membutuhkan kode untuk dijalankan setelah effect. misalkan menutup koneksi socket.
- gunakan effect dependencies, untuk membuat effect hanya berjalan ketika state berubah, dependencies dapat di isi array state.
- gunakan empty array pada dependencies, untuk membuat effect hanya jalan sekali.
*/
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick() {
        setLoad(true);
    }

    //contoh useEffect sekali jalan dengan empty array.
    useEffect(() => {
        console.info('Call use Effect with []/Empty Array.'); //hanya akan jalan sekali saat pertama kali load.
    }, []); //empty array

    //contoh penggunaan useEffet untuk mengambil data dari internet.
    useEffect(() => {
        //jika ingin menerapkan async await pada effect, harus dibungkus didalam fungsi seperti dibawah ini. direkomendasikan menggunakan promise karena bisa langsung di terapkan di dalam  effect.
        async function fetchProduct() {
            const response = await fetch('/product.json') //simulasi menggunakan file json.
            const data = await response.json(); //parse json ke objek javascript.
            setProducts(data);
        }

        if (load) { //melakukan pengecekan untuk menghindari infinite loop.
            fetchProduct();
        }

        return () => { //clean up akan dijalankan saat akan terjadi render ulang ataupun terdapat effect lain yang akan jalan.
            console.log('Product list component unmounted.')
        }
    }, [load]); //dependencies.

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </>
    )
}