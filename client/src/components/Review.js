import React from 'react';
import Container from 'react-bootstrap/Container'
import headshot from '../images/chasealex.jpg'
import Spotify from './Spotify'

class Review extends React.Component {
   
    render() {
        
        return (
           <Container>
               <br />
               <br />
               <h3>Lyrical Lemonade Says</h3>
                <img src={headshot} alt="Chase Alex" />
               <br />
               <br />
               <p >
                   By <a href="https://lyricallemonade.com/author/3231">Seamus Fay</a> 9 Apr 2020
               </p>
               <p>
               Given the current climate of music, genreless songs – or those that sit in the sweet spot right between genres – are in high demand. People aren’t concerned with categories anymore, and quite frankly, if you can make them dance or sing along, genre isn’t a concern anyway. More important is the ability of a song to stick, which is just what we have with Chicago artist Chase Alex’s brand new single, “Bad B*tch Blues,” produced by LAN Party.
               </p>
               <p>
                Just over 2 minutes in length, “Bad B*tch Blues” is the kind of in-between-genres earworm that it feels like everyone is looking for right now. The vocals sits atop rejuvenating, slightly left-of-center production which makes for that “cool” kind of texture, while the home-run of a hook brings this one full circle, spearheaded by Alex’s infectious lyricism, particularly on the hook. Pair these elements together, and you have a hell of a song, and one that doesn’t just peak your attention, but keeps you coming back, singing the tune in your head all day.
                </p>
                <p>
                Needless to say, Chase Alex and LAN Party did their thing here – show some leave and stream the track on Spotify below!
                </p>

                <Spotify />
                <br />
                <p >
                Production and Additional Vocals by LAN Party
               </p>
           </Container>
        )
    }
}

export default Review;