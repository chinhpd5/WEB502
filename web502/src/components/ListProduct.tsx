import IProduct from "../interface/product";

type Props = {
  listProduct: IProduct[];
};

function ListProduct(props: Props) {
  console.log(props);

  return (
    <div className="container">
        <div className="row">
            {props.listProduct?.map((item, index) => {
                return (
                <div key={item.id} className="col-3 mb-3">
                    <div className="card" style={{ width: "18rem" }}>
                    <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title text-1-lines">{item.title}</h5>
                        <p className="card-text text-2-lines">
                            {item.description}
                        </p>
                        <h5 className="card-text text-center">
                            {item.price} vnđ
                        </h5>
                        <div className="d-flex justify-content-around">
                            <a href="#" className="btn btn-primary">
                                Mua ngay
                            </a>
                            <a href="#" className="btn btn-outline-success">
                                Add cart
                            </a>
                        </div>
                        
                    </div>
                    </div>
                </div>
                );
            })}
        </div>
    </div>
    
  );
}

export default ListProduct;
