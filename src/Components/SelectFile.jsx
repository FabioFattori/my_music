import React, { useState,useEffect } from "react";
import { storage } from "../base";
import { ref, uploadBytes } from "firebase/storage";
import { setHeight } from "../Functions/SetHeight";
import { FileUploader } from "react-drag-drop-files";

function SelectFile() {
  const [file, setFile] = useState(null);
  
  const handleChange = (file) => {
    setFile(file);
    setTimeout(() => {
      for (let index = 0; index < file.length; index++) {
        const fileRef = ref(storage, file[index].name);

        uploadBytes(fileRef, file[index]).then(() => {
          console.log("Uploaded file!");
        });
      }
    }, 1);
  };

  const fileTypes = ["MP3"];

  useEffect(() => {
    setHeight("/")
  
    
  }, [])
  

  return (
    <div id="file-uploader" className="FileUploader">
      <FileUploader
        multiple
        className="DnD"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
    </div>
  );
}

export default SelectFile;
