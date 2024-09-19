import Product from "../interface/product";

type Props ={
    listProduct: Product[]
}

function ListProduct(props:Props){
    // console.log(props);
    
    return(
        <>
            {
                props.listProduct?.map((item:Product,index:number)=>{
                    return (
                        <div key={index}>
                            <h1 className="heading">{item.name}</h1>
                            <p>{item.description}</p>
                            <img style={{width: '300px'}} src={item.image} alt="" />
                            <h3>{item.price} vnđ</h3>
                            <h4>{ item.sale ? "Đang sale" : "Không sale" }</h4>
                        </div>
                    )
                    
                })
            }
        </>
    )
}

export default ListProduct;