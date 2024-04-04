import React from "react";
import "./products.css";
import Model from '../../app/(components)/model/Model'
import Button from "../(components)/button/Button";
import { productModel } from "../model/products";

const fetchProducts = async () => {
  try {
    const data = await productModel.find();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("Erorr", error);
  }
}


export default async function Products() {
  const data = await fetchProducts();
  return (
    <div className="table-container">
    <Model title="create Products"/>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>product Title</th>
            <th>product discription</th>
            <th>product price</th>
            <th>updata</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.price}</td>
              <td>
                <Button title="Delete"/>
              </td>
              <td>
                <Model isUpdate={true} title="Update" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
