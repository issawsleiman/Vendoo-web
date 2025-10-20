import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import AllAppRouter from "./router/AppRouter";

export default function App() {
  return (
    <ThemeProvider>
      {/* Set all Routers */}
      <AllAppRouter />
    </ThemeProvider>
  );
}
