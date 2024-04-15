import "./App.css";
import Index from "./components/Input";
import List from "./components/List/List";
function App() {
  return (
    <>
      <div className="h-screen w-full bg-[#0D0714] flex justify-center items-center ">
        <div className="h-[758px] w-[583px] bg-[#1D1925] rounded-[20px]">
          <Index />
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
