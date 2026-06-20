function ReviewTab() {
    return (
        <>
            <div id="tab-reviews" className="tab-view content">
                <div className="reviews-grid">
                    <div className="review-summary">
                        <div className="big-rating">4.9</div>
                        <div className="big-stars">★★★★★</div>
                        <div className="rating-total">Based on 312 reviews</div>
                        <div className="rating-bars" style={{ marginTop: "20px" }}>
                            <div className="rbar">
                                <span className="rbar-num">5</span>
                                <div className="rbar-track">
                                    <div className="rbar-fill" style={{ width: "85%" }}></div>
                                </div>
                                <span className="rbar-cnt">265</span>
                            </div>
                            <div className="rbar">
                                <span className="rbar-num">4</span>
                                <div className="rbar-track">
                                    <div className="rbar-fill" style={{ width: "11%" }}></div>
                                </div>
                                <span className="rbar-cnt">34</span>
                            </div>
                            <div className="rbar">
                                <span className="rbar-num">3</span>
                                <div className="rbar-track">
                                    <div className="rbar-fill" style={{ width: "3%" }}></div>
                                </div>
                                <span className="rbar-cnt">9</span>
                            </div>
                            <div className="rbar">
                                <span className="rbar-num">2</span>
                                <div className="rbar-track">
                                    <div className="rbar-fill" style={{ width: "1%" }}></div>
                                </div>
                                <span className="rbar-cnt">3</span>
                            </div>
                            <div className="rbar">
                                <span className="rbar-num">1</span>
                                <div className="rbar-track">
                                    <div className="rbar-fill" style={{ width: "0.3%" }}></div>
                                </div>
                                <span className="rbar-cnt">1</span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "8px",
                                marginTop: "20px",
                            }}
                        >
                            <div
                                style={{
                                    background: "var(--accent-lt)",
                                    borderRadius: "9px",
                                    padding: "12px",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "1.4rem",
                                        color: "var(--accent)",
                                    }}
                                >
                                    98%
                                </div>
                                <div style={{ fontSize: "0.68rem", color: "var(--ink3)" }}>
                                    On-time
                                </div>
                            </div>
                            <div
                                style={{
                                    background: "var(--accent-lt)",
                                    borderRadius: "9px",
                                    padding: "12px",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "1.4rem",
                                        color: "var(--accent)",
                                    }}
                                >
                                    100%
                                </div>
                                <div style={{ fontSize: "0.68rem", color: "var(--ink3)" }}>
                                    Response Rate
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-list">
                        <div className="earn-title" style={{ marginBottom: "4px" }}>
                            Customer Reviews
                        </div>
                        <div className="earn-sub">Most recent feedback</div>
                        <div className="review-items">
                            <div className="review-item">
                                <div className="review-header">
                                    <div
                                        className="rev-avatar"
                                        style={{ background: "#dbeafe", color: "#1d4ed8" }}
                                    >
                                        NK
                                    </div>
                                    <div>
                                        <div className="rev-name">Neha Kulkarni</div>
                                        <div className="rev-date">04 May 2026</div>
                                    </div>
                                    <div className="rev-stars">★★★★★</div>
                                </div>
                                <div className="rev-text">
                                    Rajesh was absolutely fantastic. He arrived 10 minutes
                                    early, diagnosed the pipe issue in under 5 minutes, and had
                                    it fixed within the hour. Professional, clean, and very
                                    reasonably priced!
                                </div>
                                <div className="rev-service">
                                    Service: Pipe Leak Repair · ₹750
                                </div>
                            </div>
                            <div className="review-item">
                                <div className="review-header">
                                    <div
                                        className="rev-avatar"
                                        style={{ background: "#fef3c7", color: "#b45309" }}
                                    >
                                        AM
                                    </div>
                                    <div>
                                        <div className="rev-name">Arjun Mehta</div>
                                        <div className="rev-date">01 May 2026</div>
                                    </div>
                                    <div className="rev-stars">★★★★★</div>
                                </div>
                                <div className="rev-text">
                                    Third time booking Rajesh and he never disappoints. Fixed
                                    the bathroom tap and water heater connection perfectly. Will
                                    definitely book again.
                                </div>
                                <div className="rev-service">Service: Tap Replacement · ₹600</div>
                            </div>
                            <div className="review-item">
                                <div className="review-header">
                                    <div
                                        className="rev-avatar"
                                        style={{ background: "#dcfce7", color: "#15803d" }}
                                    >
                                        RP
                                    </div>
                                    <div>
                                        <div className="rev-name">Riya Patel</div>
                                        <div className="rev-date">28 Apr 2026</div>
                                    </div>
                                    <div className="rev-stars">★★★★★</div>
                                </div>
                                <div className="rev-text">
                                    Very skilled and honest. He told me the cheaper alternative
                                    and did not try to upsell unnecessary parts. Rare to find
                                    such integrity!
                                </div>
                                <div className="rev-service">
                                    Service: Drainage Cleaning · ₹400
                                </div>
                            </div>
                            <div className="review-item">
                                <div className="review-header">
                                    <div
                                        className="rev-avatar"
                                        style={{ background: "#ede9fe", color: "#7c3aed" }}
                                    >
                                        SK
                                    </div>
                                    <div>
                                        <div className="rev-name">Suresh Kamble</div>
                                        <div className="rev-date">22 Apr 2026</div>
                                    </div>
                                    <div className="rev-stars">★★★★☆</div>
                                </div>
                                <div className="rev-text">
                                    Good work overall. Took slightly longer than estimated but
                                    quality of the fix was excellent. Would book again.
                                </div>
                                <div className="rev-service">
                                    Service: Bathroom Fitting · ₹1,200
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewTab