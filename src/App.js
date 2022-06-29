import {React, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as actions from './redux/action/applications';
import './App.css';
import GridCard from './component/GridCard/GridCard';
import Filter from './component/Filter/Filter';
import Pagination from './component/Pagination/Pagination';

import {movies$} from './data/movies.js';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    movies$.then(result => {
      dispatch(actions.getAllMovies(result));
    });
  }, [])

  const handleSelectCategory = (nameCategory) => {
    dispatch(actions.updateFilterState(nameCategory));
}

  return (
    <>
      <div className="container">
        <Filter handleSelectCategory={handleSelectCategory}/>
        <GridCard/>
        <Pagination/>
      </div>
    </>
  );
}

export default App;
