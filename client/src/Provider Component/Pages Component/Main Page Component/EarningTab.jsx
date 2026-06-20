function EarningTab() {
    return (
        <>
            <div id="tab-earnings" className="tab-view content">
                <div className="earnings-grid">
                    <div className="earn-card">
                        <div className="earn-title">Earnings Overview</div>
                        <div className="earn-sub">May 2026 · Updated live</div>
                        <div className="earn-big">₹14,750</div>
                        <div className="earn-period">This month · 18 completed orders</div>
                        <div className="mini-bar-chart" id="earnChart"></div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "8px",
                            }}
                        >
                            <span style={{ fontSize: "0.68rem", color: "var(--ink3)" }}>
                                Week 1
                            </span>
                            <span style={{ fontSize: "0.68rem", color: "var(--ink3)" }}>
                                Week 2
                            </span>
                            <span style={{ fontSize: "0.68rem", color: "var(--ink3)" }}>
                                Week 3
                            </span>
                            <span style={{ fontSize: "0.68rem", color: "var(--ink3)" }}>
                                Week 4
                            </span>
                        </div>

                        <div className="earn-breakdown" style={{ marginTop: "20px" }}>
                            <div className="earn-row">
                                <span className="earn-row-label">Gross Earnings</span>
                                <span className="earn-row-val">₹17,350</span>
                            </div>
                            <div className="earn-row">
                                <span className="earn-row-label">Platform Fee (15%)</span>
                                <span className="earn-row-val" style={{ color: "var(--red)" }}>
                                    −₹2,600
                                </span>
                            </div>
                            <div className="earn-row">
                                <span className="earn-row-label">Net Earnings</span>
                                <span className="earn-row-val" style={{ color: "var(--accent)" }}>
                                    ₹14,750
                                </span>
                            </div>
                            <div className="earn-row">
                                <span className="earn-row-label">Pending Payout</span>
                                <span className="earn-row-val" style={{ color: "var(--amber)" }}>
                                    ₹3,500
                                </span>
                            </div>
                            <div className="earn-row">
                                <span className="earn-row-label">Avg per Order</span>
                                <span className="earn-row-val">₹819</span>
                            </div>
                        </div>

                        <button
                            className="pf-save"
                            style={{ marginTop: "20px" }}
                            onclick="showToast('🏦 Payout of ₹11,250 requested to your UPI!')"
                        >
                            Request Payout
                        </button>
                    </div>

                    <div className="earn-card">
                        <div className="earn-title">Transaction History</div>
                        <div className="earn-sub">Recent payouts & deductions</div>
                        <div className="payout-list">
                            <div className="payout-item">
                                <div className="payout-icon" style={{ background: "#e8f5ee" }}>
                                    💳
                                </div>
                                <div className="payout-info">
                                    <div className="payout-name">Weekly Payout</div>
                                    <div className="payout-date">01 May 2026</div>
                                </div>
                                <div className="payout-amt payout-credit">+₹5,250</div>
                            </div>
                            <div className="payout-item">
                                <div
                                    className="payout-icon"
                                    style={{ background: "var(--amber-lt)" }}
                                >
                                    🧾
                                </div>
                                <div className="payout-info">
                                    <div className="payout-name">Order #BK-2841</div>
                                    <div className="payout-date">04 May 2026 · Plumbing</div>
                                </div>
                                <div className="payout-amt payout-credit">+₹637</div>
                            </div>
                            <div className="payout-item">
                                <div
                                    className="payout-icon"
                                    style={{ background: "var(--amber-lt)" }}
                                >
                                    🧾
                                </div>
                                <div className="payout-info">
                                    <div className="payout-name">Order #BK-2836</div>
                                    <div className="payout-date">03 May 2026 · Pipe Repair</div>
                                </div>
                                <div className="payout-amt payout-credit">+₹510</div>
                            </div>
                            <div className="payout-item">
                                <div
                                    className="payout-icon"
                                    style={{ background: "var(--red-lt)" }}
                                >
                                    📉
                                </div>
                                <div className="payout-info">
                                    <div className="payout-name">Platform Fee</div>
                                    <div className="payout-date">01 May 2026</div>
                                </div>
                                <div className="payout-amt payout-debit">−₹900</div>
                            </div>
                            <div className="payout-item">
                                <div className="payout-icon" style={{ background: "#e8f5ee" }}>
                                    💳
                                </div>
                                <div className="payout-info">
                                    <div className="payout-name">Weekly Payout</div>
                                    <div className="payout-date">24 Apr 2026</div>
                                </div>
                                <div className="payout-amt payout-credit">+₹6,800</div>
                            </div>
                            <div className="payout-item">
                                <div
                                    className="payout-icon"
                                    style={{ background: "var(--amber-lt)" }}
                                >
                                    🧾
                                </div>
                                <div className="payout-info">
                                    <div className="payout-name">Order #BK-2821</div>
                                    <div className="payout-date">22 Apr 2026 · Drainage</div>
                                </div>
                                <div className="payout-amt payout-credit">+₹850</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EarningTab;