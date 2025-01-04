export default function HelloWorld() {
    // use spread on props
    const props = {
        text: "Hello, react.!! let's go to the moon"
    }
    return (
        <>
            <HeaderHelloWord {...props}/> {/* assign props */}
            <ParagrafHelloWord/>
        </>
    );
}

function HeaderHelloWord({ text = "forget to give text" }) { // destructuring props, execute if forget assign props.
    return (
        <h1 style={{ 
            color: 'blue',
            backgroundColor: 'tomato'
         }}>Hello, {text.toUpperCase()}</h1>
    )
}

function ParagrafHelloWord() {
    const content = 'Build Web React JS, Tutorial from PZN';
    const style = {
        color: 'red',
        backgroundColor: 'aqua'
    }
    return (
        <p style={style}>{content.toLowerCase()}</p>
    )
 }
