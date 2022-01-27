import React from "react";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const user = {
    firstName: "John",
    pet:{
      name:'Sam'
    }
  }
  const userName=user.firstName
  const petName=user.pet.name
  console.log(userName,petName)

  const {
    firstName,
    pet:{name}
  }=user
  console.log(firstName,name)
  const stories = [
    {
      title: "React",
      url: "http://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "http://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Stories</h1>
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <hr />
      <List list={filteredStories} />
    </div>
  );
};

const List = ({list}) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({item}) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>{" "}
    </span>
    <span>{item.author}&nbsp;</span>
    <span>{item.num_comments + " "}</span>
    <span>{item.points}</span>
  </li>
);

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search:</label>
    <input
      type="text"
      id="search"
      placeholder="Search"
      value={search}
      onChange={onSearch}
    />
  </div>
);

export default App;
