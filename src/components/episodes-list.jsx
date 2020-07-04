import React from 'react';
import { FetchAPi } from '../utils/api';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/cart';



export default function EpisodesList() {

    const dispatch = useCart()
    const url = '/api/episodes'
    function addToCart(id) {
        dispatch('ADD_CART',{id})
    }

    return <div className="container">
        <div className="row">
            <FetchAPi url={url} >
                {
                    (episodes) => episodes.map((e) => <Episode key={e.episode_id} episode={e} addToCart={() => addToCart(e.episode_id)} />)
                }
            </FetchAPi>
        </div>
    </div>
}

function Episode({ episode, addToCart }) {

    return <div className="col-md-3 m-1">
        <div className="card">
            <div className="card-body">
                <button type="button" className="btn btn-primary">
                    Season <span className="badge badge-light">{episode.season}</span>
                </button>
                <button type="button" className="btn btn-primary">
                    Episode <span className="badge badge-light">{episode.episode}</span>
                </button>
                <h5 className="card-title">{episode.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Aired : {episode.air_date}</h6>
                <p className="card-text"><strong>{episode.characters.join(',')}</strong></p>
                <Link to={'/' + episode.episode_id} className="btn btn-danger">See Details</Link>
                <button type="button" className="btn btn-primary" onClick={addToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>

}


