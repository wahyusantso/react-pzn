import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
            {/* nested component */}
                <HelloWorld />
            </Container>
        </StrictMode>
    );