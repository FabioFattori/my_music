import React from 'react'
import {storage} from "../base"
import { ref ,uploadBytes } from "firebase/storage";


function SelectFile() {
    const onChangeFile=(e)=>{
        const fSelected=e.target.files[0];

        if(fSelected.type==="audio/mpeg"){
          const fileRef = ref(storage, fSelected.name);
  
          uploadBytes(fileRef, fSelected).then(() => {
              console.log('Uploaded file!');
            });
        }
        
            
            
    }

  return (
    <div>
        <input type="file" onChange={onChangeFile} />
    </div>
  )
}

export default SelectFile