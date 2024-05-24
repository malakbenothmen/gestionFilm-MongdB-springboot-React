import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }

    

    return (
        <div className ='movie-carousel-container'>
          <Carousel>
            {
                movies?.map((movie, key) =>{
                    return(
                        <Paper key={key}>
                            <div className = 'movie-card-container'>
                                <div className="movie-card" style={{"--img": `url(${movie.background})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                        <img src={movie.image} alt="" />
                                        </div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>

                                        <div className="movie-buttons-container">
                                        <Link to={`/film/${movie.id}`} className="btn btn-warning mr-2">Detail</Link></div>
                                        <div className="movie-buttons-container">
                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.id)} >Reviews</Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                       )
                   })
                }
            </Carousel>
             </div>
          )
     }

    export default Hero 
                