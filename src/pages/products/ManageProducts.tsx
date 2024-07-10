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
import { TCategories } from "@/components/CategoryCarousel/CategoryCarouSel";
import { Button } from "@/components/ui/button";
import ProductTable from "@/utils/ProductTable/ProductTable";
import {
  Controller,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { useAddProductMutation } from "@/redux/features/product/product.api";

const ManageProducts = () => {
  const categories: TCategories[] = [
    {
      img: "https://i.ibb.co/CM5PSpd/football.png",
      text: "Football",
    },
    {
      img: "https://i.ibb.co/LrjPhGh/basketball.png",
      text: "Basketball",
    },
    {
      img: "https://i.ibb.co/njsYyQf/tennis.png",
      text: "Tennis",
    },
    {
      img: "https://i.ibb.co/xYqnwsv/runnig-shoe.png",
      text: "Shoes",
    },
    {
      img: "https://i.ibb.co/0mTSw8N/swimming.png",
      text: "Swimming",
    },
    {
      img: "https://i.ibb.co/hDsNwCf/gym.png",
      text: "Gym",
    },
    {
      img: "https://i.ibb.co/zmQDWkZ/boxing.png",
      text: "Boxing",
    },
    {
      img: "https://i.ibb.co/RN0FVDR/cycling.png",
      text: "Cycling",
    },
    {
      img: "https://i.ibb.co/4Zd5YMK/golf.png",
      text: "Golf",
    },
    {
      img: "https://i.ibb.co/RvNv1x4/volleyball.png",
      text: "Volleyball",
    },
  ];
  const sportsGoodsBrands = [
    { name: "Nike" },
    { name: "Adidas" },
    { name: "Puma" },
    { name: "Under Armour" },
    { name: "Reebok" },
    { name: "Asics" },
    { name: "New Balance" },
    { name: "Columbia Sportswear" },
    { name: "The North Face" },
    { name: "Patagonia" },
  ];

  const rating = [
    { star: "1" },
    { star: "2" },
    { star: "3" },
    { star: "4" },
    { star: "5" },
  ];

  const methods = useForm();

  const [addProduct] = useAddProductMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      const imgFile = data.image[0];
      const imgData = new FormData();
      imgData.append("image", imgFile);
      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: "POST",
          body: imgData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const res = await imgRes.json();

      if (res.success) {
        const product = {
          name: data.name,
          description: data.description,
          category: data.category,
          brand: data.brand,
          stockQuantity: parseInt(data.stockQuantity),
          rating: parseInt(data.rating),
          price: parseFloat(data.price),
          image: res.data.url,
        };

        const result = await addProduct(product).unwrap();
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
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
                    Name
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
                    Description
                  </Label>
                  <Textarea
                    {...methods.register("description")}
                    placeholder="Enter Product Description"
                    id="description"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-lg">
                    Category
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
                    Brand
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
                          {sportsGoodsBrands.map((item, index) => (
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
                    Stock quantity
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
                    Rating
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
                    Price
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
                  <Label htmlFor="image">Image</Label>
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
          <ProductTable table="Update" />
        </TabsContent>
        <TabsContent value="delete">
          <ProductTable table="Delete" />
        </TabsContent>
      </Tabs>
    </Container>
  );
};
export default ManageProducts;
