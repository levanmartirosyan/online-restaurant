import "./App.css";
import Router from "./router/Router";
import { ProductsProvider } from "./pages/products/context/UseProductsProvider";
import { ToastProvider } from "./shared/toast/Toast";

function App() {
  return (
    <ToastProvider>
      <ProductsProvider>
        <Router />
      </ProductsProvider>
    </ToastProvider>
  );
}

export default App;
