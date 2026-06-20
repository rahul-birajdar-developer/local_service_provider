import './providerPage.css';
import Sidebar from './Pages Component/sidebar';
import MainPage from './Pages Component/mainPage';
import { useState } from 'react';

function Provider() {

    const [activeTab, setActiveTab] = useState('orders');

    return (
        <>
            <div className="provider-container">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <MainPage activeTab={activeTab} />
            </div>
        </>
    );
}

export default Provider;