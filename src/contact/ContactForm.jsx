import { useState } from "react";
import { useImmer } from "use-immer";

const initialData = {
        name: "",
        message: ""
};

export default function ContactForm() {  
    //menggunakan useState untuk mengubah data object
    // const [contact, setContact] = useState(initialData);

    //menggunakan immer untuk mengubah data object tanpa harus cloning object itu sendiri.
    const [contact, setContact] = useImmer(initialData);


    function handleNameChange(e) {
        //saat mengubah nilai state, disarankan membuat object baru dan cloning pada object sebelumnya
        // setContact({
        //     ...contact,
        //     name: e.target.value
        // });

        //update object dengan useImmer
        setContact(draft => {
            draft.name = e.target.value
        });
    }

    function handleMessageChange(e) {
        // setContact({
        //     ...contact,
        //     message: e.target.value
        // });
        setContact(draft => {
            draft.message = e.target.value
        });
    }
    
    return(
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="name" value={contact.name} onChange={handleNameChange}/>
                <br/>
                <input type="text" placeholder="message" value={contact.message} onChange={handleMessageChange}/>
            </form>

            <h1>Contact Detail</h1>
            <p>name: {contact.name}</p>            
            <p>message: {contact.message}</p>            
        </div>
    )
}