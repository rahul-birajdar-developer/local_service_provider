import { useState, useEffect } from "react";

// ── Design tokens ──────────────────────────────────────────────────────────
const T = {
    bg: "#060610", sidebar: "#0c0c1a", surface: "#101020", surface2: "#181830",
    card: "#111125", border: "rgba(255,255,255,0.06)", border2: "rgba(255,255,255,0.1)",
    accent: "#f97316", accentDim: "rgba(249,115,22,0.15)", accentGlow: "rgba(249,115,22,0.3)",
    text: "#eeeef5", muted: "#7070a0", dim: "#3a3a5a",
    success: "#22c55e", danger: "#ef4444", warning: "#f59e0b", info: "#3b82f6", purple: "#8b5cf6",
};

// ── Data ───────────────────────────────────────────────────────────────────
const USERS = [
    { id: 1, init: "NK", bg: "rgba(59,130,246,0.15)", col: "#60a5fa", name: "Neha Kulkarni", email: "neha@email.com", phone: "+91 98201 11234", city: "Baner", joined: "Jan 2025", bookings: 24, status: "Active" },
    { id: 2, init: "AM", bg: "rgba(249,115,22,0.15)", col: "#fb923c", name: "Arjun Mehta", email: "arjun@email.com", phone: "+91 99001 22345", city: "Viman Nagar", joined: "Mar 2025", bookings: 17, status: "Active" },
    { id: 3, init: "RP", bg: "rgba(34,197,94,0.15)", col: "#4ade80", name: "Riya Patel", email: "riya@email.com", phone: "+91 90001 33456", city: "Aundh", joined: "Feb 2025", bookings: 31, status: "Active" },
    { id: 4, init: "SK", bg: "rgba(239,68,68,0.15)", col: "#f87171", name: "Suresh Kamble", email: "suresh@email.com", phone: "+91 87654 44567", city: "Kothrud", joined: "Nov 2024", bookings: 8, status: "Suspended" },
    { id: 5, init: "PG", bg: "rgba(168,85,247,0.15)", col: "#c084fc", name: "Priya Ghosh", email: "priya@email.com", phone: "+91 91234 55678", city: "Wakad", joined: "Apr 2025", bookings: 5, status: "Active" },
];

const PROVIDERS = [
    { id: 1, init: "RK", bg: "rgba(59,130,246,0.15)", col: "#60a5fa", name: "Rajesh Kumar", phone: "+91 98765 12345", cat: "⚡ Electrical", exp: "11 yrs", rating: "★★★★★", ratingVal: 4.9, jobs: 312, earnings: "₹1,40,400", status: "Active" },
    { id: 2, init: "AP", bg: "rgba(249,115,22,0.15)", col: "#fb923c", name: "Anil Pawar", phone: "+91 76543 23456", cat: "🔧 Plumbing", exp: "8 yrs", rating: "★★★★★", ratingVal: 4.8, jobs: 289, earnings: "₹86,700", status: "Active" },
    { id: 3, init: "SM", bg: "rgba(34,197,94,0.15)", col: "#4ade80", name: "Sunita Mahadik", phone: "+91 87654 34567", cat: "🧹 Cleaning", exp: "5 yrs", rating: "★★★★☆", ratingVal: 4.6, jobs: 198, earnings: "₹35,640", status: "Active" },
    { id: 4, init: "MR", bg: "rgba(245,158,11,0.15)", col: "#fbbf24", name: "Mahesh Rane", phone: "+91 65432 45678", cat: "🎨 Painting", exp: "6 yrs", rating: "★★★★☆", ratingVal: null, jobs: 0, earnings: "—", status: "Pending" },
    { id: 5, init: "VD", bg: "rgba(168,85,247,0.15)", col: "#c084fc", name: "Vijay Deshmukh", phone: "+91 54321 56789", cat: "🪚 Carpentry", exp: "15 yrs", rating: "★★★★☆", ratingVal: 4.7, jobs: 241, earnings: "₹84,350", status: "Active" },
    { id: 6, init: "BK", bg: "rgba(239,68,68,0.15)", col: "#f87171", name: "Balaji Kamte", phone: "+91 43210 67890", cat: "🌿 Gardening", exp: "3 yrs", rating: "★★★☆☆", ratingVal: 3.1, jobs: 22, earnings: "₹3,960", status: "Suspended" },
    { id: 7, init: "PJ", bg: "rgba(6,182,212,0.15)", col: "#22d3ee", name: "Priya Jadhav", phone: "+91 91111 78901", cat: "❄️ AC Repair", exp: "9 yrs", rating: "★★★★★", ratingVal: 4.8, jobs: 208, earnings: "₹83,200", status: "Active" },
];

const BOOKINGS = [
    { id: "#BK-2841", customer: "Neha Kulkarni", provider: "Rajesh Kumar", service: "🔧 Plumbing", datetime: "04 May, 10:30", amount: "₹750", status: "Completed" },
    { id: "#BK-2840", customer: "Arjun Mehta", provider: "Anil Pawar", service: "⚡ Electrical", datetime: "04 May, 09:00", amount: "₹900", status: "Completed" },
    { id: "#BK-2839", customer: "Riya Patel", provider: "Sunita Mahadik", service: "🧹 Cleaning", datetime: "04 May, 08:00", amount: "₹540", status: "In Progress" },
    { id: "#BK-2838", customer: "Suresh Kamble", provider: "Vijay Deshmukh", service: "🪚 Carpentry", datetime: "03 May, 16:00", amount: "₹1,400", status: "Scheduled" },
    { id: "#BK-2837", customer: "Priya Ghosh", provider: "Priya Jadhav", service: "❄️ AC Repair", datetime: "03 May, 14:30", amount: "₹1,200", status: "Completed" },
    { id: "#BK-2836", customer: "Vikas Deshpande", provider: "Mohit Sharma", service: "🎨 Painting", datetime: "02 May, 11:00", amount: "₹2,200", status: "Completed" },
];

const SERVICES_DATA = [
    { icon: "🔧", name: "Plumbing", providers: 142, bookings: 1076, price: "₹275/hr", status: "Active" },
    { icon: "⚡", name: "Electrical", providers: 98, bookings: 845, price: "₹300/hr", status: "Active" },
    { icon: "🧹", name: "Cleaning", providers: 210, bookings: 768, price: "₹180/hr", status: "Active" },
    { icon: "🌿", name: "Gardening", providers: 63, bookings: 210, price: "₹150/hr", status: "Paused" },
];

const BAR_DATA = [
    { l: "Jan", v: 280 }, { l: "Feb", v: 310 }, { l: "Mar", v: 290 },
    { l: "Apr", v: 420 }, { l: "May", v: 510 }, { l: "Jun", v: 380 },
];
const REV_DATA = [
    { l: "1", v: 22000 }, { l: "2", v: 18000 }, { l: "3", v: 31000 }, { l: "4", v: 28400 },
    { l: "5", v: 25000 }, { l: "6", v: 19000 }, { l: "7", v: 34000 },
];

const TOP_SERVICES = [
    { icon: "🔧", name: "Plumbing", count: "1,076 bookings", pct: 82, color: "#f97316" },
    { icon: "⚡", name: "Electrical", count: "845 bookings", pct: 64, color: "#3b82f6" },
    { icon: "🧹", name: "Cleaning", count: "768 bookings", pct: 58, color: "#22c55e" },
    { icon: "🪚", name: "Carpentry", count: "493 bookings", pct: 38, color: "#8b5cf6" },
    { icon: "❄️", name: "AC Repair", count: "410 bookings", pct: 31, color: "#f59e0b" },
    { icon: "🎨", name: "Painting", count: "338 bookings", pct: 26, color: "#ef4444" },
];

const RECENT_BOOKINGS_OVERVIEW = [
    { id: "#BK-2841", init: "NK", bg: "rgba(59,130,246,0.15)", col: "#60a5fa", name: "Neha Kulkarni", loc: "Baner", service: "Plumbing", provider: "Rajesh Kumar", dt: "04 May, 10:30", amount: "₹750", status: "Completed" },
    { id: "#BK-2840", init: "AM", bg: "rgba(249,115,22,0.15)", col: "#fb923c", name: "Arjun Mehta", loc: "V. Nagar", service: "Electrical", provider: "Anil Pawar", dt: "04 May, 09:00", amount: "₹900", status: "Completed" },
    { id: "#BK-2839", init: "RP", bg: "rgba(34,197,94,0.15)", col: "#4ade80", name: "Riya Patel", loc: "Aundh", service: "Cleaning", provider: "Sunita Mahadik", dt: "04 May, 08:00", amount: "₹540", status: "In Progress" },
    { id: "#BK-2838", init: "SK", bg: "rgba(168,85,247,0.15)", col: "#c084fc", name: "Suresh Kamble", loc: "Kothrud", service: "Carpentry", provider: "Vijay Deshmukh", dt: "03 May, 16:00", amount: "₹1,400", status: "Scheduled" },
    { id: "#BK-2837", init: "PG", bg: "rgba(239,68,68,0.15)", col: "#f87171", name: "Priya Ghosh", loc: "Wakad", service: "AC Repair", provider: "Priya Jadhav", dt: "03 May, 14:30", amount: "₹1,200", status: "Completed" },
];

// ── Helpers ────────────────────────────────────────────────────────────────
const statusStyle = (s) => {
    if (s === "Active" || s === "Completed") return { bg: "rgba(34,197,94,0.12)", color: "#22c55e" };
    if (s === "Pending" || s === "Scheduled" || s === "In Progress") return { bg: "rgba(245,158,11,0.12)", color: "#f59e0b" };
    if (s === "Suspended" || s === "Cancelled") return { bg: "rgba(239,68,68,0.12)", color: "#ef4444" };
    return { bg: T.surface2, color: T.muted };
};

function Pill({ status }) {
    const s = statusStyle(status);
    return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, background: s.bg, color: s.color }}>
            <span style={{ fontSize: 7 }}>●</span>{status}
        </span>
    );
}

function BarChart({ data, color }) {
    const max = Math.max(...data.map(d => d.v));
    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 140 }}>
            {data.map((d, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
                    <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                        <div
                            style={{ width: "100%", borderRadius: "6px 6px 0 0", background: color, height: `${Math.round((d.v / max) * 110) + 10}px`, cursor: "pointer", transition: "filter 0.2s" }}
                            title={`${d.l}: ${d.v}`}
                            onMouseEnter={e => e.target.style.filter = "brightness(1.3)"}
                            onMouseLeave={e => e.target.style.filter = "brightness(1)"}
                        />
                    </div>
                    <span style={{ fontSize: "0.65rem", color: T.muted }}>{d.l}</span>
                </div>
            ))}
        </div>
    );
}

function DonutChart() {
    const segs = [
        { label: "Plumbing", pct: 32, color: "#f97316" },
        { label: "Electrical", pct: 25, color: "#3b82f6" },
        { label: "Cleaning", pct: 23, color: "#22c55e" },
        { label: "Others", pct: 20, color: "#8b5cf6" },
    ];
    let offset = 0;
    const r = 50, cx = 65, cy = 65, circ = 2 * Math.PI * r;
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <svg width={130} height={130} viewBox="0 0 130 130">
                <circle cx={cx} cy={cy} r={r} fill="none" stroke={T.surface2} strokeWidth={18} />
                {segs.map((s, i) => {
                    const dash = (s.pct / 100) * circ;
                    const gap = circ - dash;
                    const el = (
                        <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.color} strokeWidth={18}
                            strokeDasharray={`${dash} ${gap}`}
                            strokeDashoffset={-offset * circ / 100}
                            strokeLinecap="butt"
                            style={{ transform: "rotate(-90deg)", transformOrigin: "65px 65px" }}
                        />
                    );
                    offset += s.pct;
                    return el;
                })}
                <text x={cx} y={cy - 6} textAnchor="middle" fill={T.text} fontSize={18} fontWeight={800} fontFamily="Syne,sans-serif">4,930</text>
                <text x={cx} y={cy + 12} textAnchor="middle" fill={T.muted} fontSize={9}>Bookings</text>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                {segs.map(s => (
                    <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 2, background: s.color, flexShrink: 0 }} />
                        <span style={{ fontSize: "0.78rem", color: T.muted, flex: 1 }}>{s.label}</span>
                        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: T.text }}>{s.pct}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Toast ──────────────────────────────────────────────────────────────────
function Toast({ msg, onDone }) {
    useEffect(() => {
        const t = setTimeout(onDone, 3000);
        return () => clearTimeout(t);
    }, [msg]);
    return (
        <div style={{
            position: "fixed", bottom: 24, right: 24, background: T.card,
            border: `1px solid ${T.border}`, borderRadius: 12, padding: "14px 18px",
            zIndex: 2000, fontSize: "0.875rem", color: T.text,
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            animation: "slideUp 0.3s ease",
        }}>
            {msg}
        </div>
    );
}

// ── Modal ──────────────────────────────────────────────────────────────────
function Modal({ type, onClose, onToast }) {
    const inp = { background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 9, color: T.text, padding: "10px 13px", fontSize: "0.875rem", width: "100%", outline: "none", fontFamily: "DM Sans,sans-serif", boxSizing: "border-box" };
    const lbl = { display: "block", fontSize: "0.72rem", color: T.muted, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 6 };

    return (
        <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div onClick={e => e.stopPropagation()} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 20, padding: 36, width: "90%", maxWidth: 440, position: "relative" }}>
                <button onClick={onClose} style={{ position: "absolute", top: 18, right: 18, background: T.surface2, border: `1px solid ${T.border}`, color: T.muted, width: 30, height: 30, borderRadius: 7, cursor: "pointer", fontSize: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
                <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: 6, color: T.text }}>{type === "provider" ? "Add New Provider" : "Add New User"}</h3>
                <p style={{ color: T.muted, fontSize: "0.875rem", marginBottom: 24 }}>{type === "provider" ? "Register a new service professional" : "Add a new customer account"}</p>

                {type !== "provider" ? (
                    <>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                            <div><label style={lbl}>First Name</label><input style={inp} placeholder="First name" /></div>
                            <div><label style={lbl}>Last Name</label><input style={inp} placeholder="Last name" /></div>
                        </div>
                        <div style={{ marginBottom: 14 }}><label style={lbl}>Email</label><input style={inp} type="email" placeholder="user@email.com" /></div>
                        <div style={{ marginBottom: 14 }}><label style={lbl}>Phone</label><input style={inp} type="tel" placeholder="+91 98765 43210" /></div>
                        <div style={{ marginBottom: 14 }}><label style={lbl}>City</label><input style={inp} placeholder="City" /></div>
                    </>
                ) : (
                    <>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                            <div><label style={lbl}>Full Name</label><input style={inp} placeholder="Full name" /></div>
                            <div><label style={lbl}>Experience (yrs)</label><input style={inp} type="number" placeholder="e.g. 5" /></div>
                        </div>
                        <div style={{ marginBottom: 14 }}>
                            <label style={lbl}>Category</label>
                            <select style={{ ...inp, appearance: "none" }}>
                                {["Plumbing", "Electrical", "Cleaning", "Carpentry", "Painting", "AC Repair"].map(c => <option key={c}>{c}</option>)}
                            </select>
                        </div>
                        <div style={{ marginBottom: 14 }}><label style={lbl}>Email</label><input style={inp} type="email" placeholder="provider@email.com" /></div>
                        <div style={{ marginBottom: 14 }}><label style={lbl}>Phone</label><input style={inp} type="tel" placeholder="+91 98765 43210" /></div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                            <div><label style={lbl}>Hourly Rate (₹)</label><input style={inp} type="number" placeholder="e.g. 300" /></div>
                            <div><label style={lbl}>City</label><input style={inp} placeholder="City" /></div>
                        </div>
                    </>
                )}

                <button
                    onClick={() => { onToast(`✅ ${type === "provider" ? "Provider" : "User"} added successfully!`); onClose(); }}
                    style={{ width: "100%", padding: 12, borderRadius: 9, background: T.accent, color: "#fff", border: "none", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", marginTop: 4 }}
                >
                    Add {type === "provider" ? "Provider" : "User"}
                </button>
            </div>
        </div>
    );
}

// ── Tab: Overview ──────────────────────────────────────────────────────────
function TabOverview({ toast }) {
    return (
        <div style={{ padding: "28px 32px" }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
                {[
                    { icon: "👥", label: "Total Users", num: "12,491", trend: "+8.2%", up: true, color: "#3b82f6", ibg: "rgba(59,130,246,0.12)" },
                    { icon: "🔧", label: "Providers", num: "1,284", trend: "+3.1%", up: true, color: "#f97316", ibg: "rgba(249,115,22,0.12)" },
                    { icon: "📋", label: "Bookings (MTD)", num: "3,842", trend: "+12.4%", up: true, color: "#22c55e", ibg: "rgba(34,197,94,0.12)" },
                    { icon: "💰", label: "Revenue (MTD)", num: "₹8.42L", trend: "-2.1%", up: false, color: "#8b5cf6", ibg: "rgba(139,92,246,0.12)" },
                ].map(s => (
                    <div key={s.label} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24, position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: s.color }} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: s.ibg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{s.icon}</div>
                            <span style={{ fontSize: "0.75rem", fontWeight: 600, padding: "3px 8px", borderRadius: 100, background: s.up ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)", color: s.up ? T.success : T.danger }}>{s.trend}</span>
                        </div>
                        <div style={{ fontFamily: "Syne,sans-serif", fontSize: "2rem", fontWeight: 800, lineHeight: 1, marginBottom: 4, color: T.text }}>{s.num}</div>
                        <div style={{ fontSize: "0.8rem", color: T.muted }}>{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Charts row */}
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16, marginBottom: 24 }}>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text, marginBottom: 4 }}>Bookings Overview</div>
                    <div style={{ fontSize: "0.78rem", color: T.muted, marginBottom: 20 }}>Jan – Jun 2026</div>
                    <BarChart data={BAR_DATA} color={T.accent} />
                </div>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text, marginBottom: 4 }}>Service Breakdown</div>
                    <div style={{ fontSize: "0.78rem", color: T.muted, marginBottom: 20 }}>By category</div>
                    <DonutChart />
                </div>
            </div>

            {/* Recent Bookings */}
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: "hidden", marginBottom: 24 }}>
                <div style={{ padding: "20px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div>
                        <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text }}>Recent Bookings</div>
                        <div style={{ fontSize: "0.78rem", color: T.muted, marginTop: 2 }}>Latest activity across the platform</div>
                    </div>
                    <button onClick={() => toast("📋 View all bookings")} style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.muted, padding: "7px 14px", borderRadius: 8, fontSize: "0.78rem", cursor: "pointer" }}>View All</button>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                                {["ID", "Customer", "Service", "Provider", "Date & Time", "Amount", "Status"].map(h => (
                                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.72rem", color: T.muted, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {RECENT_BOOKINGS_OVERVIEW.map(b => (
                                <tr key={b.id} style={{ borderBottom: `1px solid rgba(255,255,255,0.03)` }}>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{b.id}</td>
                                    <td style={{ padding: "14px 16px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <div style={{ width: 34, height: 34, borderRadius: 9, background: b.bg, color: b.col, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>{b.init}</div>
                                            <div>
                                                <div style={{ fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{b.name}</div>
                                                <div style={{ fontSize: "0.8rem", color: T.muted }}>{b.loc}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.text }}>{b.service}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{b.provider}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{b.dt}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{b.amount}</td>
                                    <td style={{ padding: "14px 16px" }}><Pill status={b.status} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Secondary stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text, marginBottom: 4 }}>Quick Stats</div>
                    <div style={{ fontSize: "0.78rem", color: T.muted, marginBottom: 16 }}>Today's snapshot</div>
                    {[
                        ["🆕 New Signups Today", "+47", T.success],
                        ["📋 Bookings Today", "+124", T.accent],
                        ["⏳ Pending Approvals", "18", T.warning],
                        ["💰 Revenue Today", "₹28,400", T.purple],
                        ["⭐ Avg Rating Today", "4.85", "#fbbf24"],
                    ].map(([l, v, c]) => (
                        <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", background: T.surface2, borderRadius: 10, marginBottom: 10 }}>
                            <span style={{ fontSize: "0.85rem", color: T.muted }}>{l}</span>
                            <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, color: c }}>{v}</span>
                        </div>
                    ))}
                </div>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text, marginBottom: 4 }}>Top Services This Week</div>
                    <div style={{ fontSize: "0.78rem", color: T.muted, marginBottom: 16 }}>Ranked by booking volume</div>
                    {TOP_SERVICES.map(s => (
                        <div key={s.name} style={{ marginBottom: 14 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: "0.82rem" }}>
                                <span style={{ color: T.text }}>{s.icon} {s.name}</span>
                                <span style={{ color: T.muted }}>{s.count}</span>
                            </div>
                            <div style={{ background: T.surface2, borderRadius: 100, height: 6 }}>
                                <div style={{ background: s.color, height: 6, borderRadius: 100, width: `${s.pct}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── Tab: Users ─────────────────────────────────────────────────────────────
function TabUsers({ toast, openModal }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const filtered = USERS.filter(u =>
        (filter === "All" || u.status === filter) &&
        (u.name + u.email + u.city).toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div style={{ padding: "28px 32px" }}>
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${T.border}` }}>
                    <div>
                        <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text }}>All Users</div>
                        <div style={{ fontSize: "0.78rem", color: T.muted, marginTop: 2 }}>12,491 registered customers</div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users…" style={{ background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 8, color: T.text, padding: "8px 14px", fontSize: "0.82rem", outline: "none", width: 220, fontFamily: "DM Sans,sans-serif" }} />
                        <button onClick={() => toast("📥 Users exported!")} style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.muted, padding: "7px 14px", borderRadius: 8, fontSize: "0.78rem", cursor: "pointer" }}>Export CSV</button>
                        <button onClick={() => openModal("user")} style={{ background: T.accent, border: `1px solid ${T.accent}`, color: "#fff", padding: "7px 14px", borderRadius: 8, fontSize: "0.78rem", cursor: "pointer", fontWeight: 600 }}>+ Add User</button>
                    </div>
                </div>
                <div style={{ padding: "0 24px 12px", display: "flex", gap: 6, marginTop: 12 }}>
                    {["All", "Active", "Suspended"].map(f => (
                        <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? T.accentDim : "none", border: `1px solid ${filter === f ? T.accent : T.border}`, color: filter === f ? T.accent : T.muted, padding: "5px 12px", borderRadius: 6, fontSize: "0.72rem", cursor: "pointer" }}>{f}</button>
                    ))}
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead><tr style={{ borderBottom: `1px solid ${T.border}` }}>
                            {["User", "Email", "Phone", "City", "Joined", "Bookings", "Status", "Actions"].map(h => (
                                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.72rem", color: T.muted, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase" }}>{h}</th>
                            ))}
                        </tr></thead>
                        <tbody>
                            {filtered.map(u => (
                                <tr key={u.id} style={{ borderBottom: `1px solid rgba(255,255,255,0.03)` }}>
                                    <td style={{ padding: "14px 16px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <div style={{ width: 34, height: 34, borderRadius: 9, background: u.bg, color: u.col, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem" }}>{u.init}</div>
                                            <span style={{ fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{u.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{u.email}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{u.phone}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{u.city}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{u.joined}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{u.bookings}</td>
                                    <td style={{ padding: "14px 16px" }}><Pill status={u.status} /></td>
                                    <td style={{ padding: "14px 16px" }}>
                                        <div style={{ display: "flex", gap: 6 }}>
                                            {u.status === "Active" ? (
                                                <>
                                                    <RowBtn onClick={() => toast(`👤 Viewing ${u.name}`)}>View</RowBtn>
                                                    <RowBtn danger onClick={() => toast("⚠️ User suspended")}>Suspend</RowBtn>
                                                </>
                                            ) : (
                                                <>
                                                    <RowBtn success onClick={() => toast("✅ User reactivated")}>Activate</RowBtn>
                                                    <RowBtn onClick={() => toast("🗑️ User deleted")}>Delete</RowBtn>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination toast={toast} />
            </div>
        </div>
    );
}

// ── Tab: Providers ─────────────────────────────────────────────────────────
function TabProviders({ toast, openModal }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const filtered = PROVIDERS.filter(p =>
        (filter === "All" || p.status === filter) &&
        (p.name + p.cat).toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div style={{ padding: "28px 32px" }}>
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${T.border}` }}>
                    <div>
                        <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text }}>All Providers</div>
                        <div style={{ fontSize: "0.78rem", color: T.muted, marginTop: 2 }}>1,284 service professionals</div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search providers…" style={{ background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 8, color: T.text, padding: "8px 14px", fontSize: "0.82rem", outline: "none", width: 220, fontFamily: "DM Sans,sans-serif" }} />
                        <button onClick={() => toast("📥 Providers exported!")} style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.muted, padding: "7px 14px", borderRadius: 8, fontSize: "0.78rem", cursor: "pointer" }}>Export CSV</button>
                        <button onClick={() => openModal("provider")} style={{ background: T.accent, border: `1px solid ${T.accent}`, color: "#fff", padding: "7px 14px", borderRadius: 8, fontSize: "0.78rem", cursor: "pointer", fontWeight: 600 }}>+ Add Provider</button>
                    </div>
                </div>
                <div style={{ padding: "0 24px 12px", display: "flex", gap: 6, marginTop: 12 }}>
                    {["All", "Active", "Pending", "Suspended"].map(f => (
                        <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? T.accentDim : "none", border: `1px solid ${filter === f ? T.accent : T.border}`, color: filter === f ? T.accent : T.muted, padding: "5px 12px", borderRadius: 6, fontSize: "0.72rem", cursor: "pointer" }}>{f}</button>
                    ))}
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead><tr style={{ borderBottom: `1px solid ${T.border}` }}>
                            {["Provider", "Category", "Experience", "Rating", "Jobs", "Earnings", "Status", "Actions"].map(h => (
                                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.72rem", color: T.muted, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase" }}>{h}</th>
                            ))}
                        </tr></thead>
                        <tbody>
                            {filtered.map(p => (
                                <tr key={p.id} style={{ borderBottom: `1px solid rgba(255,255,255,0.03)` }}>
                                    <td style={{ padding: "14px 16px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <div style={{ width: 34, height: 34, borderRadius: 9, background: p.bg, color: p.col, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem" }}>{p.init}</div>
                                            <div>
                                                <div style={{ fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{p.name}</div>
                                                <div style={{ fontSize: "0.8rem", color: T.muted }}>{p.phone}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.text }}>{p.cat}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{p.exp}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem" }}>
                                        <span style={{ color: "#fbbf24" }}>{p.rating}</span>
                                        {p.ratingVal && <span style={{ color: T.text, fontWeight: 600, marginLeft: 4 }}> {p.ratingVal}</span>}
                                    </td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{p.jobs}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{p.earnings}</td>
                                    <td style={{ padding: "14px 16px" }}><Pill status={p.status} /></td>
                                    <td style={{ padding: "14px 16px" }}>
                                        <div style={{ display: "flex", gap: 6 }}>
                                            {p.status === "Pending" ? (
                                                <>
                                                    <RowBtn success onClick={() => toast("✅ Provider approved!")}>Approve</RowBtn>
                                                    <RowBtn danger onClick={() => toast("❌ Provider rejected")}>Reject</RowBtn>
                                                </>
                                            ) : p.status === "Suspended" ? (
                                                <>
                                                    <RowBtn success onClick={() => toast("✅ Provider reactivated")}>Reactivate</RowBtn>
                                                    <RowBtn onClick={() => toast("🗑️ Provider deleted")}>Delete</RowBtn>
                                                </>
                                            ) : (
                                                <>
                                                    <RowBtn onClick={() => toast(`🔧 Viewing ${p.name}`)}>View</RowBtn>
                                                    <RowBtn danger onClick={() => toast("⚠️ Provider suspended")}>Suspend</RowBtn>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination toast={toast} />
            </div>
        </div>
    );
}

// ── Tab: Bookings ──────────────────────────────────────────────────────────
function TabBookings({ toast }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const filtered = BOOKINGS.filter(b =>
        (filter === "All" || b.status === filter) &&
        (b.customer + b.provider + b.id).toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div style={{ padding: "28px 32px" }}>
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${T.border}` }}>
                    <div>
                        <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text }}>All Bookings</div>
                        <div style={{ fontSize: "0.78rem", color: T.muted, marginTop: 2 }}>3,842 total bookings</div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search bookings…" style={{ background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 8, color: T.text, padding: "8px 14px", fontSize: "0.82rem", outline: "none", width: 220, fontFamily: "DM Sans,sans-serif" }} />
                        <button onClick={() => toast("📥 Bookings exported!")} style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.muted, padding: "7px 14px", borderRadius: 8, fontSize: "0.78rem", cursor: "pointer" }}>Export</button>
                    </div>
                </div>
                <div style={{ padding: "0 24px 12px", display: "flex", gap: 6, marginTop: 12 }}>
                    {["All", "Completed", "In Progress", "Scheduled", "Cancelled"].map(f => (
                        <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? T.accentDim : "none", border: `1px solid ${filter === f ? T.accent : T.border}`, color: filter === f ? T.accent : T.muted, padding: "5px 12px", borderRadius: 6, fontSize: "0.72rem", cursor: "pointer" }}>{f}</button>
                    ))}
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead><tr style={{ borderBottom: `1px solid ${T.border}` }}>
                            {["Booking ID", "Customer", "Provider", "Service", "Date & Time", "Amount", "Status", "Actions"].map(h => (
                                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.72rem", color: T.muted, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase" }}>{h}</th>
                            ))}
                        </tr></thead>
                        <tbody>
                            {filtered.map(b => (
                                <tr key={b.id} style={{ borderBottom: `1px solid rgba(255,255,255,0.03)` }}>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{b.id}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.text }}>{b.customer}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{b.provider}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.text }}>{b.service}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{b.datetime}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{b.amount}</td>
                                    <td style={{ padding: "14px 16px" }}><Pill status={b.status} /></td>
                                    <td style={{ padding: "14px 16px" }}>
                                        <div style={{ display: "flex", gap: 6 }}>
                                            <RowBtn onClick={() => toast(`📋 Viewing ${b.id}`)}>Details</RowBtn>
                                            {b.status === "Scheduled" && <RowBtn danger onClick={() => toast("❌ Booking cancelled")}>Cancel</RowBtn>}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination toast={toast} pages={4} />
            </div>
        </div>
    );
}

// ── Tab: Services ──────────────────────────────────────────────────────────
function TabServices({ toast }) {
    return (
        <div style={{ padding: "28px 32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 24 }}>
                {[
                    { icon: "📦", label: "Total Categories", num: 20, color: "#f97316", ibg: "rgba(249,115,22,0.12)", badge: "+2 new" },
                    { icon: "✅", label: "Active Categories", num: 18, color: "#22c55e", ibg: "rgba(34,197,94,0.12)", badge: null },
                    { icon: "⏸️", label: "Paused Categories", num: 2, color: "#f59e0b", ibg: "rgba(245,158,11,0.12)", badge: null },
                ].map(s => (
                    <div key={s.label} style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24, position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: s.color }} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: s.ibg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{s.icon}</div>
                            {s.badge && <span style={{ fontSize: "0.75rem", fontWeight: 600, padding: "3px 8px", borderRadius: 100, background: "rgba(34,197,94,0.12)", color: T.success }}>{s.badge}</span>}
                        </div>
                        <div style={{ fontFamily: "Syne,sans-serif", fontSize: "2rem", fontWeight: 800, lineHeight: 1, marginBottom: 4, color: T.text }}>{s.num}</div>
                        <div style={{ fontSize: "0.8rem", color: T.muted }}>{s.label}</div>
                    </div>
                ))}
            </div>
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, overflow: "hidden" }}>
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${T.border}` }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text }}>Service Categories</div>
                    <button onClick={() => toast("➕ Add category form")} style={{ background: T.accent, border: `1px solid ${T.accent}`, color: "#fff", padding: "7px 14px", borderRadius: 8, fontSize: "0.78rem", cursor: "pointer", fontWeight: 600 }}>+ Add Category</button>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead><tr style={{ borderBottom: `1px solid ${T.border}` }}>
                            {["Category", "Providers", "Bookings", "Avg Price", "Status", "Actions"].map(h => (
                                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: "0.72rem", color: T.muted, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase" }}>{h}</th>
                            ))}
                        </tr></thead>
                        <tbody>
                            {SERVICES_DATA.map(s => (
                                <tr key={s.name} style={{ borderBottom: `1px solid rgba(255,255,255,0.03)` }}>
                                    <td style={{ padding: "14px 16px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
                                            <span style={{ fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{s.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{s.providers}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", fontWeight: 600, color: T.text }}>{s.bookings.toLocaleString()}</td>
                                    <td style={{ padding: "14px 16px", fontSize: "0.84rem", color: T.muted }}>{s.price}</td>
                                    <td style={{ padding: "14px 16px" }}><Pill status={s.status} /></td>
                                    <td style={{ padding: "14px 16px" }}>
                                        <div style={{ display: "flex", gap: 6 }}>
                                            {s.status === "Active"
                                                ? <><RowBtn onClick={() => toast(`✏️ Editing ${s.name}`)}>Edit</RowBtn><RowBtn danger onClick={() => toast("⏸️ Category paused")}>Pause</RowBtn></>
                                                : <><RowBtn success onClick={() => toast("✅ Category activated")}>Activate</RowBtn><RowBtn onClick={() => toast("✏️ Editing")}>Edit</RowBtn></>
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// ── Tab: Reports ───────────────────────────────────────────────────────────
function TabReports({ toast }) {
    return (
        <div style={{ padding: "28px 32px" }}>
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
                <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text, marginBottom: 4 }}>Revenue Report — May 2026</div>
                <div style={{ fontSize: "0.78rem", color: T.muted, marginBottom: 20 }}>Daily revenue breakdown</div>
                <BarChart data={REV_DATA} color={T.purple} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text, marginBottom: 4 }}>Key Metrics</div>
                    <div style={{ fontSize: "0.78rem", color: T.muted, marginBottom: 16 }}>Month-to-date performance</div>
                    {[
                        ["Total Revenue", "₹8,42,000", T.success],
                        ["Platform Commission (15%)", "₹1,26,300", T.accent],
                        ["Paid Out to Providers", "₹7,15,700", T.text],
                        ["Avg Booking Value", "₹887", T.text],
                        ["Customer Satisfaction", "4.85 ★", "#fbbf24"],
                    ].map(([l, v, c]) => (
                        <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: T.surface2, borderRadius: 9, marginBottom: 8 }}>
                            <span style={{ fontSize: "0.83rem", color: T.muted }}>{l}</span>
                            <span style={{ fontWeight: 700, color: c }}>{v}</span>
                        </div>
                    ))}
                </div>
                <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 24 }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: T.text, marginBottom: 4 }}>Export Reports</div>
                    <div style={{ fontSize: "0.78rem", color: T.muted, marginBottom: 16 }}>Download data for analysis</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {[
                            ["📥 Users Report (CSV)", "users"],
                            ["📥 Providers Report (CSV)", "providers"],
                            ["📥 Bookings Report (CSV)", "bookings"],
                            ["📥 Revenue Report (PDF)", "revenue"],
                        ].map(([label, key]) => (
                            <button key={key} onClick={() => toast(`📥 ${label.replace("📥 ", "").replace(" (CSV)", "").replace(" (PDF)", "")} report downloaded!`)}
                                style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.muted, padding: "12px 16px", borderRadius: 10, fontSize: "0.84rem", cursor: "pointer", textAlign: "left" }}>
                                {label}
                            </button>
                        ))}
                        <button onClick={() => toast("📊 Full report generated!")} style={{ background: T.accent, border: "none", color: "#fff", padding: "12px 16px", borderRadius: 10, fontSize: "0.84rem", cursor: "pointer", fontWeight: 600, textAlign: "center" }}>
                            📊 Full Monthly Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Shared small components ────────────────────────────────────────────────
function RowBtn({ children, onClick, danger, success }) {
    const col = danger ? T.danger : success ? T.success : T.muted;
    return (
        <button onClick={onClick} style={{ background: "none", border: `1px solid ${T.border}`, color: T.muted, padding: "5px 10px", borderRadius: 6, fontSize: "0.72rem", cursor: "pointer", fontFamily: "DM Sans,sans-serif", transition: "color 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { e.target.style.borderColor = col; e.target.style.color = col; }}
            onMouseLeave={e => { e.target.style.borderColor = T.border; e.target.style.color = T.muted; }}
        >{children}</button>
    );
}

function Pagination({ toast, pages = 2 }) {
    const [active, setActive] = useState(1);
    return (
        <div style={{ display: "flex", gap: 6, justifyContent: "center", padding: 16, borderTop: `1px solid ${T.border}` }}>
            {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
                <button key={p} onClick={() => { setActive(p); toast && p > 1 && toast(`Page ${p}`); }}
                    style={{ width: 32, height: 32, borderRadius: 7, border: `1px solid ${active === p ? T.accent : T.border}`, background: active === p ? T.accent : "none", color: active === p ? "#fff" : T.muted, fontSize: "0.8rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {p}
                </button>
            ))}
            <button onClick={() => toast && toast("Next page")} style={{ width: 32, height: 32, borderRadius: 7, border: `1px solid ${T.border}`, background: "none", color: T.muted, fontSize: "0.8rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
        </div>
    );
}

// ── Nav config ─────────────────────────────────────────────────────────────
const NAV = [
    { id: "overview", icon: "⬛", label: "Dashboard", section: "main" },
    { id: "users", icon: "👥", label: "Users", section: "main", badge: null },
    { id: "providers", icon: "🔧", label: "Providers", section: "main", badge: "18" },
    { id: "bookings", icon: "📋", label: "Bookings", section: "main" },
    { id: "services", icon: "📦", label: "Service Categories", section: "manage" },
    { id: "reports", icon: "📊", label: "Reports", section: "manage" },
];

const PAGE_META = {
    overview: { title: "Dashboard Overview", sub: "Monday, 4 May 2026 — All systems operational" },
    users: { title: "User Management", sub: "View and manage all registered customers" },
    providers: { title: "Provider Management", sub: "View and manage service professionals" },
    bookings: { title: "Booking Management", sub: "Track and manage all service bookings" },
    services: { title: "Service Categories", sub: "Configure available service categories" },
    reports: { title: "Reports & Analytics", sub: "Analytics and performance reports" },
};

// ── Root ───────────────────────────────────────────────────────────────────
export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [modal, setModal] = useState(null);
    const [toastMsg, setToastMsg] = useState(null);

    function toast(msg) { setToastMsg(msg); }

    const meta = PAGE_META[activeTab];

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: T.bg, color: T.text, fontFamily: "DM Sans, system-ui, sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500;600&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; } @keyframes slideUp { from { transform:translateY(80px); opacity:0; } to { transform:translateY(0); opacity:1; } }`}</style>

            {/* Sidebar */}
            <aside style={{ width: 240, minHeight: "100vh", background: T.sidebar, borderRight: `1px solid ${T.border}`, display: "flex", flexDirection: "column", position: "fixed", left: 0, top: 0, bottom: 0, zIndex: 50 }}>
                <div style={{ padding: "24px 20px", borderBottom: `1px solid ${T.border}` }}>
                    <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.3rem", color: T.text }}>Fix<span style={{ color: T.accent }}>It</span> Pro</div>
                    <div style={{ fontSize: "0.7rem", color: T.muted, letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Admin Console</div>
                </div>

                <div style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: 2 }}>
                    {["main", "manage"].map(section => (
                        <div key={section}>
                            <div style={{ fontSize: "0.65rem", color: T.dim, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600, padding: "8px 8px 6px", marginTop: 12 }}>
                                {section === "main" ? "Main" : "Manage"}
                            </div>
                            {NAV.filter(n => n.section === section).map(n => (
                                <button key={n.id} onClick={() => setActiveTab(n.id)}
                                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, cursor: "pointer", background: activeTab === n.id ? T.accentDim : "none", border: "none", color: activeTab === n.id ? T.accent : T.muted, fontSize: "0.875rem", fontWeight: 500, width: "100%", textAlign: "left", transition: "all 0.2s" }}
                                    onMouseEnter={e => { if (activeTab !== n.id) { e.currentTarget.style.background = T.surface2; e.currentTarget.style.color = T.text; } }}
                                    onMouseLeave={e => { if (activeTab !== n.id) { e.currentTarget.style.background = "none"; e.currentTarget.style.color = T.muted; } }}
                                >
                                    <span style={{ fontSize: "1rem", width: 20, textAlign: "center" }}>{n.icon}</span>
                                    {n.label}
                                    {n.badge && <span style={{ marginLeft: "auto", background: T.accent, color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "2px 7px", borderRadius: 100 }}>{n.badge}</span>}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                <div style={{ padding: "16px 12px", borderTop: `1px solid ${T.border}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: T.surface2, borderRadius: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 9, background: T.accentDim, border: "2px solid rgba(249,115,22,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: T.accent, fontSize: "0.9rem" }}>SA</div>
                        <div>
                            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: T.text }}>Super Admin</div>
                            <div style={{ fontSize: "0.72rem", color: T.muted }}>admin@fixit.pro</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main */}
            <main style={{ marginLeft: 240, flex: 1, minHeight: "100vh" }}>
                {/* Topbar */}
                <div style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(6,6,16,0.9)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${T.border}`, padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <h1 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.25rem", fontWeight: 800, color: T.text }}>{meta.title}</h1>
                        <p style={{ fontSize: "0.8rem", color: T.muted, marginTop: 2 }}>{meta.sub}</p>
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <button onClick={() => toast("🔄 Data refreshed")} style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.muted, padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: "0.8rem" }}>↺ Refresh</button>
                        <button onClick={() => toast("⚙️ Settings opened")} style={{ background: T.surface2, border: `1px solid ${T.border}`, color: T.muted, padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: "0.8rem" }}>⚙ Settings</button>
                        <div style={{ position: "relative", width: 36, height: 36, borderRadius: 8, background: T.surface2, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1rem" }} onClick={() => toast("🔔 3 new notifications")}>
                            🔔
                            <div style={{ position: "absolute", top: 7, right: 7, width: 7, height: 7, background: T.accent, borderRadius: "50%", border: `1.5px solid ${T.bg}` }} />
                        </div>
                    </div>
                </div>

                {/* Tab content */}
                {activeTab === "overview" && <TabOverview toast={toast} />}
                {activeTab === "users" && <TabUsers toast={toast} openModal={setModal} />}
                {activeTab === "providers" && <TabProviders toast={toast} openModal={setModal} />}
                {activeTab === "bookings" && <TabBookings toast={toast} />}
                {activeTab === "services" && <TabServices toast={toast} />}
                {activeTab === "reports" && <TabReports toast={toast} />}
            </main>

            {/* Modal */}
            {modal && <Modal type={modal} onClose={() => setModal(null)} onToast={toast} />}

            {/* Toast */}
            {toastMsg && <Toast msg={toastMsg} onDone={() => setToastMsg(null)} />}
        </div>
    );
}
