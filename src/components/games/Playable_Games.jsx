import { useState } from 'react';
import './Game_Card.scss';
import Game_Card from './Game_Card';

import valiantvolleythumb from '../../assets/projects/thumbnails/valiantvolley.webp'
import mysteryboxthumb from '../../assets/projects/thumbnails/mysterybox.webp'
import projectsData from '../../data/projects.json';


const thumbnailMap = {
    'valiantvolley.webp': valiantvolleythumb,
    'mysterybox.webp': mysteryboxthumb,
};

function Playable_Games() {
    return (
        <section className="playable-game-container">
            <div className="lable-div">
                <h2 className='lable'>Sample Builds</h2>
            </div>

            <div className="build-section">
                {projectsData.playable.map((build, i) => (
                    <Game_Card
                        key={build.key}
                        p_projectName={build.name}
                        p_tags={build.tags}
                        p_source={build.source}
                        p_width={build.width}
                        p_height={build.height}
                        p_thumbnail={thumbnailMap[build.thumbnail]}
                    />
                ))}

            </div>

        </section>
    );
}

export default Playable_Games;