import Container from "@/components/layout/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ProductTable from "@/utils/ProductTable/ProductTable";
import {
  Controller,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import {
  useAddProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/product.api";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HelmetElement from "@/utils/Helmet/HelmetElement";
import LoadingAni from "@/utils/LoadingAni/LoadingAni";
import { brands, categories } from "@/constatnt/constant";

const ManageProducts = () => {


  const rating = [
    { star: "1" },
    { star: "2" },
    { star: "3" },
    { star: "4" },
    { star: "5" },
  ];

  const methods = useForm();

  const [addProduct] = useAddProductMutation();

  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");

    try {

      if (!data.image[0]) {
        toast.error("Please provide product image", {
          id: toastId,
          duration: 3000,
        });
      }
      const imgFile = data.image[0];

      const imgData = new FormData();
      imgData.append("image", imgFile);
      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        imgData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (imgRes?.data?.success) {
        const product = {
          name: data.name,
          description: data.description,
          category: data.category,
          brand: data.brand,
          stockQuantity: parseInt(data.stockQuantity),
          rating: parseInt(data.rating),
          price: parseFloat(data.price),
          image: imgRes.data.data.url,
        };

        const result = await addProduct(product).unwrap();
        toast.success(`${result.message}`, {
          id: toastId,
          duration: 3000,
        });
        navigate(`/product/${result.data._id}`);
      }
    } catch (error) {
      toast.error(`Something went wrong`, {
        id: toastId,
        duration: 3000,
      });
    }
  };

  const { data, isLoading } = useGetAllProductsQuery(undefined, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: true,
  });
  return (
    <Container>
      <HelmetElement text="Manage Products" />
      <Tabs defaultValue="add" className="py-5 w-full">
        <div className="flex justify-center items-center">
          <TabsList className="bg-zinc-300">
            <TabsTrigger value="add">Add Product</TabsTrigger>
            <TabsTrigger value="update">Update Products</TabsTrigger>
            <TabsTrigger value="delete">Delete Products</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="add">
          <div className="max-w-96 mx-auto">
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">
                    Name<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Enter Product Name"
                    {...methods.register("name")}
                    type="text"
                    id="name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-lg">
                    Description<span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    {...methods.register("description")}
                    placeholder="Enter Product Description"
                    id="description"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-lg">
                    Category<span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    name="category"
                    control={methods.control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Product Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((item, index) => (
                            <SelectItem key={index} value={item.text}>
                              {item.text}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand" className="text-lg">
                    Brand<span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    name="brand"
                    control={methods.control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder=" Select Product Brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map((item, index) => (
                            <SelectItem key={index} value={item.name}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="stock-quantity" className="text-lg">
                    Stock quantity<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    {...methods.register("stockQuantity")}
                    placeholder="Enter Product Quantity"
                    type="number"
                    min={0}
                    id="stock-quantity"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating" className="text-lg">
                    Rating<span className="text-red-500">*</span>
                  </Label>
                  <Controller
                    name="rating"
                    control={methods.control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Product Rating" />
                        </SelectTrigger>
                        <SelectContent>
                          {rating.map((item, index) => (
                            <SelectItem key={index} value={item.star}>
                              {item.star} Star
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="price" className="text-lg">
                    Price<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    {...methods.register("price")}
                    placeholder="Enter Product Price"
                    type="number"
                    min={1}
                    id="price"
                  />
                </div>

                <div>
                  <Label className="text-lg" htmlFor="image">
                    Image<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    {...methods.register("image")}
                    id="image"
                    type="file"
                  />
                </div>


                <Button className="bg-baseColor text-black w-full hover:bg-lime-600">
                  Add Product
                </Button>
              </form>
            </FormProvider>
          </div>
        </TabsContent>
        <TabsContent value="update">
          {isLoading ? (
            <LoadingAni />
          ) : !data?.data.length ? (
            <div className="flex justify-center items-center flex-col">
              <img src="https://i.ibb.co/9qzbtQF/11329060.png" />
              <h1 className="text-3xl font-semibold text-center">
                Sorry there is no product available
              </h1>
            </div>
          ) : (
            <ProductTable products={data?.data} table="Update" />
          )}
        </TabsContent>
        <TabsContent value="delete">
          {isLoading ? (
            <LoadingAni />
          ) : !data?.data.length ? (
            <div className="flex justify-center items-center flex-col">
              <img src="https://i.ibb.co/9qzbtQF/11329060.png" />
              <h1 className="text-3xl font-semibold text-center">
                Sorry there is no product available
              </h1>
            </div>
          ) : (
            <ProductTable products={data?.data} table="Delete" />
          )}
        </TabsContent>
      </Tabs>
    </Container>
  );
};
export default ManageProducts;
