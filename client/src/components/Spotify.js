import React from 'react';
import { 
} from 'react-router-dom';
import SpotifyPlayer from 'react-spotify-player'
import Container from 'react-bootstrap/esm/Container';


class Spotify extends React.Component {
    render() {

         // size may also be a plain string using the presets 'large' or 'compact'
         const size = {
            width: '100%',
            height: 220,
            };
            const view = 'list'; // or 'coverart'
            const theme = 'black'; // or 'white'
            
        return (
            <Container>
                <br />
                {/* <h2>Spotify </h2> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p> */}

                {/* SIMPLE IFRAME */}
                {/* <iframe src="https://open.spotify.com/embed/album/6d7qtraHjsC1mEmyfb8HYt" width="100%" height="180" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}


                {/* REACT SPOTIFY PLAYER */}
                <SpotifyPlayer
                    uri="spotify:album:6d7qtraHjsC1mEmyfb8HYt"
                    size={size}
                    view={view}
                    theme={theme}
                />

            </Container>
        )
    }
}

export default Spotify;








// Spotify access token 
// BQCu5FrY2mhyEOrwIAKuN8_NO6okKgQucpTx3AzzwvH312H3pmeGH1EgdRH_p0TyppXtcq8H0UurQHh2vYWI_VQnnfDvpEwuga1TMT6lDF4d-C-5GAQZkLeQXwm0fWxy2sk_z1hZCBlJsh3XgiVLSJ1sRiGIyM4



