import { useState } from 'react';
import html5 from "../../assets/projects/thumbnails/mysterybox.webp";
import './Game_Card.scss';


function Game_Card({
    p_projectName,
    p_tags,
    p_source,
    p_width,
    p_height,
    p_thumbnail
}) {

    const [showGame, setShowGame] = useState(false);

    const feat = [
        ...p_tags.features.languages,
        ...p_tags.features.frameworks,
        ...p_tags.features.libraries
    ]

    return (
        <section className="game-card-container" style={{ }}>

            <h1 className='build-name'>{p_projectName}</h1>

            <div className="features-container">
                <div className="feature-items">
                    {feat.map((feat, i) => (
                        <span key={i} className="feature-item">{feat}</span>
                    ))}
                </div>
            </div>


            {!showGame && (
                <div
                    className="thumbnail-wrapper"
                    style={{ width: p_width, height: p_height }}
                    onClick={() => setShowGame(true)}
                >
                    <img
                        src= {p_thumbnail}
                        alt="Game Thumbnail"
                        className="thumbnail-img"
                    />

                    <div className="thumbnail-overlay">
                        <button className="play-button">Click to Test!</button>
                    </div>
                </div>
            )}

            {showGame && (
                <iframe
                    src={p_source}
                    width={p_width}
                    height={p_height}
                    className="game-iframe"
                ></iframe>
            )}
        </section>
    );
}

export default Game_Card;