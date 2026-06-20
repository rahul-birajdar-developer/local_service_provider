import "./bookingPage.css"
import { useState } from "react"
import { Link } from "react-router-dom";

function UserBookingPage() {

    const bookingsData = [
        {
            id: "BK-2024-0081",
            provider: "Meena Didi",
            service: "Deep Home Cleaning (2BHK)",
            category: "Home Cleaning",
            icon: "🧹",
            type: "At Home",
            date: "Thu, 15 May 2025",
            time: "9:00 AM – 1:00 PM",
            address: "Koregaon Park, Pune",
            amount: 899,
            status: "upcoming",
            payment: "paid",
            paymentMethod: "UPI"
        },
        {
            id: "BK-2024-0082",
            provider: "Suresh Bhai",
            service: "Pipe Leakage Repair & Fitting",
            category: "Plumbing",
            icon: "🔧",
            type: "At Home",
            date: "Fri, 16 May 2025",
            time: "10:00 AM – 2:00 PM",
            address: "FC Road, Pune",
            amount: 1299,
            status: "upcoming",
            payment: "paid",
            paymentMethod: "UPI"
        },
        {
            id: "BK-2024-0079",
            provider: "Kavya Beauty Parlour",
            service: "Full Hair Treatment + Facial",
            category: "Beauty & Salon",
            icon: "💇",
            type: "At Home",
            date: "Today, 14 May 2025",
            time: "11:00 AM – 2:00 PM",
            address: "Koregaon Park, Pune",
            amount: 1299,
            status: "ongoing",
            payment: "paid",
            paymentMethod: "UPI"
        },
        {
            id: "BK-2024-0074",
            provider: "Raj Tiffin Service",
            service: "Monthly Tiffin Subscription (30 days)",
            category: "Tiffin Service",
            icon: "🍱",
            type: "Subscription",
            date: "1 Apr – 30 Apr 2025",
            time: "N/A",
            address: "Koregaon Park, Pune",
            amount: 2700,
            status: "completed",
            payment: "paid",
            paymentMethod: "UPI"
        },
        {
            id: "BK-2024-0069",
            provider: "Rajesh Electricals",
            service: "Fan & Light Installation (3 rooms)",
            category: "Electrician",
            icon: "💡",
            type: "At Home",
            date: "5 May 2025",
            time: "2:00 PM – 4:30 PM",
            address: "Koregaon Park, Pune",
            amount: 750,
            status: "completed",
            payment: "paid",
            paymentMethod: "UPI"
        },
        {
            id: "BK-2024-0071",
            provider: "SparkClean Car Wash",
            service: "Full Car Wash + Interior Cleaning",
            category: "Car Wash",
            icon: "🚗",
            type: "At Doorstep",
            date: "10 May 2025",
            time: "3:00 PM – 4:00 PM",
            address: "Koregaon Park, Pune",
            amount: 299,
            status: "cancelled",
            payment: "refunded",
            paymentMethod: "UPI"
        }
    ];



    const [active, setActive] = useState("All");

    return (
        <>
            <div className="page" id="page-bookings">
                <div className="booking-layout">
                    <div className="booking-header">
                        <div>
                            <h1>My Bookings</h1>
                            <div style={{ fontSize: "13px", color: "#7a5c44", marginTop: "3px" }}>6 total · 2 upcoming</div>
                        </div>
                        <Link to="/providers">
                            <button className="btn btn-primary" >+ Book New Service</button>
                        </Link>
                    </div>

                    <div className="booking-filter-bar">
                        <div className={`bk-filter ${active === "All" ? 'active' : ''}`} onClick={() => setActive("All")}>All (6)</div>
                        <div className={`bk-filter ${active === "Upcoming" ? 'active' : ''}`} onClick={() => setActive("Upcoming")}>🔵 Upcoming (2)</div>
                        <div className={`bk-filter ${active === "Ongoing" ? 'active' : ''}`} onClick={() => setActive("Ongoing")}>🟢 Ongoing (1)</div>
                        <div className={`bk-filter ${active === "Completed" ? 'active' : ''}`} onClick={() => setActive("Completed")}>✅ Completed (2)</div>
                        <div className={`bk-filter ${active === "Cancelled" ? 'active' : ''}`} onClick={() => setActive("Cancelled")}>❌ Cancelled (1)</div>
                    </div>

                    <div id="bookingsList">
                        {/* <!-- BOOKING 1 – Upcoming --> */}
                        {bookingsData.filter(bk => active === "All" ? true : bk.status.toLowerCase() === active.toLowerCase()).map((bk, index) => (
                            <div className="booking-card" data-status="upcoming" key={index}>
                                <div className="bk-top">
                                    <div className="bk-status-stripe" style={{ background: "#2563a8" }}></div>
                                    <div className="bk-top-inner">
                                        <div className="bk-provider-avatar" style={{ background: "#dbeafe" }}>{bk.icon}</div>
                                        <div className="bk-provider-info">
                                            <div className="bk-provider-name">{bk.providerName}</div>
                                            <div className="bk-service-name">{bk.service}</div>
                                            <div className="bk-tags">
                                                <span className="bk-tag bk-tag-cat">{bk.category}</span>
                                                <span className="bk-tag bk-tag-type">{bk.type}</span>
                                            </div>
                                        </div>
                                        <div className="bk-right-top">
                                            <div className="bk-id">{bk.id}</div>
                                            <div className="bk-status upcoming">{bk.status}</div>
                                            <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                                                <button className="btn btn-sm btn-outline ">📞 Call</button>
                                                <button className="btn btn-sm btn-outline" style={{ color: "#c0392b" }} >Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bk-timeline">
                                    <div className="timeline-steps">
                                        <div className="tl-step done"><div className="tl-dot">✓</div><div className="tl-label">Requested</div></div>
                                        <div className="tl-step done"><div className="tl-dot">✓</div><div className="tl-label">Confirmed</div></div>
                                        <div className="tl-step current"><div className="tl-dot">→</div><div className="tl-label">Scheduled</div></div>
                                        <div className="tl-step"><div className="tl-dot">4</div><div className="tl-label">In Progress</div></div>
                                        <div className="tl-step"><div className="tl-dot">5</div><div className="tl-label">Completed</div></div>
                                    </div>
                                </div>
                                <div className="bk-body">
                                    <div className="bk-detail"><div className="bk-label">📅 Date</div><div className="bk-val">{bk.date}</div></div>
                                    <div className="bk-detail"><div className="bk-label">🕐 Time</div><div className="bk-val">{bk.time}</div></div>
                                    <div className="bk-detail"><div className="bk-label">📍 Address</div><div className="bk-val">{bk.address}</div></div>
                                    <div className="bk-detail"><div className="bk-label">💰 Amount</div><div className="bk-val price">{bk.amount}</div></div>
                                </div>
                                <div className="bk-bottom">
                                    <div style={{ fontSize: "12px", background: "#e8f5ef", color: "#2d7a5f", padding: "5px 12px", borderRadius: "20px", fontWeight: "600" }}>✅ {bk.payment}</div>
                                    <button className="btn btn-sm btn-outline" style={{ marginLeft: "auto" }} >📄 Invoice</button>
                                    <button className="btn btn-sm btn-outline" >🗓️ Reschedule</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserBookingPage;