import excelToJson from "../features/excelToJson"

function UploadFile() {
   return (
      <input
         type="file"
         onChange={(e) => {
            excelToJson(e.target.files[0])
         }}
      />
   )
}

export default UploadFile;