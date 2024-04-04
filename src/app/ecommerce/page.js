// "use client";

// import { useEffect, useState } from "react";

// export default function Ecommerce() {
//   const [product, setProduct] = useState([]);
//   const [loader, setLoader] = useState(true);

//   const fetchProduct = async () => {
//     let product = await fetch("https://fakestoreapi.com/products");
//     product = await product.json();
//     setProduct(product);
//     console.log("product", product);
//     setLoader(false);
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);
//   return (
//     <div>
//       {/* <button onClick={fetchProduct}>fetch product</button> */}
//       <h1>Products</h1>

//       {product.length ? (
//         <table>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Description</th>
//             <th>Image</th>
//           </tr>
//           {product.map((item) => {
//             return (
//               <tr>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.price}</td>
//                 <td>{item.category}</td>
//                 <td>{item.description.slice(0, 15)}...</td>
//                 <td>
//                   <img src={item.image} alt="" className="h-24 w-24" />
//                 </td>
//               </tr>
//             );
//           })}
//           <tr>{}</tr>
//         </table>
//       ) : loader ? (
//         <div className="loader justify-items-center"></div>
//       ) : (
//         <h1 className="flex justify-center font-bold">No Products</h1>
//       )}
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

const fetchProduct = async () => {
  let products = await fetch("https://fakestoreapi.com/products");
  products = await products.json();
  console.log("products", products);
  return products;
};
export default async function Ecommerce() {
  const products = await fetchProduct();
  const loader = false;

  return (
    <div>
      {/* <button onClick={fetchProduct}>fetch product</button> */}
      <h1>Products</h1>

      {products.length ? (
        <table>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
          {products.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} alt="" className="h-24 w-24" />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.description.slice(0, 15)}...</td>
              </tr>
            );
          })}
          <tr>{}</tr>
        </table>
      ) : loader ? (
        <div className="loader justify-items-center"></div>
      ) : (
        <h1 className="flex justify-center font-bold">No Products</h1>
      )}
    </div>
  );
}
