import { useEffect } from "react";
import "./App.css";
import fetchProducts from "./redux/store/store";

function App() {
  useEffect(() => {
    fetchProducts();
  }, []);
  return <div className="App">{process.env.REACT_APP_BACKEND_URL}</div>;
}

export default App;
