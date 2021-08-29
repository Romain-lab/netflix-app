import './featured.scss'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Films' : 'Séries'}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Aventure</option>
                        <option value="comedy">Comédies</option>
                        <option value="horror">Horreur</option>
                    </select>
                </div>
            )}
            <img src="https://images7.alphacoders.com/605/thumb-1920-605930.jpg" alt="" width="100%" />
            <div className="info">
                <img src="https://picfiles.alphacoders.com/101/101728.png" alt="" />
                {/* <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/0/02/Interstellar.svg/1280px-Interstellar.svg.png" alt="" /> */}
                <span className="description">
                Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Lecture</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Plus d'infos</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
