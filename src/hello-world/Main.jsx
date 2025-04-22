import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import Todolist from "../todolist/Todolist";
import Table from "../table/Table";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
            {/* nested component */}
                <HelloWorld />
                <Todolist />
                <Table />
            </Container>
        </StrictMode>
    );