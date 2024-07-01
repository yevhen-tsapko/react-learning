import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { SearchBox } from "../components/SearchBox";
import { getProducts } from "../fakeAPI";

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const updateQueryString = (name) => {
    const nextParam = name !== "" ? { name } : {};
    setSearchParams(nextParam);
  };
  const visualProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(productName.toLocaleLowerCase())
  );
  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visualProducts} />
    </main>
  );
};
export default Products;
