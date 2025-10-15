import "./index.css";
// @ts-ignore: no declaration file for './components/Header' (JSX module)
import VendooHeader from "./components/common/VendooHeader";
import LandingPage from "./pages/Landing/LandingPage";

function App() {
  return (
    <>
      <div className="font-sans text-gray-800">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
