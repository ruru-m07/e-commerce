import React from 'react'
import Input from '../formCompo/Input'
import FileUploader from '../formCompo/FileUploader'
// import DescEditor from './Editor'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import Select from '../formCompo/Select'
import TextArea from './TextArea'
// import FilePondUploader from '../formCompo/FilePondUploader'

function AddProducts() {

  const { handleSubmit, register, control, getValues } = useForm()

  function ProductInfo(data) {
    console.log(data);
  }

  return (
    <form className='p-4 flex flex-col gap-2' onSubmit={handleSubmit(ProductInfo)}>

      <div className='flex w-[100%] gap-4'>
        <div className='w-[50%] flex flex-col gap-3 border-[1px] p-2 rounded-lg'>
          <div>
            <Input
              type="text"
              label="Product Name"
              classname="border-[1px] outline-none rounded-[4px] px-[6px] h-[2rem]"
              {...register("productName", { required: true })}
            />

            <TextArea
              label="Description"
              className='resize-none border-[1px] outline-none rounded-[4px] py-2 px-[6px]'
              {...register("desc", {
                required: true,
              })}
            />
          </div>
        </div>

        <div>
          <div className='border-[1px] p-2 w-[37rem] rounded-lg'>
            <Select
              label="Category"
              classname="border-[1px] outline-none rounded-[4px] w-full px-[6px] h-[2rem]"
              options={[
                { id: 1, catogery: "BACKPACK" },
                { id: 2, catogery: "WEEKEND BAG" },
                { id: 3, catogery: "TOTE BAG" },
                { id: 4, catogery: "BRIEFCASE" },
                { id: 5, catogery: "GYM BAG" },
              ]}

              {...register("category", {
                required: true,
              })}
            />
          </div>

          <div className='flex gap-2'>
            <div>
              <FileUploader
                // classname="w-[18rem]"
                inputId="mainId"
                imageSecClassName="flex justify-center items-center border-2 border-spacing-1 w-[12rem] h-[10rem] p-2"
                label="Main image"
                multiple={false}
                {...register("MainImage")}
              />
            </div>

            <div>
              <FileUploader
                classname="w-[5rem] h-[5rem]"
                inputId="subId"
                imageSecClassName="flex justify-center items-center border-2 border-spacing-1 w-[25rem] h-[10rem] p-2"
                label="Sub images"
                multiple={true}
                {...register("SubImages")}
              />
            </div>
          </div>

        </div>

      </div>

      <div className='w-[50%] flex flex-col gap-3 border-[1px] p-2 rounded-lg'>
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

      <Button
        type="submit"
        text="submit"
      />

    </form>
  )
}

export default AddProducts
