import stringToNumber from "./stringToNumber";

function extractTradesData(array) {
   // Оставляю только исполненные и неисполненные сделки на конец отчетного периода. Ищу по номеру операции
   const trades = array.filter(obj => obj[""] > 100000000)
   return trades.map(obj => {
      return (
         {
            number: stringToNumber(obj[""]),
            // "1.1 Информация о совершенных и исполненных сделках на конец отчетного периода" из отчета - первое значение,
            // "1.2 Информация о неисполненных сделках на конец отчетного периода" - второе
            date: `${obj._7 || obj._9}`,
            ticker: `${obj._31 || obj._33}`,
            priceLot: stringToNumber(obj._44 || obj._46),
            brokerCommission: stringToNumber(obj._80 || obj._82),
            clearingCommission: stringToNumber(obj._89 || obj._91),
            currency: `${obj._48 || obj._50}`,
            lots: stringToNumber(obj._53 || obj._55),
            amount: stringToNumber(obj._56 || obj._58)
         }
      )
   })
}

// Пока думаю на тем, чтобы достать из екселя данные по пополнению счета
// const arr666 = arrFromExcelToJson.filter(obj => obj._51 === "Пополнение счета")
// const arr777 = arr666.map(obj => {
//    return (
//       {
//          date: obj[""],
//          time: obj._13,
//          amount: obj._73
//       }
//    )
// })
// console.log(arr666)
// console.log(arr777)

export default extractTradesData;