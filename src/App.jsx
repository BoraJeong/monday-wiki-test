import {Routes, Route} from "react-router-dom";
import { Intro } from './pages/Intro';
import { List } from './pages/List';

function Home() {
    return <h1>Home</h1>;
}

// MyPage 컴포넌트
function MyPage() {
    return <h1>MyPage</h1>;
}

// Dashboard 컴포넌트
function Dashboard() {
    return <h1>Dashboard</h1>;
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/intro' element={<Intro />} />
      <Route path='/list' element={<List />} />
    </Routes>
  );
}

export default App;
