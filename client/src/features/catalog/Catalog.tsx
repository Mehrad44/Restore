import { Fragment } from "react/jsx-runtime";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import type { Product } from "../../app/models/product";



export default function Catalog() {
  const[products , setProducts] = useState<Product[]>([]);


  
  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data));


    
  }, []) 



  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  )
}