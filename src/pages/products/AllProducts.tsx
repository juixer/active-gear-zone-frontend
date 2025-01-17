import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaStar } from "react-icons/fa6";
import ProductCard, { TProduct } from "@/utils/ProductCard/ProductCard";
import { useGetProductsQuery } from "@/redux/features/product/product.api";
import {
  Controller,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HelmetElement from "@/utils/Helmet/HelmetElement";
import LoadingAni from "@/utils/LoadingAni/LoadingAni";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { brands, categoriesForFilter } from "@/constatnt/constant";

const AllProducts = () => {
  // USE STATE FOR PRODUCT QUERY
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");

  const [searchParams] = useSearchParams();
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);

  // COLLECTING CATEGORY FROM REACT ROUTE SEARCHPARAMS
  const categoryParams = searchParams.get("category");
  useEffect(() => {
    // REACT ROUTE SEARCHPARAMS CATEGORY SET IT TO CATEGORY
    if (categoryParams) {
      setCategory(categoryParams);
    }
  }, [categoryParams]);

  // METHODS FROM REACT HOOK FORM
  const methods = useForm();
  // QUERY FOR FILTERING PRODUCT
  const query = {
    searchTerm,
    sort,
    category,
    brand,
    rating,
    page,
    limit: 9,
  };

  // HANDLING FILTER SUBMIT
  const onSubmit = (data: FieldValues) => {
    const sort = data.sort;
    const category = data.category;
    const brand = data.brand;
    const rating = data.rating;
    setSearchTerm(searchTerm);
    setSort(sort);
    if (category === " ") {
      setCategory("");
    } else {
      setCategory(category);
    }
    setBrand(brand);
    setRating(rating);
  };

  // COLLECTING PRODUCT FROM DB
  const { isLoading, data, error } = useGetProductsQuery(query, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: true,
  });

  useEffect(() => {
    // GETTING TOTAL PAGE FOR PAGINATION
    if (data) {
      const totalData = data?.data?.totalCount;
      const perPage = Math.ceil(totalData / 9);
      setTotalPage(perPage);
    }
  }, [data]);

  // LOOPING TOTAL BUTTON
  const totalButtons = [];
  for (let i = 0; i < totalPage; i++) {
    totalButtons.push(
      <PaginationLink key={i} onClick={() => setPage(i)}>
        <Button className="bg-baseColor text-black hover:bg-lime-600">
          {i + 1}
        </Button>
      </PaginationLink>
    );
  }

  return (
    <Container>
      <HelmetElement text="All Products" />
      <div className="py-5">
        <div className="py-5 flex justify-center items-center gap-3"></div>
        <div className="flex flex-col lg:flex-row gap-5 py-5">
          <div className="lg:w-1/4  p-5">
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="flex  gap-5 w-full justify-center items-center">
                  <Input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search product by name"
                  />
                </div>
                <div>
                  <Controller
                    name="sort"
                    control={methods.control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sort" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="price">
                            Price (low to high)
                          </SelectItem>
                          <SelectItem value="-price">
                            Price (high to low)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div>
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
                          {categoriesForFilter.map((item, index) => (
                            <SelectItem
                              key={index}
                              value={
                                item.text === "All Categories" ? " " : item.text
                              }
                            >
                              {item.text}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="brand"
                    defaultValue=""
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
                  <Controller
                    name="rating"
                    defaultValue=""
                    control={methods.control}
                    render={({ field }) => (
                      <RadioGroup
                        className="flex justify-center gap-2"
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1" id="1" />
                          <Label
                            htmlFor="1"
                            className="flex items-center gap-1"
                          >
                            1 <FaStar className="text-orange-400" />
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="2" id="2" />
                          <Label
                            htmlFor="2"
                            className="flex items-center gap-1"
                          >
                            2 <FaStar className="text-orange-400" />
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3" id="3" />
                          <Label
                            htmlFor="3"
                            className="flex items-center gap-1"
                          >
                            3 <FaStar className="text-orange-400" />
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="4" id="4" />
                          <Label
                            htmlFor="4"
                            className="flex items-center gap-1"
                          >
                            4 <FaStar className="text-orange-400" />
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5" id="5" />
                          <Label
                            htmlFor="5"
                            className="flex items-center gap-1"
                          >
                            5 <FaStar className="text-orange-400" />
                          </Label>
                        </div>
                      </RadioGroup>
                    )}
                  />
                </div>
                <div className="flex">
                  <Button className="bg-baseColor hover:bg-lime-600 text-black w-full">
                    Filter Products
                  </Button>
                </div>
              </form>
              <div className="py-3">
                <Button
                  onClick={() => location.reload()}
                  className="bg-red-500 hover:bg-red-400 w-full"
                >
                  Clear Filter
                </Button>
              </div>
            </FormProvider>
          </div>

          <div className="lg:w-3/4 p-5">
            {isLoading ? (
              <LoadingAni />
            ) : error ? (
              <div className="flex justify-center items-center flex-col">
                <img src="https://i.ibb.co/9qzbtQF/11329060.png" />
                <h1 className="text-3xl font-semibold text-center">
                  Sorry {category} product is not available
                </h1>
              </div>
            ) : (
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data?.data?.result.map((product: TProduct) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}

            {data?.data?.result && (
              <div className="flex justify-center gap-5 items-center mt-10">
                <Pagination>
                  <PaginationContent className="space-x-3">
                    <PaginationItem className="">
                      <Button
                        className="bg-baseColor text-black hover:bg-lime-600"
                        disabled={page === 0}
                        onClick={() => setPage(page - 1)}
                      >
                        Prev
                      </Button>
                    </PaginationItem>
                    <PaginationItem className="space-x-3">
                      {totalButtons}
                    </PaginationItem>
                    <PaginationItem className="">
                      <Button
                        className="bg-baseColor text-black hover:bg-lime-600"
                        disabled={page === totalPage - 1}
                        onClick={() => setPage(page + 1)}
                      >
                        Next
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AllProducts;
