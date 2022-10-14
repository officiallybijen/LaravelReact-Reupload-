import SingleCard from "./singleCard";
import useFetch from "../useFetch";

const AllCard = () => {
  const { data: products } = useFetch("http://127.0.0.1:8000/api/product");

    return ( 
        <div className="row container-fluid justify-content-center align-items-center mt-5">
        {products && products.map((product)=>{
            return <SingleCard key={product.id} product={product}/>
        })}
        </div>
     );
}
 
// const mapStateToProps=state=>{
//     return {
//         products: state.shop.products
//     }
// }

// export default connect(mapStateToProps)(AllCard);
export default AllCard;