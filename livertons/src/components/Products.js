import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons-1 mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2">Jewelery's</button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3">
              <div className="card p-4 key={product.id}">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                  <p className="card-text">${product.price}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display">Latest Products</h1>
          </div>
          <hr />
        </div>
      </div>
      <div className="roll">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
