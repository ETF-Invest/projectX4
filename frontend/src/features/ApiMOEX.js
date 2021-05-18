import axios from "axios";

// Над этим ещё подумать надо и сделать рефакторинг
class Fetch2 extends React.Component {
   constructor(props) {
      super(props);

      this.arr = ["FXDE", "FXUS", "VTBE", "FXDM"];
      this.state = {data: []};
   }

   componentDidMount() {
      this.arr.forEach((item, index) => {
         axios
            .get(`https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQTF/securities/${item}.json?iss.meta=off&iss.only=marketdata&marketdata.columns=LAST`)
            .then((response) => {
               this.setState((prevState) => ({
                     data: [...prevState.data, {name: item, price: response.data.marketdata.data[0][0]}]
                  })
               )
            })
            .catch(function (error) {
               console.log(error.toJSON());
            });
      })
   }

   render() {
   }
}