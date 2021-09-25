export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (onBefore !== "function") {
      return;
    }
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [onBefore]);
};

/*
const App = () => {
  const begForLife = () => console.log("Please don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};
*/
