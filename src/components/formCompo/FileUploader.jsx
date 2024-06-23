import React, { useState, useEffect, useId } from "react";

const FileUploader = React.forwardRef(function ({ inputId, label, imageSecClassName, classname, ...props }, ref) {
  const [fileUrl, setFileUrl] = useState([])
  // const [selectedFile, setSelectedFile] = useState(null)

  function getUrl(e) {
    try {
      const target = e.target.files

      if (target.length == 1) {
        const url = URL.createObjectURL(target[0])
        setFileUrl(url)
      } else {
        const arrays = Object.values(target)
        // console.log(target);
        // console.log(arrays);

        // let urls;
        const urls = arrays.map((items) => {
          // console.log(items);
          const url = URL.createObjectURL(items).replace("blob:", "")
          return url
        })
        setFileUrl(urls)
      }
    } catch (error) {
      console.log("there", error);
    }
  }

  // useEffect(() => {
  //   console.log(fileUrl);
  // }, [fileUrl])


  return (
    <div className="flex flex-col gap-4">
      <div>

        {label && <div>{label}</div>}
        <div className={imageSecClassName}>
          {
            Array.isArray(fileUrl) && fileUrl.length > 1 ? fileUrl.map((values, index) => {
              const url = "blob:" + values
              return <div key={index} className="mx-2">
                <img className={classname} src={url} alt="image" />

              </div>
            })
              : <img className={classname} src={fileUrl} alt="image" />
          }
        </div>

        <input id={inputId} className="hidden" ref={ref} type="file" {...props} onChange={getUrl} />
      </div>

      <div>
        <label htmlFor={inputId} className="mb-2 px-4 py-2 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600">
          Choose File
        </label>
      </div>

    </div>
  )
});

export default FileUploader;
