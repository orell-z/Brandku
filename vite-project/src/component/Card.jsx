const Card = ({title, description}) => {
    return(
        <article className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden p-5 ">
            <h3 className="font-bold">{ title }</h3>
            <p>{ description }</p>
        </article>
    )
}
export default Card;