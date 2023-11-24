import {useState} from 'react';
import styles from './components/info-list/style.module.css';
import styled from './components/info-list/style.module.css';
import form from './components/info-list/style.module.css';
import label from './components/info-list/style.module.css';
import input from './components/info-list/style.module.css';
import btn from './components/info-list/style.module.css';
import wrap2 from './components/info-list/style.module.css';
import listItem from './components/info-list/style.module.css';
import deleteBtn from './components/info-list/style.module.css';
import mainTitle from './components/info-list/style.module.css';

function App() {
  // Array from objects
  const DATA = [{
    id: 1, title: 'lorem ipsum dolore 1', body: 'lorem lorem lorem lorem'
  }, {
    id: 2, title: 'lorem ipsum dolore 2', body: 'lorem lorem lorem lorem'
  }, {
    id: 3, title: 'lorem ipsum dolore 3', body: 'lorem lorem lorem lorem'
  }, {
    id: 4, title: 'lorem ipsum dolore 4', body: 'lorem lorem lorem lorem'
  },]
  // The end of Array from objects
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
      id: Math.round(Math.random() * 100), title: newTitle,
    }
    setData((data) => [...data, newData]);
    setNewTitle('');
  }

  //End of Handle functions for events
  //Render Info
  return (<div className={styles["container"]}>
    <div className={wrap2['wrap2']}>
      <div className={form['form']}>
        <label className={label['label']}>
          Enter New Post:
          <input value={newTitle}
                 type="text"
                 placeholder="Enter new post..."
                 className={input['input']}
                 onChange={handleTitleChange}
          />
        </label>
        <button className={btn['btn']} onClick={handleAddPost}>Add</button>
      </div>
      <ul className={styled['list']}>
        {data.map(item => {
          return (<li key={item.id} className={listItem['listItem']}>
            <h3 className={mainTitle['mainTitle']}>{item.title}</h3>
            <button onClick={() => {
              setData(data.filter(post => post.id !== item.id))
            }} className={deleteBtn['deleteBtn']}>Delete
            </button>
          </li>)
        })}
      </ul>
    </div>
  </div>);
}

//End of Render Info

export default App;



