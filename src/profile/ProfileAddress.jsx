import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

//menggunakan useContext() untuk mempermudah mengirim informasi/data dari parent component ke child component.
//useContext() juga bisa digunakan sebagai pengganti props.
//penggunaan props akan terasa sulit saat terdapat banyak component karena proses passing data terlalu panjang untuk dilakukan, solusi menggunakan useContext(). 
//useContext() bukan global state(tidak bisa digunakan dimanapun/secara bebas). useContext() hanya bisa digunakan pada child component yang memiliki parent.
export default function ProfileAddress() {
    const profile = useContext(ProfileContext);

    return (
        <>
            <h2>Profile Address</h2>
            <p>Alamat: {profile}</p>
        </>
    )
}