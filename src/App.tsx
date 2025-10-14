import "./index.css";
// @ts-ignore: no declaration file for './components/Header' (JSX module)
import VendooHeader from "./components/VendooHeader";
import Landing from "./components/layout/Landing";

function App() {
  return (
    <>
      <div className="font-sans text-gray-800">
        <Landing />
      </div>
    </>
  );
}

export default App;
