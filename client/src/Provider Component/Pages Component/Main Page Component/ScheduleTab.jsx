function ScheduleTab() {
    return (
        <>
            <div id="tab-schedule" className="tab-view content">
                <div className="schedule-grid">
                    {/* <!-- Calendar --> */}
                    <div className="schedule-card">
                        <div className="earn-title">May 2026</div>
                        <div className="earn-sub">Your booking calendar</div>
                        <div className="cal-header">
                            <button className="cal-nav">‹</button>
                            <div className="cal-month">MAY 2026</div>
                            <button className="cal-nav">›</button>
                        </div>
                        <div className="cal-grid" id="calGrid"></div>
                    </div>
                    {/* <!-- Upcoming --> */}
                    <div className="schedule-card">
                        <div className="earn-title">Upcoming Bookings</div>
                        <div className="earn-sub">Today & next 7 days</div>
                        <div className="upcoming-list">
                            <div className="upcoming-item urgent">
                                <div>
                                    <div className="upcoming-time">10:30</div>
                                    <div className="upcoming-time-sub">AM · Today</div>
                                </div>
                                <div>
                                    <div className="upcoming-info-name">Neha Kulkarni</div>
                                    <div className="upcoming-info-svc">🔧 Pipe Leak Repair</div>
                                    <div className="upcoming-info-loc">📍 Baner, Pune</div>
                                </div>
                                <div className="upcoming-amt">₹750</div>
                            </div>
                            <div className="upcoming-item normal">
                                <div>
                                    <div className="upcoming-time">02:00</div>
                                    <div className="upcoming-time-sub">PM · Today</div>
                                </div>
                                <div>
                                    <div className="upcoming-info-name">Priya Ghosh</div>
                                    <div className="upcoming-info-svc">🔧 Water Tank Cleaning</div>
                                    <div className="upcoming-info-loc">📍 Wakad, Pune</div>
                                </div>
                                <div className="upcoming-amt">₹500</div>
                            </div>
                            <div className="upcoming-item pending">
                                <div>
                                    <div className="upcoming-time">04:30</div>
                                    <div className="upcoming-time-sub">PM · Today</div>
                                </div>
                                <div>
                                    <div className="upcoming-info-name">Vikas Deshpande</div>
                                    <div className="upcoming-info-svc">🔧 Drainage Blockage</div>
                                    <div className="upcoming-info-loc">📍 Hadapsar, Pune</div>
                                </div>
                                <div className="upcoming-amt">₹600</div>
                            </div>
                            <div className="upcoming-item normal">
                                <div>
                                    <div className="upcoming-time">09:00</div>
                                    <div className="upcoming-time-sub">AM · Tmrw</div>
                                </div>
                                <div>
                                    <div className="upcoming-info-name">Suresh Kamble</div>
                                    <div className="upcoming-info-svc">🔧 Tap Replacement</div>
                                    <div className="upcoming-info-loc">📍 Kothrud, Pune</div>
                                </div>
                                <div className="upcoming-amt">₹350</div>
                            </div>
                            <div className="upcoming-item normal">
                                <div>
                                    <div className="upcoming-time">11:30</div>
                                    <div className="upcoming-time-sub">AM · Tmrw</div>
                                </div>
                                <div>
                                    <div className="upcoming-info-name">Arjun Mehta</div>
                                    <div className="upcoming-info-svc">🔧 Bathroom Fitting</div>
                                    <div className="upcoming-info-loc">📍 Viman Nagar, Pune</div>
                                </div>
                                <div className="upcoming-amt">₹1,200</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScheduleTab;