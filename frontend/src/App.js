import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">nhogazon</a>
          </div>
          <div>
            <a href="/cart">Carrito de compras</a>
            <a href="/signin">Iniciar sesion</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">Todos los derechos reservados @ nhoga</footer>
      </div>
    </BrowserRouter >
  )
}

export default App;
