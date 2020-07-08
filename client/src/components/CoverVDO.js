import React, { Component } from 'react';
import BadTV from '../videos/BadTV.mp4'
import Bricks from '../videos/Bricks.mp4'
import HiFi_JazzSmoke from '../videos/HiFi_JazzSmoke.mp4'
import InkBleed from '../videos/InkBleed.mp4'
import Lines from '../videos/Lines.mp4'
import LowKey_JazzSmoke from '../videos/LowKey_JazzSmoke.mp4'
import Smoke from '../videos/Smoke.mp4'
import VerticalDistortion from '../videos/VerticalDistortion.mp4'


class CoverVDO extends Component {
  
  // ===== Script to select vdo
  componentDidMount() {
    
    // // SELECT BY DATE
    // const today = Date.now();
    // const todaysDate = new Date(today);
    // const dayOfTheMonth = todaysDate.getDate();
    // console.log("this is dayOfTheMonth " + dayOfTheMonth);

    // let selectedVideoIndex = 0    
    // // keeps selectedVideoIndex under 10
    // dayOfTheMonth > videos.length ? selectedVideoIndex = Math.floor(dayOfTheMonth / 3) : selectedVideoIndex = dayOfTheMonth;
    // console.log("this is todays video index " + selectedVideoIndex)

    // // assigns video
    // const todaysVideo = videos[selectedVideoIndex]
    // console.log("todays video is " + todaysVideo)
    // // END select by date


    // // SELECT RANDOMLY
    // let randomNumUnderSix = 0
    // const randomNum = Math.floor(Math.random() * 10 )
    // randomNum > 5 ?  randomNumUnderSix = randomNum - 4 : randomNumUnderSix = randomNum;
    // console.log("This is random num " + randomNum)
    // console.log("This is a random num under six is " + randomNumUnderSix)

    // // assigns video
    // const todaysVideo = videos[randomNumUnderSix]
    // console.log("todays video is " +  todaysVideo)
  }


    render() {
      // const todaysVideo = dizzy
      // console.log(todaysVideo)

      // VIDEOS
      const videos = [BadTV, Bricks, InkBleed, HiFi_JazzSmoke, LowKey_JazzSmoke, Lines, Smoke, VerticalDistortion]
      
      // // SELECT BY DATE
      // const today = Date.now();
      // const todaysDate = new Date(today);
      // const dayOfTheMonth = todaysDate.getDate();
      // console.log("this is dayOfTheMonth " + dayOfTheMonth);

      // let selectedVideoIndex = 0    
      // // keeps selectedVideoIndex under 10
      // dayOfTheMonth > videos.length ? selectedVideoIndex = Math.floor(dayOfTheMonth / 3) : selectedVideoIndex = dayOfTheMonth;
      // console.log("this is todays video index " + selectedVideoIndex)

      // // assigns video
      // const todaysVideo = videos[selectedVideoIndex]
      // console.log("todays video is " + todaysVideo)
      // // END select by date

      // SELECT RANDOMLY
      let randomNumUnderSix = 0
      const randomNum = Math.floor(Math.random() * 10 )
      randomNum > 8 ?  randomNumUnderSix = randomNum - 2 : randomNumUnderSix = randomNum;
      console.log("This is random num " + randomNum)
      console.log("This is a random num under nine is " + randomNumUnderSix)

      // assigns video
      const todaysVideo = videos[randomNumUnderSix]
      
  
        return (
            <header className="App-header">
              <video src={todaysVideo} autoPlay muted loop style={{
                type: 'video/mp4',
                objectFit: 'cover',
                overflow: 'hidden',
                width: '100vw',
                height: '100vh',
                }} />
  
          </header>
        )
    }
}

export default CoverVDO;