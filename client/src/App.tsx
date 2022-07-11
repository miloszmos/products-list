import Products from "./routes/products";
import "./App.scss";
import { FiltersProvider } from "./context/Filters";

function App() {
  return (
    <div>
      <FiltersProvider>
        <Products />
      </FiltersProvider>
    </div>
  );
}

export default App;
