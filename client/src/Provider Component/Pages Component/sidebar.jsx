function SideBar({ activeTab, setActiveTab }) {
    return (
        <>
            <aside className="sidebar" >
                <div className="sidebar-logo">
                    <div className="logo-text">Fix<span>It</span> Pro</div>
                    <div className="logo-badge">Provider Portal</div>
                </div>

                <div className="provider-strip">
                    <div className="prov-ava">RK</div>
                    <div>
                        <div className="prov-name">Rajesh Kumar</div>
                        <div className="prov-cat">🔧 Plumbing · 8 yrs</div>
                    </div>
                    <div className="online-dot" id="onlineDot"></div>
                </div>

                <div className="sidebar-nav" >
                    <div className="nav-group-label">Dashboard</div>
                    <button 
                        className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('orders')}
                    >
                        <span className="nav-icon">📋</span> Orders
                        <span className="nav-badge" id="newOrderBadge">3</span>
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'schedule' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('schedule')}
                    >
                        <span className="nav-icon">📅</span> Schedule
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'earnings' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('earnings')}
                    >
                        <span className="nav-icon">💰</span> Earnings
                    </button>
                    <div className="nav-group-label">Account</div>
                    <button 
                        className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('reviews')}
                    >
                        <span className="nav-icon">⭐</span> Reviews
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('profile')}
                    >
                        <span className="nav-icon">👤</span> Profile
                    </button>
                    <div className="nav-group-label">Support</div>
                    <button 
                        className={`nav-item ${activeTab === 'support' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('support')}
                    >
                        <span className="nav-icon">💬</span> Help & Support
                    </button>
                    <button 
                        className={`nav-item ${activeTab === 'website' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('website')}
                    >
                        <span className="nav-icon">🏠</span> Main Website
                    </button>
                </div>

                <div className="sidebar-status">
                    <div className="status-toggle" id="statusToggle">
                        <div>
                            <div className="toggle-label" id="statusLabel">Online — Accepting orders</div>
                            <div className="toggle-sub" id="statusSub">Tap to go offline</div>
                        </div>
                        <div className="toggle-switch" id="toggleSwitch"></div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideBar;