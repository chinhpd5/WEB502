type PropsType ={
    name: string;
    description: string;
    image: string;
    price: number;
    sale: boolean
}

function ProductItem(props: PropsType){
    console.log(props);
    
    return (
        <>
            <h1 className="heading">{props.name}</h1>
            <p>{props.description}</p>
            <img style={{width: '300px'}} src={props.image} alt="" />
            <h3>{props.price} vnđ</h3>
            <h4>{ props.sale ? "Đang sale" : "Không sale" }</h4>
        </>
    )
}

export default ProductItem;