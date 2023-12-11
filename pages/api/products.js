import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    }
    res.json(await Product.find());
  }

  if (method === "POST") {
    const {
      title,
      description,
      price,
      images,
      category,
      properties,
      discount,
    } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
      images,
      category,
      properties,
      discount,
    });
    res.json(productDoc);
  }

  if (method === "PUT") {
    const {
      title,
      description,
      price,
      images,
      category,
      properties,
      discount,
      _id,
    } = req.body;
    await Product.updateOne(
      { _id },
      {
        title,
        description,
        price,
        images,
        category,
        properties,
        discount,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query.id) {
      await Product.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
}
