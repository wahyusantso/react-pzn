export default function Toolbar({onClick}) {
    return (
        <div onClick={onClick} style={{ backgroundColor: "blueviolet" }}>
            <button onClick={onClick}>First Button</button>
            <button onClick={onClick}>Second Button</button>
        </div>
    )
}