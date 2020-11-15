import React, {useState} from 'react'
import './App.css';
import Card from './components/Card';
 

function App() {
  const[name, setName] = useState('your name');
  const[job, setJob] = useState('your job');
  const[about, setAbout] = useState('The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. ');
  return (
    <div className="App">
     <Card name={'martin'} job={'fullstack developer'} about={about}/>
    </div>
  );
}

export default App;
