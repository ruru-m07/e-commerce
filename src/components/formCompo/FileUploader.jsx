import React, { useState } from "react";

const FileUploader = React.forwardRef(
  (
    { inputId, label, imageSecClassName, classname, onChange, ...props },
    ref
  ) => {
    const [fileUrl, setFileUrl] = useState([]);

    function getUrl(e) {
      const target = e.target.files;
      onChange(e); // Call the parent onChange to set file data in the parent state

      if (target.length === 1) {
        const url = URL.createObjectURL(target[0]);
        setFileUrl([url]);
      } else {
        const urls = Array.from(target).map((file) =>
          URL.createObjectURL(file)
        );
        setFileUrl(urls);
      }
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="mt-4">
          {label && <div>{label}</div>}
          <div className={imageSecClassName}>
            {fileUrl.length > 1
              ? fileUrl.map((url, index) => (
                <div key={index} className="mx-2">
                  <img className={classname} src={url} alt="image" />
                </div>
              ))
              : fileUrl[0] && (
                <img className={classname} src={fileUrl[0]} alt="image" />
              )}
          </div>
        </div>
        <input
          id={inputId}
          className="hidden"
          ref={ref}
          type="file"
          {...props}
          onChange={getUrl}
        />
        <label
          htmlFor={inputId}
          className="mb-2 px-4 py-2 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600"
        >
          Choose File
        </label>
      </div>
    );
  }
);

export default FileUploader;
