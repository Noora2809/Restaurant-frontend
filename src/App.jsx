import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Rest from './Components/Rest';
import ViewRest from './Components/ViewRest'


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>

      <section>
        <Routes>
          {/* localhost:3000 - all restauarant details*/}
          <Route path='/' element={<Rest/>}/>
          {/*localhost:3000/view/5 - particular restaurant details*/}
          <Route path='/view/:id' element = {<ViewRest/>}/>
        </Routes>
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
