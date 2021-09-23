import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../App.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);

  const getProduct = async () => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (res.data === null) {
          setErr(true);
        } else {
          setErr(false);
          setIsLoading(false);
          setProduct(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {err ? (
        <div>Product Not found</div>
      ) : isLoading ? (
        <div>...Loading</div>
      ) : (
        <div className="prodBox">
          {isLoading ? (
            <h3>...Loading</h3>
          ) : (
            <div className="prodContainer">
              <div>
                <img className="prodImg" src={product.image} alt="" />
              </div>
              <div>Name:{product.title}</div>
              <div>Price:{product.price}Rs/</div>
              <div>Category: {product.category}</div>
              <div>{product.description}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
