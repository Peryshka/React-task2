import './App.css';
import InfoList from "./components/info-list";

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
  {
    id: 5,
    title: 'lorem ipsum dolore 5',
    body: 'lorem lorem lorem lorem'
  },
];

function App() {
  return (
    <div className='wrap2'>
      {DATA.map((item) => {
        return (
          <InfoList
            key={item.id}
            title={item.title}
            body={item.body}
          />
        )
      })}
    </div>
  );
}

export default App;
