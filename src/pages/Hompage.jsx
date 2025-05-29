import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Banner from '../components/Banner'
import Jobs from '../components/Jobs'
import SearchJobs from '../components/Searchjobs'
import StatsSection from '../components/Countup'
import Recruiter from '../components/Recruiter'
import SubscriptionSection from '../components/Subscription'
import NewsAndBlog from '../components/Newsblog'


const Hompage = () => {
    return (
        <div className=' '>
            <Hero />
            <Category />
            <Banner />

            <Jobs />
            <SearchJobs />
            <StatsSection />
            <Recruiter />
            <NewsAndBlog />
            {/* <SubscriptionSection /> */}

        </div>
    )
}

export default Hompage