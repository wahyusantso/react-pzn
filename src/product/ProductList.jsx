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
        if (load) { //melakukan pengecekan untuk menghindari infinite loop.
            fetch('/product.json') //simulasi menggunakan file json.
                .then((response) => response.json())
                .then((data) => setProducts(data)) //ini akan memicu render ulang dan mengakibatkan infinite loop, jadi perlu ditambahkan pengecekan.
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