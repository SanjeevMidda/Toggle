import { useState } from 'react';
import './index.css';

function App() {

  const [status, setStatus] = useState(false);

  function toggle(){
    setStatus(!status);
  }

  return (
    <div className="App">
        <div className = {status? "containerMove" : "container"}>
          <div className = {status? "moveElement" : "toggle"} onClick={toggle}></div>
        </div>
    </div>
  );
}

export default App;
