import style from "./userProfile.module.css";

function UserProfile() {

    const bookings = [
        {
            service: "Electrical Repair",
            date: "12 May 2026",
            price: "₹650",
            status: "Completed",
            icon: "⚡",
        },

        {
            service: "Plumbing Service",
            date: "8 May 2026",
            price: "₹850",
            status: "Pending",
            icon: "💧",
        },
    ];

    return (
        <div className={style.profilePage}>
            <div className={style.gridBg}></div>

            <div className={style.profileLayout}>
                {/* SIDEBAR */}

                <aside className={style.sidebar}>
                    <div className={style.avatarWrap}>
                        <div className={style.avatar}>RB</div>

                        <button className={style.camera}>📷</button>
                    </div>

                    <div>
                        <h2>Rahul Birajadar</h2>

                        <p>📍 Pune, Maharashtra</p>

                        <div className={style.premium}>👑 Premium Member</div>
                    </div>

                    <div className={style.nav}>
                        <button >Overview</button>
                        <button>Bookings</button>
                        <button>Saved Providers</button>
                        <button >Logout</button>
                    </div>


                </aside>

                {/* CONTENT */}

                <main>
                    <section className={style.hero}>
                        <div>

                            <h1><span>Welcome back , </span>Rahul 👋</h1>
                            <p>Manage bookings, saved providers and account settings.</p>
                        </div>
                    </section>

                    <div className={style.gridTwo}>
                        <section className={style.card}>
                            <div className={style.head}>
                                <h3>Personal Information</h3>
                                <button style={{ padding: "8px 40px", border: "none", borderRadius: "12px", background: "#ff6b3d", color: "white", fontWeight: "500", fontSize: "14px" }}>Edit</button>
                            </div>

                            <div className={style.rows}>
                                <div className={style.row}>
                                    <span>Full Name</span>
                                    <p>Rahul Birajadar</p>
                                </div>

                                <div className={style.row}>
                                    <span>Email</span>
                                    <p>rahul@gmail.com</p>
                                </div>

                                <div className={style.row}>
                                    <span>Phone</span>
                                    <p>+91 9876543210</p>
                                </div>
                            </div>
                        </section>

                        <section className={style.card}>
                            <div className={style.head}>
                                <h3>Saved Address</h3>
                                <button style={{ padding: "8px 40px", border: "none", borderRadius: "12px", background: "#ff6b3d", color: "white", fontWeight: "500", fontSize: "14px" }}>Add</button>
                            </div>

                            <div className={style.address}>
                                🏠 Home
                                <span>Lavangi Road, Pune</span>
                            </div>
                        </section>

                        <section className={style.card}>
                            <div className={style.head}><h3>Booking History</h3></div>

                            {bookings.map((b, i) => (
                                <div key={i} className={style.booking}>
                                    <div>
                                        <span>{b.icon}</span>
                                    </div>

                                    <div>
                                        <h4>{b.service}</h4>

                                        <p>{b.date}</p>
                                    </div>

                                    <div>
                                        <small>{b.status}</small>

                                        <h4>{b.price}</h4>
                                    </div>
                                </div>
                            ))}
                        </section>

                        <section className={style.card}>
                            <div className={style.head}><h3>Payment Methods</h3></div>

                            <div className={style.payment}>💳 Visa •••• 1234</div>

                            <div className={style.payment}>UPI username@upi</div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UserProfile;
