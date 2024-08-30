import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import InputFilter from './components/InputFilter'
import FormNameEmail from './components/FormNameEmail'
import Debouncer from './components/Debouncer'
import Home from './components/Home'
import Book from './components/Book'
import BookList from './components/BookList'
import NewBook from './components/NewBook'
import NotFoundPage from './components/NotFoundPage'
import { BookRoutes } from './components/routers/BookRoutes'
import SearchParamsComponent from './components/SearchParamsComponent'
import Increment from './components/Increment'
import ClientDetails from './components/ClientDetails'
import FolderStructure from './components/FolderStructure'

function App() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <nav style={{ width: '15%' }}>
        <ul>
          <li>
            {/* LINK MOZE DA IMA SLEDECE PROPERTIJE */}
            {/* replace - remove currently page and set new */}
            {/* reloadDocument - reloaduje ceo app i daje sekciju na koju smo kliknuli*/}
            {/* state  */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/input-filter">Input-filter</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/books">Book List</Link>
          </li>
          <li>
            <Link to="/search-params">Search params</Link>
          </li>
          <li>
            <Link to="/increment">Increment-Decrement</Link>
          </li>
          <li>
            <Link to="/folder-structure">FolderStructure</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/input-filter" element={<InputFilter />} />
          <Route path="/form" element={<FormNameEmail />} />
          <Route path="/search-params" element={<SearchParamsComponent />} />
          <Route path="/increment" element={<Increment />} />
          <Route path="/folder-structure" element={<FolderStructure />} />

          {/* 1 */}
          {/* USE ROUTER */}
          {/* OVO :id JE DINAMICKA RUTA KOJA NAM GOVORI DA ID NIJE DEO HARDKODED URL-A */}
          {/* <Route path="/books/:id" element={<Book />} /> */}
          {/* <Route path="/books/new" element={<NewBook />} /> */}
          {/* <Route path="/booklist" element={<BookList />} /> */}

          {/* 2 */}
          {/* MOZE I NESTOVANO */}
          {/* <Route path="/books">
                <Route index element={<BookList />} />
                <Route path=":id" element={<Book />} />
                <Route path="new" element={<NewBook />} />
              </Route> */}

          {/* 3 */}
          {/* SVE NESTOVANE BOOKS RUTE U BookRoutes */}
          <Route path="/books/*" element={<BookRoutes />} />

          <Route path="/client/:id" element={<ClientDetails />}></Route>

          {/* NOT FOUND PAGE */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
