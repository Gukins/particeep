const initialState = {
    movies: [],
    filter: "none",
    page: 1,
    nbrPerPage: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL_MOVIES':
            return Object.assign({}, state, {
                movies : action.payload
            })
        case 'DELETE_MOVIE':
            let newMovies = state.movies.filter(movie => movie.id !== action.payload);
            return Object.assign({}, state, {
                movies : newMovies
            })
        case 'UPDATE_FILTER':
            return Object.assign({}, state, {
                filter : action.payload
            })
        case 'UPDATE_PAGE':
            return Object.assign({}, state, {
                page : action.payload
            })
        case 'UPDATE_NBR_PER_PAGE':
            return Object.assign({}, state, {
                nbrPerPage : action.payload
            })
        default:
            return state
    }
}