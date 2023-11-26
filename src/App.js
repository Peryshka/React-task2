import './App.css';
import './App.module.css';
import InfoList from "./components/info-list";
import {useState} from 'react';
import ToggleSwitchChangeBg from "./components/ToggleSwitchChangeBg";
import styled from './App.module.css';

const DATA = [
  {
    id: 1,
    title: 'Misha',
    body: 'lorem lorem lorem lorem'
  },
  {
    id: 2,
    title: 'It\'s skin',
    body: 'lorem lorem lorem lorem'
  },
  {
    id: 3,
    title: 'Tony Moly',
    body: 'lorem lorem lorem lorem'
  },
  {
    id: 4,
    title: 'SkinCare',
    body: 'lorem lorem lorem lorem'
  },
  {
    id: 5,
    title: 'Zenzia',
    body: 'lorem lorem lorem lorem'
  }
];

function App() {
  //All states
  const [data, setData] = useState(DATA);
  const [newTitle, setNewTitle] = useState('');
  const [isNight, setIsNight] = useState(false);
  function handleNightTheme() {
    setIsNight(!isNight);
  }
  //The end of all states
  //Handle functions for events
  function handleTitleChange(e) {
    setNewTitle(e.target.value);
  }

  function handleAddPost() {
    const newData = {
      id: Math.round(Math.random() * 100),
      title: newTitle,
      body: ''
    }
    setData((data) => [...data, newData]);
    setNewTitle('');
  }

  function handleDelete(id) {
    setData(data.filter(post => post.id !== id))
  }

  //End of Handle functions for events
  //Rendering Info
  return (
    <div className={`'container ${isNight ? 'nightMode' : 'dayMode'}`}>
      <div className={styled.wrap}>
        <div className="form">
          <label className="label">
            Enter cosmetic:
            <input value={newTitle}
                   type="text"
                   placeholder="Enter cosmetic brand"
                   className={styled.input}
                   onChange={handleTitleChange}
            />
          </label>
          <button className={styled.addBtn} onClick={handleAddPost}>Add</button>
        </div>
        <ToggleSwitchChangeBg
        onChange={handleNightTheme}
        value={isNight}
        />
        {data.map((item) => {
          return (
            <InfoList
              key={item.id}
              title={item.title}
              body={item.body}
              onClick={() => handleDelete(item.id)}
            />
          )
        })}
      </div>
    </div>
  );
}

//The end of Rendering Info

export default App;

