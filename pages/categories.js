import Layout from "@/components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";

const Categories = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState("");
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  };
  const saveCategory = (ev) => {
    ev.preventDefault();
    axios.post("/api/categories", { name });
    setName("");
    fetchCategories();
  };
  return (
    <Layout>
      <h1>Categories</h1>
      <label>New category name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          type="text"
          placeholder={"Category name"}
          className="mb-0"
          onChange={(ev) => setName(ev.target.value)}
          value={name}
        />
        <select className="mb-0" value={parentCategory}>
          <option value="0">No parent category</option>
          {categories.length > 0 &&
            categories.map((category) => {
              return <option value={category._id}>{category.name}</option>;
            })}
        </select>
        <button className="btn-primary py-1" type="submit">
          Save
        </button>
      </form>
      <table className="basic mt-4">
        <thead>
          <tr>
            <td>Category name</td>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <tr>
                  <td>{category.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Categories;
