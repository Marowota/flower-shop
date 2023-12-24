import Layout from "@/components/Layout";
import ProductForm from "../../components/ProductForm";
import Meta from "@/components/Meta";

const NewProduct = () => {
  return (
    <Layout>
      <Meta title="New product" />
      <h1>New product</h1>
      <ProductForm />
    </Layout>
  );
};

export default NewProduct;
