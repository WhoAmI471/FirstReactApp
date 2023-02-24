import React from 'react';
import c from './HeroArea.module.css';

import memiso from './img/memiso.png';
import sun from './img/sunshine.svg';
import pure from './img/pure.svg';
import auto from './img/automotive.svg';
import hand from './img/hand.svg';

const HeroArea = () => {
    return (
        <div className={c.area}>
            <div className={c.info}>
                <p className={c.altName}>Favorite brands</p>
                <h1><cvet>An exciting place</cvet><br /> 
                    for the whole family <br />
                    to shop.</h1>
                <p>The standard chunk of Lorem Ipsum used since the 1500s <br /> 
                is reproduced below for those interested.</p>
                <button type="submit" title="Submit">shop now</button>
            </div>
            <img src={memiso} alt="" width='550' />
            <div className={c.corps}>
                <ul className={c.items}>
                    <li className='item'><a href="/"><img src={sun} alt="" /></a></li>
                    <li className='item'><a href="/"><img src={pure} alt="" /></a></li>
                    <li className='item'><a href="/"><img src={auto} alt="" /></a></li>
                    <li className='item'><a href="/"><img src={hand} alt="" /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default HeroArea;