import './App.css';
import InfoList from "./components/info-list";
import {useState} from 'react';

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
  }
];

function App() {
  //All states
  const [data, setData] = useState(DATA);
  const [newTitle, setNewTitle] = useState('');
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
    <div className='container'>
      <div className='wrap'>
        <div className="form">
          <label className="label">
            Enter cosmetic:
            <input value={newTitle}
                   type="text"
                   placeholder="Enter cosmetic brand"
                   className="input"

                   onChange={handleTitleChange}
            />
          </label>
          <button className="addBtn" onClick={handleAddPost}>Add</button>
        </div>
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

