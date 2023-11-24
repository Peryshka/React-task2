import {useState} from 'react';
import InfoList from "./components/info-list";
import styles from './components/info-list/style.module.css';
import styled from './components/info-list/style.module.css';
import form from './components/info-list/style.module.css';
import label from './components/info-list/style.module.css';
import input from './components/info-list/style.module.css';
import btn from './components/info-list/style.module.css';
import wrap2 from './components/info-list/style.module.css';

function App() {
  const DATA = [
    {
      id: 1,
      title: 'lorem ipsum dolore 1',
      body: 'lorem lorem lorem lorem'
    },
    {
      id: 2,
      title: 'lorem ipsum dolore 2',
      body: 'lorem lorem lorem lorem'
    },
    {
      id: 3,
      title: 'lorem ipsum dolore 3',
      body: 'lorem lorem lorem lorem'
    },
    {
      id: 4,
      title: 'lorem ipsum dolore 4',
      body: 'lorem lorem lorem lorem'
    },
  ]
  const [data, setData] = useState(DATA);
  const [newTitle, setNewTitle] = useState('');
  function handleTitleChange(e) {
    setNewTitle(e.target.value);;
  }
  function handleAddPost() {
    const newData = {
      id: data.length + 1,
      title: newTitle,
    }
    setData((data) => [...data, newData]);
    setNewTitle('');
  }

  return (
    <div className={styles["container"]}>
      <div className={wrap2['wrap2']}>
        {/*{DATA.map((item) => {*/}
        {/*  return (*/}
        {/*    <InfoList*/}
        {/*      key={item.id}*/}
        {/*      title={item.title}*/}
        {/*      body={item.body}*/}
        {/*    />*/}
        {/*  )*/}
        {/*})}*/}
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
            return(
              <li key={item.id}>
                <h3>{item.title}</h3>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
