import useFetch from "../useFetch";

const Home = () => {
  const { data: products } = useFetch("http://127.0.0.1:8000/api/product");
  return (
   {products}
  );
};
export default Home;
