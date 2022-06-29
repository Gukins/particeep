import {React, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import * as actions from '../../redux/action/applications';


function Filter() {

    let movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    let listCategory = new Set();
    const [selectedOption, setSelectedOption] = useState();
    dispatch(actions.updateFilterState(selectedOption));

    movies.forEach(element => {
        listCategory.add(element.category);
    })  

    let tabListCategory = Array.from(listCategory);
    
    const mapCategoriyList = tabListCategory.map((item, index) => {
        return (
            <option key={index} value={item}>{item}</option>
            )
    });


  return (
    <>
        <div class="form-group">
            <label htmlFor="select" style={{fontWeight:"bold"}}>Filtre par categorie</label>
            <select value={selectedOption} onChange={e => dispatch(actions.updateFilterState(e.target.value))} class="form-control" id="select">
                <option value="none" selected>Tous</option>
                {mapCategoriyList}
            </select>
        </div>
    </>
  );
}

export default Filter;
