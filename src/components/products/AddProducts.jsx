import React, { useState } from "react";
import Input from "../formCompo/Input";
import FileUploader from "../formCompo/FileUploader";
import { useForm } from "react-hook-form";
import Button from "../formCompo/Button";
import Select from "../formCompo/Select";
import TextArea from "./TextArea";
import { createProducts, getAllProducts } from "../../FetchFunc/fetchEcommerceApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { products } from "../../store/productSlice";

function AddProducts() {
  const { handleSubmit, register, control, setValue } = useForm();
  const [mainImage, setMainImage] = useState(null);
  const [subImages, setSubImages] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function ProductInfo(data) {

    data.mainImage = mainImage;
    data.subImages = subImages;
    
    if (data) {
      const productData = await createProducts(data)
      if (productData) {
        const getProducts = await getAllProducts()
        if (getProducts) {
          dispatch(products(getProducts.data.data.products))
          navigate("/")
        }
      }
    }
  }

  function handleMainImageChange(e) {
    setMainImage(e.target.files[0]);
  }

  function handleSubImagesChange(e) {
    setSubImages(Array.from(e.target.files));
  }

  return (
    <form
      className="p-4 flex flex-col gap-2"
      onSubmit={handleSubmit(ProductInfo)}
    >
      <div className="flex w-[100%] gap-4">
        <div className="w-[50%] flex flex-col gap-3 border-[1px] p-2 rounded-lg">
          <div>
            <Input
              type="text"
              label="Product Name"
              classname="border-[1px] outline-none rounded-[4px] px-[6px] h-[2rem]"
              {...register("productName", { required: true })}
            />
            <TextArea
              label="Description"
              className="resize-none border-[1px] outline-none rounded-[4px] py-2 px-[6px]"
              {...register("desc", { required: true })}
            />
          </div>
        </div>
        <div>
          <div className="border-[1px] p-2 w-[37rem] rounded-lg">
            <Select
              label="Category"
              classname="border-[1px] outline-none rounded-[4px] w-full px-[6px] h-[2rem]"
              options={[
                { id: "66792be56e9daa6ca03b5ab1", catogery: "Backpack" },
                { id: "66792bdd6e9daa6ca03b5aad", catogery: "Clutch" },
                { id: "66792bd56e9daa6ca03b5aa9", catogery: "Tote bag" },
                { id: "66792bc46e9daa6ca03b5aa5", catogery: "Briefcase" },
                { id: "66792ba36e9daa6ca03b5aa1", catogery: "GYM bag" },
              ]}
              {...register("category", { required: true })}
            />
          </div>
          <div className="flex gap-2">
            <div>
              <FileUploader
                inputId="mainId"
                // classname="h-[5rem]"
                imageSecClassName="flex justify-center items-center border-2 border-dashed w-[12rem] h-[10rem] p-2"
                label="Main image"
                multiple={false}
                onChange={handleMainImageChange}
              />
            </div>
            <div>
              <FileUploader
                classname="w-[5rem] h-[5rem]"
                inputId="subId"
                type="file"
                imageSecClassName="flex justify-center items-center border-2 border-dashed w-[25rem] h-[10rem] p-2"
                label="Sub images"
                multiple={true}
                max="4"
                onChange={handleSubImagesChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-3 border-[1px] p-2 rounded-lg">
        <Input
          type="text"
          label="Price"
          classname="border-[1px] outline-none rounded-[4px] px-[6px] h-[2rem]"
          {...register("price", { required: true })}
        />
        <Input
          type="number"
          label="quantity"
          classname="border-[1px] outline-none rounded-[4px] px-[6px] h-[2rem]"
          defaultValue="1"
          min="1"
          {...register("quantity", { required: true })}
        />
      </div>
      <Button type="submit" text="submit" />
    </form>
  );
}

export default AddProducts;
