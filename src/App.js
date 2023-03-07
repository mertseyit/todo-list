import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './pages/List'
import NotFound from './pages/NotFound';
import Add from './pages/Add';
import {Provider} from './contexts/ItemContext';
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <Provider>
        <Header title={'To do list'} />
        <NavBar />
        <Routes>
          <Route path='/' element={<List />}/>
          <Route path='/add' element={<Add />}/>
          <Route path='/edit/:id' element={<Edit />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer date={new Date().getFullYear()}/>
      </Provider>

    </>
  );
}

export default App;
