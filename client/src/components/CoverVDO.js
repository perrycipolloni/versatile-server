import React, { Component } from 'react';
import BadTV from '../vdo_folder/BadTV.mp4'
import Bricks from '../vdo_folder/Bricks.mp4'
import HiFi_JazzSmoke from '../vdo_folder/HiFi_JazzSmoke.mp4'
import InkBleed from '../vdo_folder/InkBleed.mp4'
import Lines from '../vdo_folder/Lines.mp4'
import LowKey_JazzSmoke from '../vdo_folder/LowKey_JazzSmoke.mp4'
import Smoke from '../vdo_folder/Smoke.mp4'
import VerticalDistortion from '../vdo_folder/VerticalDistortion.mp4'


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
    // let randomNumUnderSeven = 0
    // const randomNum = Math.floor(Math.random() * 10 )
    // randomNum > 5 ?  randomNumUnderSeven = randomNum - 4 : randomNumUnderSeven = randomNum;
    // console.log("This is random num " + randomNum)
    // console.log("This is a random num under six is " + randomNumUnderSeven)

    // // assigns video
    // const todaysVideo = videos[randomNumUnderSeven]
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
      let randomNumUnderSeven = 0
      const randomNum = Math.floor(Math.random() * 10 )
      randomNum > 7 ?  randomNumUnderSeven = randomNum - 3 : randomNumUnderSeven = randomNum;
      console.log("This is random num " + randomNum)
      console.log("This is a random num under seven is " + randomNumUnderSeven)

      // assigns video
      const todaysVideo = videos[randomNumUnderSeven]
      
  
        return (
            <header className="App-header">
              <video src={todaysVideo} autoPlay muted loop style={{
                type: 'video/mp4',
                playsinline: true,
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