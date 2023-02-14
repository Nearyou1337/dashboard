import "./App.css";
import { Statistics, Banner, Actions, Balance } from "./containers";

function App() {
  return (
    <div className="app">
      <div className="app__green-banner"></div>
      <div className="app__body">
        <div className="app__body-content">
          <div className="banner__none">
            <Banner />
          </div>
          <Statistics />
          <Actions />
        </div>
        <div className="app__body-info">
          <Balance />
        </div>
      </div>
    </div>
  );
}

export default App;
