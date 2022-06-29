export function getAllMovies(data) {
    return {
        type: 'GET_ALL_MOVIES',
        payload: data
    }
}

export function deleteMovie(data){
    return {
        type: 'DELETE_MOVIE',
        payload: data
    }
}

export function updateFilterState(data){
    return {
        type: 'UPDATE_FILTER',
        payload: data
    }
}

export function updatePage(data){
    return {
        type: 'UPDATE_PAGE',
        payload: data
    }
}

export function updateNbrPerPage(data){
    return {
        type: 'UPDATE_NBR_PER_PAGE',
        payload: data
    }
}



