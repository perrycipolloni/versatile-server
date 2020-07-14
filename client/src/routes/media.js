import React from 'react';
import News from '../components/News';
// import Twitter from '../components/Twitter'
// import Instagram from '../components/Instagram'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// NOTE: media.js takes the place of both artist and client rosters (which are galleries) until they get enough (artists and clients) to show. (Until then, artists.js and clients.js should not be accessible, but can be ready to go!) 
// NOTE: media.js aggregates VDO, audio, twitter, publicity. This provides the WHY should I do the CTA (which is what contact them? Do online form?) This is API not UX
// TODO: API axios.js 
// TODO: News not rendering on server


class Media extends React.Component {
    render() {
        return (
            <Container className="section">
                <h2>Media</h2> 
                <p>Information is at the heart of the Music Industry. Tone helps you stay informed. Read about the people who making the news. Whether in Billboard Magazine, Variety, or Rolling Stone. This is your Music Industry.</p>
                {/* <Twitter /> */}
                {/* <Instagram /> */}
                <News />

                {/* <div className="section">
                    <Row>
                        <Col>
                            <Twitter />
                        </Col>
                        <Col>
                            <Instagram />
                        </Col>
                    </Row>

                </div> */}
                
                <br />
                <br />
                <br />

            </Container>
        )
    }
}

export default Media;

