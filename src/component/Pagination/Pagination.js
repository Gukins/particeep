import {React, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import * as actions from '../../redux/action/applications';


function Pagination() {

    let currentPage = useSelector((state) => state.page);
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState();
    dispatch(actions.updateNbrPerPage(selectedOption));

    const handlePageNumber = (newPage) => {
        dispatch(actions.updatePage(newPage));
    }
    
  return (
    <>
        <div style={{marginTop: '30px'}} class="row justify-content-center">
            <button onClick={() => handlePageNumber(currentPage--)}> prev </button>
            <button onClick={() => handlePageNumber(currentPage++)}> next </button>
            <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                <option value="none" selected>tous</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
            </select> films/page
        </div>
    </>
  );
}

export default Pagination;
