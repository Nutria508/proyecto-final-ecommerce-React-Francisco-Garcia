import './App.css';
import { Layout } from './componentes/layout/Layout';
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { StartPage } from './componentes/StartPage/StartPage';
import { Routes, Route } from 'react-router-dom';
import ProductoDetalle from './componentes/productos/ProductoDetalle';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/productos" element={<ItemListContainer/>} />
        <Route path= "/producto/:id" element={<ProductoDetalle/>}/>
      </Route>
    </Routes>
  );
}

export default App
