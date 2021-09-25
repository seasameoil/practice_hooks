export const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

/*
const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div>
        <img
          ref={element}
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
        />
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
      <button onClick={exitFull}>Exit fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
