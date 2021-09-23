import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="productPage">
      {data.map((el) => {
        return (
          <div>
            {isLoading ? (
              <h4>...Loading</h4>
            ) : (
              <div className="products">
                <div>
                  <img className="productImage" src={el.image} alt="" />
                </div>
                <div>{el.title}</div>
                <div>{el.category}</div>
                <div>{el.price}</div>
                <Link to={`products/${el.id}`}>More Details</Link>
              </div>
            )}
          </div>
        );
      })}
        
        
    </div>
  );
};
