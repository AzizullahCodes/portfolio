import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./assets/navbar/navbar";
import MyRoutes from "./assets/routes/routes";
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
