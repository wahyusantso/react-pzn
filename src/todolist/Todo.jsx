export default function Todo({text, isCompleted, isDeleted = false}) {
    if (isDeleted) { //return null component
        return null;
    } else {
        return (
            <li>
            {/* tampilkan icon jika isCompleted true. */}
                {text} {isCompleted && '✅'}
            </li>
        )
    }
}