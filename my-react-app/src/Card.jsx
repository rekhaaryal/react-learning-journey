import profilePic from './assets/rekha.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title' >Rekha Aryal</h2>
            <p className='card-text'>
                 I am undergraduate Bsc.Csit student & i am interested in web development </p>
        </div>
    );

}

export default Card