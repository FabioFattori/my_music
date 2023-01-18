import React, { useState } from "react";
import { storage } from "../base";
import { ref, uploadBytes } from "firebase/storage";

import { FileUploader } from "react-drag-drop-files";

function SelectFile() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    const fileRef = ref(storage, file.name);

    uploadBytes(fileRef, file).then(() => {
      console.log("Uploaded file!");
    });
  };

  const fileTypes = ["MP3"];

  return (
    <div className="FileUploader">
      <FileUploader className="DnD" handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  );
}

export default SelectFile;
