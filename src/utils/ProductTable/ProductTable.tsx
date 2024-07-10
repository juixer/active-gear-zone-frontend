import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProduct } from "../ProductCard/ProductCard";

type TTableContent = {
  table: string;
  product: TProduct[];
};

const ProductTable = ({ table, products }: TTableContent) => {
  return (
    <Table className="py-5">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock quantity</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Available</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product._id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.stockQuantity}</TableCell>
            <TableCell>{product.rating}</TableCell>
            <TableCell>
              <img
                src={product.image}
                className="w-20 h-20 object-cover rounded-xl"
              />
            </TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.isAvailable ? "yes" : "No"}</TableCell>
            <TableCell className="text-right">
              {table === "Update" && (
                <>
                  <Button className="bg-baseColor text-black hover:bg-lime-600">
                    Update
                  </Button>
                </>
              )}
              {table === "Delete" && (
                <>
                  <Button className="bg-red-500 text-white hover:bg-red-400">
                    Delete
                  </Button>
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ProductTable;
