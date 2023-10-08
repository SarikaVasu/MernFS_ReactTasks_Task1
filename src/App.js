import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react'; 


function App() {
  const [para,setPara] = useState('');
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <Header/>
      <Main 
        para = {para}
        setPara = {setPara}
        count = {count}
        setCount = {setCount}/>
    </div>
  );
}

export default App;
