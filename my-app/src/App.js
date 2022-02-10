import React from "react";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const profile = {
    name:"Ivan",
    family: "Ivanov"
  }
  const address={
    country:"Bulgaria",
    city:"Pravets"
  }
  const user={
    id:1,
    ...profile,
    gender:"M",
    ...address
  }
  console.log(user)

  const {id, country, city, ...userWithoutAddressAndId} = user
  console.log(id)
  console.log(country)
  console.log(city)
  console.log(userWithoutAddressAndId)
  
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

const Item = ({item:{title,url,author,num_comments,points}}) => (
  <li>
    <span>
      <a href={url}>{title}</a>{" "}
    </span>
    <span>{author}&nbsp;</span>
    <span>{num_comments + " "}</span>
    <span>{points}</span>
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
