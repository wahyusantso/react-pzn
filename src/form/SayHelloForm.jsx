export default function SayHelloForm() {
    function handleClick(e) {
        e.preventDefault();
        const name = document.getElementById('input_form').value;
        document.getElementById('content').innerText = `Hello ${name}`;
    }
    return (
        // Side effect bekerja ketika terjadi event handler dari user.
        <div>
            <form>
                <input id="input_form"/>
                <button onClick={handleClick}>
                    Say Hello
                </button>
            </form>
            <h1 id="content">Hello World</h1>
        </div>
    )
}