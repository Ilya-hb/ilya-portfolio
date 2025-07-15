import Switch from "./components/Switch";

function App() {
  return (
    <>
      <Switch />
      <div className="container flex flex-col mx-auto py-50 px-30 space-y-[100px]">
        <div className="w-full flex">
          <div className="flex flex-col gap-5 w-2/3">
            <h1 className="text-6xl text-white font-bold">Ilya Holuban</h1>
            <h2 className="text-3xl">Front End Engineer</h2>
            <h3 className="text-xl leading-9 text-neutral-400">
              I'm <strong>Ilya Holuban</strong>, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nam quibusdam non deleniti quo, qui
              alias accusantium labore voluptatum officia, ea nemo at harum
              doloremque nulla molestias quidem nisi sint similique?
            </h3>
          </div>
          <div className="w-1/3">
            <div className="w-[400px] h-[300px] bg-amber-300 flex items-center justify-center text-black text-3xl">
              image
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] flex items-center justify-center bg-amber-300">
          VIDEO
        </div>
      </div>
    </>
  );
}

export default App;
