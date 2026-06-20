function AdminMainPage() {
    return (
        <>
            <div class="topbar">
                <div class="topbar-left">
                    <h1 id="page-title">Dashboard Overview</h1>
                    <p id="page-sub">Monday, 4 May 2026 &mdash; All systems operational</p>
                </div>
                <div class="topbar-actions">
                    <a href="index.html" class="topbar-back">← Back to Site</a>
                    <button class="topbar-btn" >Export</button>
                    <button class="notif-btn" >🔔<span
                        class="notif-dot"></span></button>
                    <button class="btn-primary"
                        style={{ background: "#f97316", color: "#fff", border: "none", padding: "8px 18px", borderRadius: "8px", fontSize: "0.82rem", fontWeight: "600", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>+
                        Add New</button>
                </div>
            </div>
        </>
    )
}

export default AdminMainPage