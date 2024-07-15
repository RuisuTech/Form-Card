import "./App.css";
import RenderComplete from "./components/RenderComplete";
import RenderForm from "./components/RenderForm";

function App() {
  return (
    <div className="relative">
      <div className="flex flex-wrap bg-[url(./bg-main-mobile.png)] bg-cover w-full h-[220px] px-4 py-8">
        <div className="bg-[url(./bg-card-back.png)] w-[270px] md:w-[300px] h-[148px] md:h-[164px] bg-cover absolute right-4 md:right-auto md:left-4 top-4 md:top-[160px] z-10">
          <p className="text-[#dedddf] text-right mt-[60px] mr-8">000</p>
        </div>
        <div className="bg-[url(./bg-card-front.png)] w-[270px] md:w-[300px] h-[148px] md:h-[164px] bg-cover absolute top-[100px] text-[#dedddf] z-20">
          <div className="flex flex-col p-4 h-full">
            <img className="w-14 mb-6" src="./card-logo.svg" alt="Logo" />
            <p className="w-full text-lg -tracking-tighter mb-2">0000 0000 0000 0000</p>
            <div className="flex justify-between">
              <p>Jane Appleseed</p>
              <p>00/00</p>
            </div>
          </div>
        </div>
      </div>
      <RenderForm />
      <RenderComplete />
    </div>
  );
}

export default App;
