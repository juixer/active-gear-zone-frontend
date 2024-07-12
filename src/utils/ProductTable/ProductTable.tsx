import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProduct } from "../ProductCard/ProductCard";
import { useDeleteProductMutation } from "@/redux/features/product/product.api";
import Swal from "sweetalert2";
import UpdateModal from "@/components/updateModal/UpdateModal";

type TTableContent = {
  table: string;
  products: TProduct[];
};

const ProductTable = ({ table, products }: TTableContent) => {
  // DELETE COUNT MUTATION
  const [deleteProduct] = useDeleteProductMutation();

  // HANDLING PRODUCT DELETE
  const handleProductDelete = async (productId: string) => {

    // SWEET-ALERT CONFIRMATION ALERT
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteProduct(productId).unwrap();
        console.log(res);
        Swal.fire({
          title: "Deleted!",
          text: `${res.message}`,
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  };

  return (
    // REUSEABLE TABLE FOR UPDATE AND DELETE PRODUCT
    <Table className="py-5">
      <TableCaption>{table} your products</TableCaption>
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
        {products.map((product: TProduct) => (
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
                 <UpdateModal product={product}/>
                </>
              )}
              {table === "Delete" && (
                <>
                  <Button
                    onClick={() => handleProductDelete(product._id)}
                    className="bg-red-500 text-white hover:bg-red-400"
                  >
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
