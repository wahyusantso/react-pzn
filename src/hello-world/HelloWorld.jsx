export default function HelloWorld() {
    return (
        <>
            <HeaderHelloWord/>
            <ParagrafHelloWord/>
        </>
    );
}

function HeaderHelloWord() {
    const text = 'world!';
    return (
        <h1 style={{ 
            color: 'blue',
            backgroundColor: 'tomato'
         }}>Hello, {text}</h1>
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
