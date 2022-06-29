import {React} from 'react';
import {useSelector} from 'react-redux';
import CardFilm from '../CardFilm/CardFilm';

function GridCard() {

    let movies = useSelector((state) => state.movies);
    let filter = useSelector((state) => state.filter);
    let page = useSelector((state) => state.page);
    let nbrPerPage = useSelector((state) => state.nbrPerPage);

    function paginate(items, current_page, per_page_items) {
        let page = current_page || 1;
        let per_page = per_page_items || 10;
        let offset = (page - 1) * per_page;
    
        let paginatedItems = items.slice(offset).slice(0, per_page_items);
    
        return {
            data: paginatedItems
        };
    }

    let pageView = paginate(movies, page, nbrPerPage);

    const moviesList = pageView.data.map((item, index) => {
        if(filter === "none" || filter === undefined){
            return (
                <CardFilm 
                    key = {index}
                    id = {item.id}
                    title = {item.title}
                    category = {item.category}
                    likes = {item.likes}
                    dislikes = {item.dislikes}
                />
            )
        }else if(item.category === filter){
                return (
                    <CardFilm 
                        key = {index}
                        id = {item.id}
                        title = {item.title}
                        category = {item.category}
                        likes = {item.likes}
                        dislikes = {item.dislikes}
                    />
                )
        }
    });

  return (
    <>
    <div className="row">
        {moviesList}
    </div>
    </>
  );
}

export default GridCard;
