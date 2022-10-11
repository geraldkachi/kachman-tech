import React from 'react'
import Hero from '../Hero/Hero'
import HomeHome from '../Hero/HomeHome'
import Projects from '../Projects/Projects'
import WHatWeDo from '../WHatWeDo/WHatWeDo'
import LandingPage from "../../assets/landingPage"
import UsersList from '../UsersList/UsersList'

const Home = () => {
    return (
        <div className='overflow-y-scroll h-screen snap-y snap-mandatory'>
            <HomeHome />
            <Hero />
            <div className="snap-cente  ">
                <WHatWeDo />
            </div>
            <Projects />
            <LandingPage />

            <UsersList />
        </div>
    )
}

export default Home
