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

type TTableContent = {
  table: string;
};

const ProductTable = ({ table }: TTableContent) => {
  return (
    <Table className="py-5">
      <TableCaption>{table} Your Products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock quantity</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Tennis Ball</TableCell>
          <TableCell>Nike</TableCell>
          <TableCell>Tennis</TableCell>
          <TableCell>50</TableCell>
          <TableCell>4</TableCell>
          <TableCell>
            <img
              src="https://i.ibb.co/VTbDDhP/the-ball-4388360-640.jpg"
              className="w-20 h-20 object-cover rounded-full"
            />
          </TableCell>
          <TableCell>$50</TableCell>
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
      </TableBody>
    </Table>
  );
};
export default ProductTable;
