export default function SearchForm() {
    return (
        <form>
            <input type="text"/>
            <button onClick={(e) => {
                e.preventDefault(); //stop form for submit content.
                alert('Search for content');
            }}>Search Content</button>
        </form>      
    )
}