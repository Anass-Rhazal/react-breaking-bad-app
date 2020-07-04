import React from 'react';
import { FetchAPi } from '../utils/api';
import { useParams } from 'react-router-dom';




export default function EpisodeDetail() {
    let { id } = useParams();
    const url = '/api/episodes/'+id

    return <div className="container mt-5">
         <FetchAPi url={url} >
            {
                (episode) => episode[0] && 
                <>
                <Episode episode={episode[0]} />
                <CharctersList  charcters={episode[0].characters} />
                </>
            }
        </FetchAPi>
    </div>
}


function Episode({ episode }) {

    return <div className="row">
       <div className="col-md-12">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{episode.title}</h5>
                <button type="button" className="btn btn-primary">
                    Season <span className="badge badge-light">{episode.season}</span>
                </button>
                <button type="button" className="btn btn-primary">
                    Episode <span className="badge badge-light">{episode.episode}</span>
                </button>
            </div>
        </div>
    </div>
    </div>
    
    

}


function CharctersList({ charcters }) {
    return  <div className="row mt-2">
        {charcters.map( (name,index) =>  <Charcter key={index} name={name} />)}
    </div>
    
}


function Charcter({ name }) {
    const url = '/api/characters?name=' + name

    return <FetchAPi url={url} >
        {
            (charcter) => charcter[0] && 
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={charcter[0].img} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">{charcter[0].name}</h5>
                            <p className="card-text">{charcter[0].occupation.join(',')}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Nickname : {charcter[0].nickname}</li>
                            <li className="list-group-item">Portrayed : {charcter[0].portrayed}</li>
                        </ul>
                    </div>
                </div>

        }
    </FetchAPi>


}




