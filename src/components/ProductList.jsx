import React from 'react'

const ProductList = ({ data }) => {
    return (
        <div className=' row p-0 m-0 my-3'>
            {
                data && data.map((item, index) => {
                    return (
                        <div className=" col-lg-3 col-md-4 mb-3" key={index}>
                            <div className="card">
                                <img src={item.image || ''} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name || 'Default Name'}</h4>
                                    <p>Price : ${item.price || 0}</p>
                                    <button className=" btn btn-success">add to card</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;