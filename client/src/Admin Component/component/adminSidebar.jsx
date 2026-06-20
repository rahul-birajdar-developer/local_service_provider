function AdminSidebar() {
    return (
        <>
            <aside class="sidebar">
                <div class="sidebar-logo">
                    <div class="logo">Fix<span>It</span> Pro</div>
                    <div class="logo-sub">Admin Dashboard</div>
                </div>
                <div class="sidebar-nav">
                    <div class="nav-section-label">Main</div>
                    <button class="nav-item active" >
                        <span class="icon">📊</span> Overview
                    </button>
                    <button class="nav-item" >
                        <span class="icon">📅</span> Bookings
                        <span class="nav-badge">24</span>
                    </button>
                    <div class="nav-section-label">People</div>
                    <button class="nav-item" >
                        <span class="icon">👤</span> Users
                    </button>
                    <button class="nav-item" >
                        <span class="icon">🔧</span> Providers
                    </button>
                    <div class="nav-section-label">Settings</div>
                    <button class="nav-item" >
                        <span class="icon">⚙️</span> Services
                    </button>
                    <button class="nav-item" >
                        <span class="icon">📈</span> Reports
                    </button>
                    <button class="nav-item" >
                        <span class="icon">🔔</span> Alerts
                        <span class="nav-badge">3</span>
                    </button>
                </div>
                <div class="sidebar-footer">
                    <div class="admin-user">
                        <div class="admin-avatar">SA</div>
                        <div>
                            <div class="admin-name">Super Admin</div>
                            <div class="admin-role">Full Access</div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default AdminSidebar;