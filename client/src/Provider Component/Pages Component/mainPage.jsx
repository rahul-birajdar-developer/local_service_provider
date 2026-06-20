import ScheduleTab from "./Main Page Component/ScheduleTab";
import EarningTab from "./Main Page Component/EarningTab";
import ReviewTab from "./Main Page Component/ReviewTab";
import ProfileTab from "./Main Page Component/ProfileTab";
import OrderTab from "./Main Page Component/OrderTab";


function MainPage({ activeTab }) {
    return (
        <>
            <main className="main " style={{ border: "2px solid black" }}>
                {/* <!-- TOPBAR --> */}
                <div className="topbar">
                    <div className="topbar-left">
                        <div>
                            <div className="page-title" id="pageTitle">
                                Orders
                            </div>
                            <div className="page-crumb" id="pageCrumb">
                                Manage incoming & active service requests
                            </div>
                        </div>
                    </div>
                    <div className="topbar-right">
                        <button className="topbar-btn">⚡ Simulate Order</button>
                        <button className="topbar-btn">Export</button>
                        <div className="notif-wrap">
                            <div className="notif-btn">🔔</div>
                            <div className="notif-pip"></div>
                        </div>
                    </div>
                </div>
                {/* <!-- ─── OTHER TABS (SCHEDULE, EARNINGS, REVIEWS, PROFILE) ─── --> */}
                {activeTab === 'orders' && <OrderTab />}
                {/* <!-- ─── SCHEDULE TAB ─── --> */}
                {activeTab === 'schedule' && <ScheduleTab />}
                {/* <!-- ─── EARNINGS TAB ─── --> */}
                {activeTab === 'earnings' && <EarningTab />}
                {/* <!-- ─── REVIEWS TAB ─── --> */}
                {activeTab === 'reviews' && <ReviewTab />}
                {/* <!-- ─── PROFILE TAB ─── --> */}
                {activeTab === 'profile' && <ProfileTab />}
            </main>
        </>
    );
}

export default MainPage;
