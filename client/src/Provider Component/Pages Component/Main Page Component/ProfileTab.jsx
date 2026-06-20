function ProfileTab() {
    return (
        <>
            <div className="profile-grid">
                <div className="profile-card">
                    <div className="profile-avatar-wrap">
                        <div className="big-avatar">RK</div>
                        <div>
                            <div className="profile-name">Rajesh Kumar</div>
                            <div className="profile-cat">🔧 Professional Plumber</div>
                        </div>
                        <div className="rating-row">
                            <div className="stars">★★★★★</div>
                            <div className="rating-num">4.9</div>
                            <div className="rating-cnt">(312 reviews)</div>
                        </div>
                        <div className="profile-badges">
                            <span className="pbadge pbadge-verified">✓ Verified Pro</span>
                            <span className="pbadge pbadge-top">🏆 Top Rated</span>
                            <span className="pbadge pbadge-exp">8 yrs exp</span>
                        </div>
                    </div>

                    <div className="profile-stat-row">
                        <div className="pstat">
                            <div className="pstat-num">312</div>
                            <div className="pstat-lbl">Total Jobs</div>
                        </div>
                        <div className="pstat">
                            <div className="pstat-num" style={{ color: "var(--accent)" }}>
                                ₹78K
                            </div>
                            <div className="pstat-lbl">Earned</div>
                        </div>
                        <div className="pstat">
                            <div className="pstat-num" style={{ color: "var(--blue)" }}>
                                92%
                            </div>
                            <div className="pstat-lbl">Completion</div>
                        </div>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <div className="earn-sub">Availability</div>
                        <div className="avail-grid">
                            <div className="avail-day on">
                                <span className="avail-day-name">Mon</span>
                                <div className="avail-toggle"></div>
                            </div>
                            <div className="avail-day on">
                                <span className="avail-day-name">Tue</span>
                                <div className="avail-toggle"></div>
                            </div>
                            <div className="avail-day on">
                                <span className="avail-day-name">Wed</span>
                                <div className="avail-toggle"></div>
                            </div>
                            <div className="avail-day on">
                                <span className="avail-day-name">Thu</span>
                                <div className="avail-toggle"></div>
                            </div>
                            o
                            <div className="avail-day on">
                                <span className="avail-day-name">Fri</span>
                                <div className="avail-toggle"></div>
                            </div>
                            <div className="avail-day">
                                <span className="avail-day-name">Sat</span>
                                <div className="avail-toggle"></div>
                            </div>
                            <div className="avail-day">
                                <span className="avail-day-name">Sun</span>
                                <div className="avail-toggle"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-card">
                    <div className="earn-title" style={{ marginBottom: "4px" }}>
                        Edit Profile
                    </div>
                    <div className="earn-sub">Keep your info up to date</div>
                    <div className="profile-form">
                        <div className="pf-row">
                            <div className="pf-group">
                                <label className="pf-label">First Name</label>
                                <input className="pf-input" value="Rajesh" />
                            </div>
                            <div className="pf-group">
                                <label className="pf-label">Last Name</label>
                                <input className="pf-input" value="Kumar" />
                            </div>
                        </div>
                        <div className="pf-group">
                            <label className="pf-label">Email</label>
                            <input
                                className="pf-input"
                                type="email"
                                value="rajesh@fixit.pro"
                            />
                        </div>
                        <div className="pf-row">
                            <div className="pf-group">
                                <label className="pf-label">Phone</label>
                                <input className="pf-input" value="+91 98765 12345" />
                            </div>
                            <div className="pf-group">
                                <label className="pf-label">Experience (yrs)</label>
                                <input className="pf-input" type="number" value="8" />
                            </div>
                        </div>
                        <div className="pf-row">
                            <div className="pf-group">
                                <label className="pf-label">Category</label>
                                <select className="pf-select">
                                    <option selected>Plumbing</option>
                                    <option>Electrical</option>
                                    <option>Cleaning</option>
                                    <option>Carpentry</option>
                                </select>
                            </div>
                            <div className="pf-group">
                                <label className="pf-label">Hourly Rate (₹)</label>
                                <input className="pf-input" type="number" value="250" />
                            </div>
                        </div>
                        <div className="pf-group">
                            <label className="pf-label">Service Area</label>
                            <input
                                className="pf-input"
                                value="Baner, Aundh, Wakad, Kothrud, Pune"
                            />
                        </div>
                        <div className="pf-group">
                            <label className="pf-label">UPI ID (for payouts)</label>
                            <input className="pf-input" value="rajesh@upi" />
                        </div>
                        <div className="pf-group">
                            <label className="pf-label">Bio / About</label>
                            <textarea className="pf-textarea">
                                Professional plumber with 8 years of experience in
                                residential and commercial projects. Specializing in leak
                                repairs, bathroom fittings, and drainage systems. Fully
                                insured and background verified.
                            </textarea>
                        </div>
                        <div className="pf-row">
                            <div className="pf-group">
                                <label className="pf-label">Skills</label>
                                <input
                                    className="pf-input"
                                    value="Pipe Repair, Drainage, Fittings"
                                />
                            </div>
                            <div className="pf-group">
                                <label className="pf-label">Languages</label>
                                <input className="pf-input" value="Hindi, Marathi, English" />
                            </div>
                        </div>
                        <button
                            className="pf-save"
                            onclick="showToast('✅ Profile saved successfully!')"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileTab;