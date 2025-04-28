import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import Todolist from "../todolist/Todolist";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
            {/* nested component */}
                <HelloWorld />
                <Todolist />
                <Table />
                
                <AlertButton text={'Focus On Me!'} message={'You Click Me!'}/>
                <MyButton text={'Smash me'} onSmash={() => alert('You Smash Smash Me!')}/>
            </Container>
        </StrictMode>
    );