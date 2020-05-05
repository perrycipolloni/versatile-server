import React from 'react';
import { 
} from 'react-router-dom';

// NOTE: media.js takes the place of both artist and client rosters (which are galleries) until they get enough (artists and clients) to show. (Until then, artists.js and clients.js should not be accessible, but can be ready to go!) 
// NOTE: media.js aggregates VDO, audio, twitter, publicity. This provides the WHY should I do the CTA (which is what contact them? Do online form?) This is API not UX
// TODO: API axios.js 
// TODO: UI bootstrap


class Media extends React.Component {
    render() {
        return (
            <div>
                <h2>Media blasts VDO, youtube, images, twitter, soundcloud, PR</h2> 
                <ol>
                    <li>This could be the CTA "sign this artist"</li>
                    <li>or a reinforcer, "this is a good resource" or "I'm gonna contact them for a contract on this artist".</li>
                </ol>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p>
                
                
            </div>
        )
    }
}

export default Media;
