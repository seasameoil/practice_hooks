export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

/*
const App = () => {
  const triggerNoif = useNotification("Hello", "Nice to meet you");
  return (
    <div className="App">
      <butotn onclick={triggerNoif}>Hello</butotn>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
