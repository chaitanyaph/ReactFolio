import './list.css'
function List(props){
    
    const movie = props.movie;
    const realeaseYear = props.realeaseYear;
    const duration = props.duration
    const hero = props.hero
    const url = props.url
    const url1 = props.url1
    return(
        <ul><h2> Movies-Details</h2>

            <li>{movie}</li>
            <li>{realeaseYear}</li>
            <li>{duration}</li>
            <li>{hero}</li>
            <button><a href={url}>Watch Trailor</a></button>
            <button><a href={url1}>Check out song</a></button>
        </ul>
    )
}
export default List;