import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import Todolist from "../todolist/Todolist";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
            {/* nested component */}
                <HelloWorld />
                <Todolist />
            </Container>
        </StrictMode>
    );