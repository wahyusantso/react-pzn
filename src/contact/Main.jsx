import { StrictMode } from "react";
import ContactForm from "./ContactForm";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <ContactForm/>
        </StrictMode>
    )