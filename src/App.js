import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  //   const test=()=>{
  //     fetch('https://api.coincap.io/v2/assets',{ method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
  //     .then((response)=> response.json())
  //     .then((result)=>console.log(result))
  // }

  // test()

  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;

function Logo() {
  return (
    <div>
      <div>
        <h1> Far Away</h1>
      </div>
    </div>
  );
}

function Form() {
  function handelsubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className="container mt-5">
      <form
        className="d-flex flex-row justify-content-around"
        onSubmit={handelsubmit}
      >
        <h4>What do yo need for your trip?</h4>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Item..." />
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

function PackingList() {
  return (
    <div>
      <div className="list mt-5">
        <div>
          <div className="row">
            {initialItems.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div
      className="col"
      style={item.packed ? { textDecoration: "line-through" } : {}}
    >
      {item.quantity} {item.description} <i className="bi bi-x"></i>
    </div>
  );
}
function Stats() {
  return (
    <div>
      <div className="list">
        <div>List</div>
      </div>
    </div>
  );
}
