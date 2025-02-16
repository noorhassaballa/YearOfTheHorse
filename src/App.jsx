import './App.css';
import Fortune24 from './24';
import Fortune25 from './25';
import Fortune26 from './26';
import Fortune27 from './27';
import Fortune28 from './28';
import Fortune33 from './33';
import Fortune38 from './38';
import Fortune43 from './43';
import Fortune48 from './48';
import Fortune53 from './53';
import Header from './Header';

function App() {


  return (
    <>
      <Header />
      <div className='line'>
        <Fortune24 />
        <Fortune26 />
        <Fortune28 />
        <Fortune38 />
        <Fortune48 />
      </div>
      <div className='line'>
        <Fortune25 />
        <Fortune27 />
        <Fortune33 />
        <Fortune43 />
        <Fortune53 />
      </div>



    </>
  )
}

export default App
