function OrderTab() {
    const ORDERS = [
        {
            id: 'BK-2844', status: 'new', priority: 'urgent',
            service: 'Pipe Burst — Urgent Repair', customer: 'Meera Joshi', phone: '+91 98001 44321',
            address: 'Flat 3B, Sunrise Apt, Baner, Pune', date: 'Today, 10:30 AM',
            amount: 950, notes: 'Water leaking from main pipe in kitchen. Causing flooding. Please come ASAP.',
            tags: ['Emergency', 'Pipe Repair']
        },
        {
            id: 'BK-2843', status: 'new', priority: 'normal',
            service: 'Bathroom Tap Replacement', customer: 'Aditya Nair', phone: '+91 87654 33210',
            address: '12 Rose Garden, Wakad, Pune', date: 'Today, 2:00 PM',
            amount: 480, notes: 'Old tap is dripping. Need hot & cold tap replaced in master bathroom.',
            tags: ['Tap Replacement']
        },
        {
            id: 'BK-2841', status: 'new', priority: 'normal',
            service: 'Kitchen Drainage Cleaning', customer: 'Neha Kulkarni', phone: '+91 98201 11234',
            address: 'Flat 7A, Palm Heights, Baner, Pune', date: 'Today, 4:30 PM',
            amount: 600, notes: 'Kitchen sink draining slowly. Needs professional clearing.',
            tags: ['Drainage', 'Cleaning']
        },
        {
            id: 'BK-2842', status: 'accepted', priority: 'normal',
            service: 'Water Tank Inspection', customer: 'Priya Ghosh', phone: '+91 91234 55678',
            address: '29 MG Road, Wakad, Pune', date: 'Today, 2:00 PM',
            amount: 500, notes: 'Annual water tank check-up and cleaning required.',
            tags: ['Tank', 'Inspection']
        },
        {
            id: 'BK-2840', status: 'in-progress', priority: 'normal',
            service: 'Bathroom Fitting Installation', customer: 'Arjun Mehta', phone: '+91 99001 22345',
            address: '15 Sunrise Towers, Viman Nagar, Pune', date: 'Today, 9:00 AM',
            amount: 1200, notes: 'New bathroom set to be installed. All fittings provided by customer.',
            tags: ['Bathroom', 'Installation']
        },
        {
            id: 'BK-2839', status: 'completed', priority: 'normal',
            service: 'Pipe Leak Repair', customer: 'Riya Patel', phone: '+91 90001 33456',
            address: 'Aundh Road, Flat 5C, Pune', date: '03 May, 3:00 PM',
            amount: 750, notes: 'Fixed successfully. Customer rated 5 stars.',
            tags: ['Pipe Repair', 'Completed']
        },
        {
            id: 'BK-2838', status: 'completed', priority: 'normal',
            service: 'Geyser Connection Fix', customer: 'Suresh Kamble', phone: '+91 87654 44567',
            address: 'Kothrud, Pune', date: '02 May, 11:00 AM',
            amount: 400, notes: 'Geyser pipe was loose. Tightened and sealed. No further issues.',
            tags: ['Geyser', 'Fix']
        },
        {
            id: 'BK-2837', status: 'cancelled', priority: 'normal',
            service: 'Outdoor Tap Installation', customer: 'Vijay Shah', phone: '+91 76543 21098',
            address: 'Kharadi, Pune', date: '01 May, 10:00 AM',
            amount: 300, notes: 'Customer cancelled — not at home.',
            tags: ['Cancelled', 'No Show']
        },
    ];

    const filteredOrders = ORDERS;

    const statusPill = (status) => {
        const map = {
            new: "pill-new",
            accepted: "pill-accepted",
            "in-progress": "pill-inprog",
            completed: "pill-completed",
            cancelled: "pill-cancelled",
        };

        const labels = {
            new: "New",
            accepted: "Accepted",
            "in-progress": "In Progress",
            completed: "Completed",
            cancelled: "Cancelled",
        };

        return (
            <span className={`order-status-pill ${map[status]} pill-dot`}>
                {labels[status]}
            </span>
        );
    };


    const initials = (name) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("");

    const avatarBg = (name) => {
        const colors = [
            "#06b6d4",
            "#3b82f6",
            "#8b5cf6",
            "#10b981",
            "#f59e0b",
        ];

        return colors[name.length % colors.length];
    };

    if (filteredOrders.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">📭</div>
                <h4>No Orders Found</h4>
                <p>Try changing your filter or check back later.</p>
            </div>
        );
    }

    return (
        <>
            {/* <!-- ─── ORDERS TAB ─── --> */}
            <div id="tab-orders" className="tab-view active content">
                {/* <!-- Stats --> */}
                <div className="stats-row">
                    <div className="stat-card stat-card-accent">
                        <div className="stat-icon-wrap" style={{ background: "#e8f5ee" }}>
                            <span>📋</span>
                        </div>
                        <div className="stat-num" id="st-total">
                            18
                        </div>
                        <div className="stat-lbl">Total Orders (Month)</div>
                        <div className="stat-trend t-up">↑ +5 from last month</div>
                    </div>
                    <div className="stat-card stat-card-accent">
                        <div
                            className="stat-icon-wrap"
                            style={{ background: "var(--amber-lt)" }}
                        >
                            <span>⏳</span>
                        </div>
                        <div className="stat-num" id="st-pending">
                            3
                        </div>
                        <div className="stat-lbl">Pending (New)</div>
                        <div className="stat-trend t-neu">Awaiting response</div>
                    </div>
                    <div className="stat-card stat-card-accent">
                        <div
                            className="stat-icon-wrap"
                            style={{ background: "var(--blue-lt)" }}
                        >
                            <span>⚙️</span>
                        </div>
                        <div className="stat-num" id="st-active">
                            2
                        </div>
                        <div className="stat-lbl">Active Jobs</div>
                        <div className="stat-trend t-neu">In progress today</div>
                    </div>
                    <div className="stat-card stat-card-accent">
                        <div className="stat-icon-wrap" style={{ background: "#ede9fe" }}>
                            <span>✅</span>
                        </div>
                        <div className="stat-num">13</div>
                        <div className="stat-lbl">Completed</div>
                        <div className="stat-trend t-up">↑ 92% completion rate</div>
                    </div>
                </div>

                {/* <!-- Incoming banner --> */}
                <div className="incoming-banner" id="incomingBanner">
                    <div className="incoming-pulse"></div>
                    <div className="incoming-text">
                        <strong>3 new order requests waiting for your response</strong>
                        <p>Orders auto-expire in 30 minutes if not accepted</p>
                    </div>
                    <button className="incoming-action">Review Now</button>
                </div>

                {/* <!-- Controls --> */}
                <div className="order-controls">
                    <div className="search-wrap">
                        <span className="search-icon">🔍</span>
                        <input
                            className="order-search"
                            type="text"
                            placeholder="Search by customer, location..."
                            id="orderSearch"
                        />
                    </div>
                    <div className="filter-tabs">
                        <button className="ftab active">All</button>
                        <button className="ftab">New</button>
                        <button className="ftab">Accepted</button>
                        <button className="ftab">In Progress</button>
                        <button className="ftab">Completed</button>
                    </div>
                    <button className="sort-btn">Sort: Newest ▾</button>
                </div>
            </div>

            <div className="orders-section">
                <div className="orders-list">
                    {filteredOrders.map((o) => (
                        <div
                            key={o.id}
                            className={`order-card ${o.status}`}
                            id={`card-${o.id}`}
                        >
                            <div className="order-header">
                                <div>
                                    <div className="order-id">{o.id}</div>
                                    <div className="order-service">{o.service}</div>
                                </div>
                                <div className="order-time">{o.date}</div>
                                {statusPill(o.status)}
                            </div>

                            <div className="order-body">
                                <div className="order-customer">
                                    <div
                                        className="cust-avatar"
                                        style={{
                                            background: avatarBg(o.customer)
                                        }}
                                    >
                                        {initials(o.customer)}
                                    </div>

                                    <div>
                                        <div className="cust-name">
                                            {o.customer}
                                        </div>

                                        <div className="cust-phone">
                                            {o.phone}
                                        </div>

                                        <div className="cust-addr">
                                            📍 {o.address}
                                        </div>
                                    </div>
                                </div>

                                <div className="order-meta">
                                    <div className="order-amount">
                                        ₹{o.amount}
                                    </div>

                                    <div className="order-date">
                                        {o.date}
                                    </div>

                                    <div
                                        className={`order-priority ${o.priority === "urgent"
                                            ? "priority-urgent"
                                            : "priority-normal"
                                            }`}
                                    >
                                        {o.priority === "urgent"
                                            ? "🔴 Urgent"
                                            : "⚪ Normal"}
                                    </div>
                                </div>
                            </div>

                            {o.notes && (
                                <div className="order-notes">
                                    <span className="note-icon">
                                        📝
                                    </span>

                                    <span>{o.notes}</span>
                                </div>
                            )}

                            <div className="order-footer">
                                <div className="order-tags" style={{ display: "flex", gap: "10px" }}>
                                    {o.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="order-tag"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="order-actions">
                                    <button class="oa-btn oa-call" >📞 Call</button>
                                    <button class="oa-btn oa-decline" >Decline</button>
                                    <button class="oa-btn oa-accept" >✓ Accept</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default OrderTab;