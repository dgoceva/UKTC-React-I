import "./App.css";

const list = [
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

function App() {
  return (
    <div>
      <h1>My Stories</h1>
      <Search />
      <hr />
      <List />
    </div>
  );
}

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>{" "}
            </span>
            <span>{item.author}&nbsp;</span>
            <span>{item.num_comments + " "}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" placeholder="Search" />
    </div>
  );
}

export default App;
