const Card = ({data}) => {
    return (
        <div className=" card">
            <img src={data.image} alt="" />
            <div className="card-body">
                <h4 className="card-title">{data.title}</h4>
                <p>Price : ${data.price}</p>
                <button className=" btn btn-success">add to card</button>
            </div>
        </div>
    )
}

export default Card;