import logo from './logo.svg';
import './App.css';
import { Button } from "monday-ui-react-core";

function App() {
  return (
    <div className="wrap">

      <div>
        <Button onClick={function noRefCheck(){}}>
          1개의 연결된 보드
        </Button>
        <div className="test-div">테스트 중입니다.</div>
      </div>

    </div>
  );
}

export default App;
