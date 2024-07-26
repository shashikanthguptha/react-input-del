import { Component } from "react";

import UserProfile from "./components/UserProfile/index";

const initializeUsersList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];
class App extends Component {
  state = {
    userDetailsList: initializeUsersList,
    searchInput: "",
  };
  onChangeInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  deleteUser = (uniqueNo) => {
    const { userDetailsList } = this.state;
    const filteredUserList = userDetailsList.filter(
      (each) => each.uniqueNo !== uniqueNo
    );
    this.setState({userDetailsList : filteredUserList})
  };

  render() {
    const { userDetailsList, searchInput } = this.state;
    const searchResult = userDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );
    return (
      <div className="list-container">
        <h1 className="user-heading">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeInput}
          value={searchInput}
        />
        <ul>
          {searchResult.map((eachUser) => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
