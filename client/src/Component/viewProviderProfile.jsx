import { useState } from "react";

const provider = {
    name: "Rajesh Kumar",
    title: "Master Electrician & Smart Home Specialist",
    avatar: null,
    initials: "RK",
    rating: 0.0,
    reviewCount: 0,
    completedJobs: 0,
    experience: 0,
    location: "Pune, Maharashtra",
    responseTime: "Usually replies in 30 mins",
    verified: true,
    badge: "Top Pro",
    hourlyRate: "₹00",
    about:
        "Certified electrician with 11 years of experience in residential and commercial wiring, smart home automation, and solar panel installation. I take pride in clean, safe work with zero shortcuts.",
    skills: [
        "Home Wiring & Rewiring",
        "Smart Home Automation",
        "Solar Panel Installation",
        "CCTV & Security Systems",
        "Generator & Inverter Setup",
        "Electrical Panel Upgrades",
    ],
    availability: {
        Mon: [true, true, false, true],
        Tue: [true, true, true, false],
        Wed: [false, true, true, true],
        Thu: [true, false, true, true],
        Fri: [true, true, true, false],
        Sat: [false, false, true, true],
        Sun: [false, false, false, false],
    },
    slots: ["9–11 AM", "11–1 PM", "2–4 PM", "4–6 PM"],
    reviews: [
        {
            id: 1,
            name: "Priya Sharma",
            initials: "PS",
            rating: 5,
            date: "2 days ago",
            text: "Rajesh did an outstanding job setting up smart switches throughout my flat. Clean work, explained everything, and finished ahead of schedule.",
            service: "Smart Home Setup",
        },
        {
            id: 2,
            name: "Aditya Mehta",
            initials: "AM",
            rating: 5,
            date: "1 week ago",
            text: "Got my solar panels installed — very professional. He coordinated with the local utility too. Highly recommended.",
            service: "Solar Installation",
        },
        {
            id: 3,
            name: "Sonal Joshi",
            initials: "SJ",
            rating: 4,
            date: "2 weeks ago",
            text: "Good work on the wiring repair. Arrived on time and cleaned up after himself. Would hire again.",
            service: "Wiring Repair",
        },
    ],
};

const tabs = ["Overview", "Reviews", "Availability"];

const Stars = ({ rating, size = 14 }) => (
    <span style={{ display: "inline-flex", gap: 2 }}>
        {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} width={size} height={size} viewBox="0 0 24 24" fill={s <= Math.round(rating) ? "#f59e0b" : "#e5e7eb"}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
            </svg>
        ))}
    </span>
);

export default function ProviderProfile() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [bookingOpen, setBookingOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#f8f7f4", minHeight: "100vh", color: "#1a1a1a", maxWidth: "800px", margin: "0 auto" }}>
            {/* Hero Header */}
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f3460 100%)", color: "#fff", padding: "0 0 0 0", }}>
                <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 0" }}>
                    <div style={{ display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap" }}>
                        {/* Avatar */}
                        <div style={{ position: "relative", flexShrink: 0 }}>
                            <div style={{
                                width: 100, height: 100, borderRadius: "50%",
                                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 32, fontWeight: 700, color: "#fff",
                                border: "3px solid rgba(255,255,255,0.15)",
                            }}>
                                {provider.initials}
                            </div>
                            <div style={{
                                position: "absolute", bottom: 4, right: 4,
                                background: "#22c55e", borderRadius: "50%",
                                width: 16, height: 16, border: "2px solid #0f172a",
                            }} />
                        </div>

                        {/* Info */}
                        <div style={{ flex: 1, minWidth: 220 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                                <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>{provider.name}</h1>
                                {provider.verified && (
                                    <span style={{ background: "#3b82f6", color: "#fff", fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>✓ Verified</span>
                                )}
                                <span style={{ background: "#f59e0b", color: "#000", fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 700 }}>{provider.badge}</span>
                            </div>
                            <p style={{ margin: "0 0 14px", fontSize: 15, color: "#94a3b8", fontWeight: 500 }}>{provider.title}</p>

                            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                    <Stars rating={provider.rating} size={14} />
                                    <span style={{ fontSize: 14, fontWeight: 700, color: "#fbbf24" }}>{provider.rating}</span>
                                    <span style={{ fontSize: 13, color: "#64748b" }}>({provider.reviewCount} reviews)</span>
                                </div>
                                <span style={{ fontSize: 13, color: "#64748b" }}>📍 {provider.location}</span>
                                <span style={{ fontSize: 13, color: "#64748b" }}>⏱ {provider.responseTime}</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end", minWidth: 160 }}>
                            <div style={{ textAlign: "right" }}>
                                <span style={{ fontSize: 28, fontWeight: 800, color: "#fff" }}>{provider.hourlyRate}</span>
                                <span style={{ fontSize: 13, color: "#94a3b8" }}> / hr</span>
                            </div>
                            <button
                                onClick={() => setBookingOpen(true)}
                                style={{
                                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                                    color: "#fff", border: "none", borderRadius: 10,
                                    padding: "13px 28px", fontSize: 15, fontWeight: 700,
                                    cursor: "pointer", width: "100%", letterSpacing: "0.01em",
                                    boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
                                }}
                            >
                                Book Now
                            </button>
                            <button style={{
                                background: "transparent", color: "#94a3b8",
                                border: "1px solid #334155", borderRadius: 10,
                                padding: "10px 28px", fontSize: 14, cursor: "pointer", width: "100%",
                            }}>
                                Message
                            </button>
                        </div>
                    </div>

                    {/* Stats bar */}
                    <div style={{
                        display: "flex", gap: 0, marginTop: 36,
                        borderTop: "1px solid rgba(255,255,255,0.07)",
                    }}>
                        {[
                            { label: "Jobs Done", value: provider.completedJobs },
                            { label: "Years Exp.", value: `${provider.experience}+` },
                            { label: "Rating", value: provider.rating },
                            { label: "On-time Rate", value: "00%" },
                        ].map((s, i) => (
                            <div key={i} style={{
                                flex: 1, textAlign: "center", padding: "18px 12px",
                                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                            }}>
                                <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{s.value}</div>
                                <div style={{ fontSize: 11, color: "#64748b", marginTop: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tab Bar */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", display: "flex", gap: 4 }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: "transparent", border: "none", cursor: "pointer",
                                padding: "14px 20px", fontSize: 14, fontWeight: 600,
                                color: activeTab === tab ? "#fff" : "#64748b",
                                borderBottom: activeTab === tab ? "2px solid #3b82f6" : "2px solid transparent",
                                transition: "all 0.15s",
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>

                {/* ── OVERVIEW ── */}
                {activeTab === "Overview" && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>
                        <div>
                            <Section title="About">
                                <p style={{ margin: 0, lineHeight: 1.7, color: "#374151", fontSize: 15 }}>{provider.about}</p>
                            </Section>

                            <Section title="Services Offered">
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                    {provider.skills.map((s) => (
                                        <span key={s} style={{
                                            background: "#eff6ff", color: "#1d4ed8", padding: "7px 14px",
                                            borderRadius: 20, fontSize: 13, fontWeight: 600,
                                            border: "1px solid #bfdbfe",
                                        }}>{s}</span>
                                    ))}
                                </div>
                            </Section>
                        </div>

                        {/* Sidebar */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                                <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>Quick Info</h3>
                                {[
                                    ["📍", "Location", provider.location],
                                    ["⚡", "Response", "< 30 min"],
                                    ["🛡️", "Insurance", "Covered"],
                                    ["🧾", "GST", "Registered"],
                                ].map(([icon, label, val]) => (
                                    <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f3f4f6", fontSize: 13 }}>
                                        <span style={{ color: "#6b7280" }}>{icon} {label}</span>
                                        <span style={{ fontWeight: 600, color: "#111" }}>{val}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => setBookingOpen(true)}
                                style={{
                                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                                    color: "#fff", border: "none", borderRadius: 12,
                                    padding: "16px", fontSize: 15, fontWeight: 700,
                                    cursor: "pointer", width: "100%",
                                    boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                                }}
                            >
                                Book Rajesh — {provider.hourlyRate}/hr
                            </button>
                        </div>
                    </div>
                )}

                {/* ── REVIEWS ── */}
                {activeTab === "Reviews" && (
                    <div>
                        {/* Summary */}
                        <div style={{
                            background: "#fff", borderRadius: 16, padding: 28,
                            boxShadow: "0 1px 8px rgba(0,0,0,0.06)", marginBottom: 24,
                            display: "flex", gap: 40, alignItems: "center",
                        }}>
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontSize: 56, fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>{provider.rating}</div>
                                <Stars rating={provider.rating} size={20} />
                                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>{provider.reviewCount} reviews</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                {[5, 4, 3, 2, 1].map((star) => {
                                    const pct = star === 5 ? 78 : star === 4 ? 16 : star === 3 ? 4 : 1;
                                    return (
                                        <div key={star} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                                            <span style={{ fontSize: 12, width: 8, color: "#6b7280" }}>{star}</span>
                                            <svg width={12} height={12} viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z" /></svg>
                                            <div style={{ flex: 1, height: 8, background: "#f1f5f9", borderRadius: 4, overflow: "hidden" }}>
                                                <div style={{ width: `${pct}%`, height: "100%", background: "#f59e0b", borderRadius: 4 }} />
                                            </div>
                                            <span style={{ fontSize: 12, color: "#6b7280", width: 28 }}>{pct}%</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Review cards */}
                        {provider.reviews.map((r) => (
                            <div key={r.id} style={{
                                background: "#fff", borderRadius: 14, padding: 22,
                                boxShadow: "0 1px 8px rgba(0,0,0,0.06)", marginBottom: 14,
                            }}>
                                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                                    <div style={{
                                        width: 44, height: 44, borderRadius: "50%",
                                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "#fff", fontWeight: 700, fontSize: 14, flexShrink: 0,
                                    }}>{r.initials}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                                            <div>
                                                <span style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</span>
                                                <span style={{ margin: "0 8px", color: "#d1d5db" }}>·</span>
                                                <span style={{ fontSize: 12, color: "#9ca3af" }}>{r.date}</span>
                                            </div>
                                            <Stars rating={r.rating} size={12} />
                                        </div>
                                        <span style={{ fontSize: 11, background: "#f0fdf4", color: "#16a34a", padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>{r.service}</span>
                                        <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "#374151" }}>{r.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── AVAILABILITY ── */}
                {activeTab === "Availability" && (
                    <Section title="This Week's Availability">
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: "10px 14px", textAlign: "left", fontSize: 12, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Time</th>
                                        {Object.keys(provider.availability).map((day) => (
                                            <th key={day} style={{ padding: "10px 14px", textAlign: "center", fontSize: 12, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{day}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {provider.slots.map((slot, si) => (
                                        <tr key={slot} style={{ borderTop: "1px solid #f3f4f6" }}>
                                            <td style={{ padding: "12px 14px", fontSize: 13, fontWeight: 600, color: "#374151", whiteSpace: "nowrap" }}>{slot}</td>
                                            {Object.entries(provider.availability).map(([day, slots]) => {
                                                const avail = slots[si];
                                                const isSelected = selectedDay === day && selectedSlot === si;
                                                return (
                                                    <td key={day} style={{ padding: "8px 14px", textAlign: "center" }}>
                                                        {avail ? (
                                                            <button
                                                                onClick={() => { setSelectedDay(day); setSelectedSlot(si); }}
                                                                style={{
                                                                    background: isSelected ? "#3b82f6" : "#eff6ff",
                                                                    color: isSelected ? "#fff" : "#2563eb",
                                                                    border: isSelected ? "none" : "1px solid #bfdbfe",
                                                                    borderRadius: 8, padding: "6px 10px",
                                                                    fontSize: 12, fontWeight: 600, cursor: "pointer",
                                                                    transition: "all 0.15s",
                                                                }}
                                                            >
                                                                {isSelected ? "✓" : "Open"}
                                                            </button>
                                                        ) : (
                                                            <span style={{ fontSize: 12, color: "#d1d5db" }}>—</span>
                                                        )}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {selectedDay && selectedSlot !== null && (
                            <div style={{
                                marginTop: 20, background: "#eff6ff", borderRadius: 12, padding: 16,
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                border: "1px solid #bfdbfe",
                            }}>
                                <span style={{ fontSize: 14, fontWeight: 600, color: "#1d4ed8" }}>
                                    Selected: {selectedDay} · {provider.slots[selectedSlot]}
                                </span>
                                <button
                                    onClick={() => setBookingOpen(true)}
                                    style={{
                                        background: "#3b82f6", color: "#fff", border: "none",
                                        borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
                                    }}
                                >
                                    Confirm Slot
                                </button>
                            </div>
                        )}
                    </Section>
                )}
            </div>

            {/* Booking Modal */}
            {bookingOpen && (
                <div style={{
                    position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 100, padding: 16,
                }} onClick={() => setBookingOpen(false)}>
                    <div style={{
                        background: "#fff", borderRadius: 20, padding: 32,
                        width: "100%", maxWidth: 480,
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    }} onClick={e => e.stopPropagation()}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>Book {provider.name}</h2>
                            <button onClick={() => setBookingOpen(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#6b7280" }}>✕</button>
                        </div>

                        {[
                            ["Your Name", "text", "Full name"],
                            ["Phone Number", "tel", "+91 XXXXX XXXXX"],
                            ["Service Address", "text", "Flat, Building, Area, Pune"],
                            ["Preferred Date", "date", ""],
                        ].map(([label, type, ph]) => (
                            <div key={label} style={{ marginBottom: 16 }}>
                                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>{label}</label>
                                <input type={type} placeholder={ph} style={{
                                    width: "100%", padding: "11px 14px", borderRadius: 10,
                                    border: "1px solid #d1d5db", fontSize: 14, outline: "none",
                                    boxSizing: "border-box",
                                }} />
                            </div>
                        ))}

                        <div style={{ marginBottom: 24 }}>
                            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Service Type</label>
                            <select style={{
                                width: "100%", padding: "11px 14px", borderRadius: 10,
                                border: "1px solid #d1d5db", fontSize: 14, outline: "none",
                                background: "#fff", boxSizing: "border-box",
                            }}>
                                {provider.skills.map(s => <option key={s}>{s}</option>)}
                            </select>
                        </div>

                        <div style={{ background: "#f8fafc", borderRadius: 12, padding: 14, marginBottom: 20, fontSize: 13, color: "#374151" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                <span>Service Rate</span><span style={{ fontWeight: 700 }}>{provider.hourlyRate}/hr</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <span>Booking fee</span><span style={{ fontWeight: 700 }}>₹0</span>
                            </div>
                        </div>

                        <button
                            onClick={() => { setBookingOpen(false); alert("Booking confirmed! Rajesh will contact you shortly."); }}
                            style={{
                                width: "100%", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                                color: "#fff", border: "none", borderRadius: 12,
                                padding: "15px", fontSize: 16, fontWeight: 700, cursor: "pointer",
                            }}
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 1px 8px rgba(0,0,0,0.06)", marginBottom: 20 }}>
            <h2 style={{ margin: "0 0 18px", fontSize: 16, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" }}>{title}</h2>
            {children}
        </div>
    );
}
