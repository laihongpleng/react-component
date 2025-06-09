const Category = ({data}) =>  {
    return (
        <div className=" row p-0 m-0 my-5">

            {
                data && data.map((value,index) => {
                    return (
                        <div key={index} className="col-lg-6 col-md-6">
                            <div className="card">
                              <div className="card-body">
                                 <h2 className=" text-center">{value.name || "Category"}</h2>
                              </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Category;