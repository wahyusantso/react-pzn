import { useEffect, useRef, useState } from "react";
import Product from "./Product";

/*
- menggunakan useEffect untuk proses yang memerlukan dijalankan setelah render terjadi.
- penggunaan effect harus hati2 karena bisa menyebabkan infinite loop ketika mengubah state didalam effect.
- gunakan clean up, jika membutuhkan kode untuk dijalankan setelah effect. misalkan menutup koneksi socket.
*/
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const loaded = useRef(false);

    //contoh penggunaan useEffet untuk mengambil data dari internet.
    useEffect(() => {
        if (loaded.current === false) { //melakukan pengecekan untuk menghindari infinite loop.
            fetch('/product.json') //simulasi menggunakan file json.
                .then((response) => response.json())
                .then((data) => setProducts(data)) //ini akan memicu render ulang dan mengakibatkan infinite loop, jadi perlu ditambahkan pengecekan.
                .then(() => loaded.current = true); //ubah status agar tidak dijalankan kembali.
        }

        return () => { //clean up akan dijalankan saat akan terjadi render ulang ataupun terdapat effect lain yang akan jalan.
            console.log('Product list component unmounted.')
        }
    });

    return (
        <>
            <h1>Product List</h1>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </>
    )
}