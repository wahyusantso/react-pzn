import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
    /*
    - Disarankan menggunakan context() ketika memiliki banyak child, jika masih sedikit gunakan Props.
    - Mengubah nilai Context() hanya bisa dilakukan di class parent dan memerlukan useState prosesnya.
     */
    const [name, setName] = useState("Wahyu Santoso");

    return (
        <>
            <ProfileContext.Provider value={name}>
                <h1>Profile App</h1>
                <ProfileForm name={name} setName={setName}/>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}