import './UserDashboard.css'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'
import BookingForm from './BookingForm'
import FeedBack from './FeedBack'
import HomePage from './HomePage'
import SearchProvider from './SearchProvider'
import TopRatedProvider from './TopRatedProvider'
import ProvidedService from './ProvidedServices'
import UserProfile from './Profile'
import UserBookingPage from './UserBookingPage'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'

function UserDashboard() {
    const [showSignup, setShowSignup] = useState(false);


    return (
        <>
            {/* User Page Logic */}
            <>
                <AppNavbar setShowSignup={setShowSignup} />
                <Routes>
                    <Route path="/" element={<HomePage showSignup={showSignup} />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/search" element={<SearchProvider />} />
                    <Route path="/services" element={<ProvidedService />} />
                    <Route path="/booking" element={<BookingForm />} />
                    <Route path="/feedback" element={<FeedBack />} />
                    <Route path="/providers" element={<TopRatedProvider />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/viewbookings" element={<UserBookingPage />} />
                </Routes>
                <AppFooter />
            </>
        </>
    )
}

export default UserDashboard
