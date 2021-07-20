import React from "react";
import "./App.css";
// import { getToken, getAccountInfomation } from "./api/GetAccountInfomation";
import { getDataFromSpreadsheet, getGoogleApiAccessTokenByRefreshToken } from "./api/getDataFromSpreadsheet";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  state = {
    stocks: [],
    activities: [],
    positions: { "Individual TFSA": {}, "Individual margin": {} },
    selectedCategory: "",
  };

  componentDidMount = async () => {
    // Get google access_token from a spreadsheet cell
    // const savedTokenSpreadsheetId = "1g88oUCQWbxsOrqNbm_1CfmmOzByZGjLeVTvgp6dkR7Q"
    // var savedToken = await getDataFromSpreadsheet(
    //   token, savedTokenSpreadsheetId, "A1"
    // );

    // If the api call is failed, getting a new access token by refresh token
    var token = await getGoogleApiAccessTokenByRefreshToken();

    // Call activities spreadsheet to get the data
    const activitiesSpreadsheetId = "1su0gzMy04WDCQZM7hZTPITwBNg5onGWnTo_NZWu_F3U";
    var activities = await getDataFromSpreadsheet(token, activitiesSpreadsheetId);

    // [27737857, 52130491].map(accountNum => {
    // 	let stocks = await getAccountInfomation(accountNum, "positions");
    // 	let balance = await getAccountInfomation(accountNum, "balances");
    // 	this.setState({ stocks, balance });
    // })
    var positions = { "Individual TFSA": {}, "Individual margin": {} };
    activities.forEach(([date, symbol, qty, price, accountType]) => {
      if (symbol in positions[accountType]) {
        positions[accountType][symbol] = parseInt(qty) + positions[accountType][symbol];
      } else {
        positions[accountType][symbol] = parseInt(qty);
      }
    });
    console.log(positions);
    console.log(activities);
    this.setState({ activities, positions });
    // TODO Add rowNumber fetch function
  };

  stockPositions = () => (
    <>
      <Table responsive striped bordered hover size="lg">
        <thead>
          <tr>
            {/* <th>时间</th> */}
            <th>名称</th>
            <th>数量</th>
            {/* <th>价格</th> */}
            <th>所属账户</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.state.positions).length !== 0 &&
            Object.entries(this.state.positions["Individual TFSA"]).map(([key, value]) => {
              if (value !== 0) {
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                    <td>1</td>
                  </tr>
                );
              }
            })}
          {Object.keys(this.state.positions).length !== 0 &&
            Object.entries(this.state.positions["Individual margin"]).map(([key, value]) => {
              if (value !== 0) {
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                    <td>2</td>
                  </tr>
                );
              }
            })}
        </tbody>
      </Table>
    </>
  );

  displaySelectedCategory = () => {
    var [accountType, symbol] = this.state.selectedCategory.split("/");
    var activities = this.state.activities.slice();
    if (this.state.selectedCategory !== "" && this.state.selectedCategory !== "all") {
      activities = this.state.activities.filter((activity) => activity[1] === symbol && activity[4] === accountType);
    }
    return (
      <Table responsive striped bordered hover size="lg">
        <thead>
          <tr>
            <th>时间</th>
            <th>名称</th>
            <th>数量</th>
            <th>价格</th>
            <th>所属账户</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(([date, symbol, qty, price, accountType]) => (
            <tr>
              <td>{date.substring(5, 10)}</td>
              <td>{symbol}</td>
              <td>{parseInt(qty)}</td>
              <td>{parseFloat(price).toFixed(2)}</td>
              <td>{accountType === "Individual TFSA" ? "1" : "2"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  selectInspectingCategory = () => {
    return (
      <Form.Group>
        <Form.Control as="select" onChange={(e) => this.setState({ selectedCategory: e.target.value })}>
          <option value="all">全部记录</option>
          {Object.keys(this.state.positions["Individual TFSA"]).map((position) => (
            <option value={`Individual TFSA/${position}`}>{`1 ${position}`}</option>
          ))}
          {Object.keys(this.state.positions["Individual margin"]).map((position) => (
            <option value={`Individual margin/${position}`}>{`2 ${position}`}</option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">{this.stockPositions()}</header>
        <header className="App-header select">{this.selectInspectingCategory()}</header>
        <header className="App-header table--selectedCategory">{this.displaySelectedCategory()}</header>
      </div>
    );
  }
}

export default App;
