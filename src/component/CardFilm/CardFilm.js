import {React, useState} from "react";
import {useDispatch} from 'react-redux';
import * as actions from '../../redux/action/applications';


const CardFilm = (props) =>{

    const dispatch = useDispatch();
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    
    const deleteCard = (id) => {
        dispatch(actions.deleteMovie(id));
    }

    let allAppreciation = props.likes + props.dislikes;
    let ratio = 100 * props.likes / allAppreciation;
    let ratioRounded = Math.round(ratio);
    let ratioForStyle = ratioRounded+"%";

    const toggleLike = () => {
        setLike(!like);
        if (dislike){
            setDislike(!dislike);
        }
    }

    const toggleDislike = () => {
        setDislike(!dislike);
        if (like){
            setLike(!like);
        }
    }

    const styles = {
        ratio: {
          width: ratioForStyle
        }
      };

    return (
        <>
        <div className="col-xs-1 col-md-4 col-lg-3">
            <div className="card col-12" style={{width:'18rem', marginTop: '3rem'}}>
                <button style={{position:'absolute', top: '0', right: '0'}} className="delete" onClick={() => deleteCard(props.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                <div className="card-body">
                    <h4 style={{fontWeight: 'Bold'}}>{props.title}</h4>
                    <div className="row">
                    <h5 className="col-10">{props.category}</h5>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={styles.ratio} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{ratioRounded}%</div>
                    </div>
                    <div className="row">
                        <div className="col-2" >
                            <svg style={{cursor : 'pointer'}} onClick={() => toggleDislike()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={dislike ? "red" : "black"} className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"/>
                            </svg>
                        </div>
                        <div className="col-2 offset-8" >
                            <svg style={{cursor : 'pointer'}} onClick={() => toggleLike()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={like ? "green" : "black"} className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default CardFilm;