import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import FeatureList from './_components/FeatureList'

function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 p-4">
            {/* Welcome banner */}

            <WelcomeBanner />

            {/*  Feature list */}

            <FeatureList />

            {/*  Recent activity */}
        </div>
    )
}

export default Dashboard