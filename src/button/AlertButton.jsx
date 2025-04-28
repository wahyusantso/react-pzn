export default function AlertButton({text, message}) {
    function handleClick(e) { //event object
        console.log(e.target);
        alert(message);
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}