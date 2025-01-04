export default function Container({children}) {
    return (
        <div>
            <h1>Programmer beginer</h1>
            {children}
            <footer>
                <p>Copyright 2020, Programmer Beginer</p>
            </footer>
        </div>
    )
}