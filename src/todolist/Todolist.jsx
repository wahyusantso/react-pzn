import Todo from "./Todo";

export default function Todolist() {
    return (
        <ul>
            <Todo isCompleted={true} text="Learn HTML"/>
            <Todo isCompleted={true} text="Learn CSS" isDeleted={true}/>
            <Todo isCompleted={true} text="Learn Javascript"/>
            <Todo isCompleted={false} text="Learn React"/>
        </ul>
    )
}