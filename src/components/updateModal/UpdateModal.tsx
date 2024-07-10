import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  Controller,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { TCategories } from "../CategoryCarousel/CategoryCarouSel";
import { Label } from "../ui/label";
import { TProduct } from "@/utils/ProductCard/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import { useUpdateProductMutation } from "@/redux/features/product/product.api";
import axios from "axios";

const UpdateModal = ({ product }: { product: TProduct }) => {
  const {
    brand,
    category,
    image,
    name,
    price,
    rating: productRating,
    stockQuantity,
    description,
  } = product;

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
  const [updateProduct] = useUpdateProductMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");

    try {
      let updateProductInfo = {};

      updateProductInfo = {
        name: data.name,
        description: data.description,
        category: data.category,
        brand: data.brand,
        stockQuantity: parseInt(data.stockQuantity),
        rating: parseInt(data.rating),
        price: parseFloat(data.price),
      };

      if (data.image[0]) {
        const imgFile = data.image[0];

        const imgData = new FormData();
        imgData.append("image", imgFile);
        const imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMGBB_API_KEY}`,
          imgData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )

        updateProductInfo = {
          name: data.name,
          description: data.description,
          category: data.category,
          brand: data.brand,
          stockQuantity: parseInt(data.stockQuantity),
          rating: parseInt(data.rating),
          price: parseFloat(data.price),
          image: imgRes.data.data.url,
        };
      }

      const updateData = {
        productId: product._id,
        updateInfo: updateProductInfo,
      };

      const result = await updateProduct(updateData).unwrap();
      toast.success(`${result.message}`, {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      toast.error(`Something went wrong`, {
        id: toastId,
        duration: 3000,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <p className="bg-baseColor text-black hover:bg-lime-600 p-3 rounded-xl">
          Update
        </p>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-[75%] ">
        <DialogHeader>
          <DialogTitle className="text-center">
            Update your information
          </DialogTitle>
          <DialogDescription className="flex justify-center items-center">
            <img src={image} className="w-20 h-20 object-cover rounded-full" />
          </DialogDescription>
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
                  defaultValue={name}
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
                  defaultValue={description}
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
                  defaultValue={category}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
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
                  defaultValue={brand}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
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
                  Stock quantity<span className="text-red-500">*</span>
                </Label>
                <Input
                  {...methods.register("stockQuantity")}
                  defaultValue={stockQuantity}
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
                  defaultValue={productRating?.toString()}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder=" Select Product Brand" />
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
                  defaultValue={price}
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
                <Input {...methods.register("image")} id="image" type="file" />
              </div>

              <Button className="bg-baseColor text-black w-full hover:bg-lime-600">
                Update Product
              </Button>
            </form>
          </FormProvider>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default UpdateModal;
