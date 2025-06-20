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
            <Route path='/search' element={<Home />}/>
            <Route path='/viewRecipe' element={<Home />}/>
            <Route path='/search/:MealName' element={<Search />}/>
            <Route path='/viewRecipe/:mealId' element = {<ViewRecipe />}/>
          </Routes>
        </Router>
        <Sidebar />
      </GlobalContainer>
    </EdgeContextProvider>
  </React.StrictMode>
);

