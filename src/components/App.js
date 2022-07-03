import Moon from "./Moon";
import Text from "./Text";
import Handle from "./Handle";
import Snow from "./Snow";

function App() {
  return (
    <>
      <div>
        <Snow />
        <p className="small-screen-alert ">
          This page is not yet maded for small screen devices
        </p>
      </div>
      <div className="container">
        <Moon />
        <Text />
        <Handle />
        <Snow />
      </div>
    </>
  );
}

export default App;
