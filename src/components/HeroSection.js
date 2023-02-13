import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'


function HeroSection({
    lightBg, lightText, lightTextDesc, headLine, description, description1, buttonLabel, buttonLabel1, img, alt, imgStart
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero_section darkBg'}>
                <div className='container'>
                    <div className='row home__hero-row' style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description1}</p>
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' target='_blank'>{buttonLabel}</Button>
                                </Link> &nbsp;&nbsp;&nbsp;
                                <Link to='/sign-in'>
                                    <Button buttonStyle='btn--outline' target='_blank'>{buttonLabel1}</Button>
                                </Link>
                            </div>
                            <div className='subscription'>
                                <p className='sub-text'>Our mobile app would be coming out soon. Be among the first people to get notified</p>
                                <div className='input-areas'>
                                    <form>
                                        <input className='input' name='email' type='email' placeholder='Your email'/>
                                        <Button buttonSize='btn--large'>Send</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default HeroSection;
