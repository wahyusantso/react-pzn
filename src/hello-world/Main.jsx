import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import Todolist from "../todolist/Todolist";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";

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
                <Toolbar onClick={(e) => {
                    e.stopPropagation(); //handle double events because the parent has the same event
                    alert('smart people!');
                }}/>
                <SearchForm/>
                <SayHelloForm/>
                <Counter/>
            </Container>
        </StrictMode>
    );