import { Link } from 'react-router-dom';

const SingleCard = ({ product }) => {
  return (
    <div className="card col-4 mt-5" style={{ minWidth: "300px", border: "none" }}>
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <span
          style={{
            position: "absolute",
            left: "20px",
            top: "10px",
            backgroundcolor: "rgb(51, 48, 29)",
            padding: "3px",
            color: "white",
          }}
        >
          Featured
        </span>
        <img
          src={product.image}
          className="card-img-top"
          style={{ maxWidth: "400px", height: "300px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body text-center">
          <h5
            className="card-title fs-3"
            style={{
              fontFamily: "Varela Round",
              textTransform: "uppercase",
              color: "#110d0dc9",
            }}
          >
            {product.name}
          </h5>
          <p
            className="card-title"
            style={{ fontFamily: "Varela Round", color: "#110d0dc9" }}
          >
            Rs {product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleCard;
