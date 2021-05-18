import {useState} from "react";
import * as XLSX from "xlsx";

// Источник: https://www.youtube.com/watch?v=h33eakwu7oo&t=513s
const excelToJson = (file) => {
   // const [items, setItems] = useState([])

   const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(file)

      fileReader.onload = (e) => {
         const workBook = XLSX.read(e.target.result, {type: "buffer"})
         const workSheet = workBook.Sheets[workBook.SheetNames[0]]
         const result = XLSX.utils.sheet_to_json(workSheet)
         resolve(result)
      }

      fileReader.onerror = (error) => {
         reject(error)
      }
   })

   promise.then((data) => {
      // setItems(data)
      console.log(data)
   })
}

export default excelToJson;