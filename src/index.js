import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';
import Sidebar from './components/Sidebar';
import { EdgeContextProvider } from './utils/context';
import GlobalContainer from './components/GlobalContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ViewRecipe from './pages/ViewRecipe';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <EdgeContextProvider>
      <GlobalContainer>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/viewRecipe' element={<Home />}/>
            <Route path='/search/:MealName' element={<Search />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/viewRecipe/:name' element = {<ViewRecipe />}/>
            <Route path='*' element = {<PageNotFound />}/>
          </Routes>
          <Sidebar />
        </Router>
      </GlobalContainer>
    </EdgeContextProvider>
  </React.StrictMode>
);

