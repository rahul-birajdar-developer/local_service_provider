import SearchProvider from "./SearchProvider";
import ProviderProfile from "./viewProviderProfile";
import { useState } from "react";

function TopRatedProvider() {
    const [viewProfile, setViewProfile] = useState(false)
    const [location, setLocation] = useState("");

    const Providers = [
        {
            "name": "Rahul Birajdar",
            "logo": "RB",
            "phone": "8956259961",
            "email": "rahul@gmail.com",
            "password": "123",
            "location": "Lavangi",
            "review": "215",
            "role": "provider",
            "rating": "4.5",
            "serviceType": "plumber",
            "providedService": "Pipe Repair,Water Tanks,Drainage",
            "price": "300",
            "experience": "6 yrs exp",
            "createdAt": "2026-05-27T17:40:40.715Z",
            "providerId": "P1779903640715",
            "id": "p001"
        },
        {
            "name": "Anil Pawar",
            "logo": "AP",
            "phone": "9876543210",
            "email": "anil@gmail.com",
            "password": "123",
            "location": "Pune",
            "review": "287",
            "role": "provider",
            "rating": "4.8",
            "serviceType": "electrician",
            "providedService": "Wiring,MCB Repair,Fan Installation",
            "price": "350",
            "experience": "12 yrs exp",
            "createdAt": "2026-05-28T10:20:00.000Z",
            "providerId": "P1002",
            "id": "p002"
        },
        {
            "name": "Sunita Mahadik",
            "logo": "SM",
            "phone": "9876543211",
            "email": "sunita@gmail.com",
            "password": "123",
            "location": "Mumbai",
            "review": "189",
            "role": "provider",
            "rating": "5.0",
            "serviceType": "cleaning",
            "providedService": "Deep Cleaning,Kitchen Cleaning,Bathroom Cleaning",
            "price": "250",
            "experience": "5 yrs exp",
            "createdAt": "2026-05-28T11:00:00.000Z",
            "providerId": "P1003",
            "id": "p003"
        },
        {
            "name": "Vijay Deshmukh",
            "logo": "VD",
            "phone": "9876543212",
            "email": "vijay@gmail.com",
            "password": "123",
            "location": "Solapur",
            "review": "241",
            "role": "provider",
            "rating": "4.7",
            "serviceType": "carpenter",
            "providedService": "Furniture Repair,Doors,Modular Kitchen",
            "price": "400",
            "experience": "15 yrs exp",
            "createdAt": "2026-05-28T12:00:00.000Z",
            "providerId": "P1004",
            "id": "p004"
        },
        {
            "name": "Mohit Sharma",
            "logo": "MS",
            "phone": "9876543213",
            "email": "mohit@gmail.com",
            "password": "123",
            "location": "Nagpur",
            "review": "163",
            "role": "provider",
            "rating": "4.9",
            "serviceType": "painting",
            "providedService": "Interior Painting,Exterior Painting,Texture Work",
            "price": "320",
            "experience": "7 yrs exp",
            "createdAt": "2026-05-28T13:00:00.000Z",
            "providerId": "P1005",
            "id": "p005"
        },
        {
            "name": "Priya Jadhav",
            "logo": "PJ",
            "phone": "9876543214",
            "email": "priya@gmail.com",
            "password": "123",
            "location": "Kolhapur",
            "review": "208",
            "role": "provider",
            "rating": "4.8",
            "serviceType": "ac repair",
            "providedService": "AC Installation,Gas Refill,Maintenance",
            "price": "450",
            "experience": "9 yrs exp",
            "createdAt": "2026-05-28T14:00:00.000Z",
            "providerId": "P1006",
            "id": "p006"
        },
        {
            "name": "Ramesh Patil",
            "logo": "RP",
            "phone": "9876543215",
            "email": "ramesh@gmail.com",
            "password": "123",
            "location": "Satara",
            "review": "120",
            "role": "provider",
            "rating": "4.4",
            "serviceType": "plumbing",
            "providedService": "Leak Repair,Pipe Installation",
            "price": "280",
            "experience": "4 yrs exp",
            "createdAt": "2026-05-28T15:00:00.000Z",
            "providerId": "P1007",
            "id": "p007"
        },
        {
            "name": "Kiran Shinde",
            "logo": "KS",
            "phone": "9876543216",
            "email": "kiran@gmail.com",
            "password": "123",
            "location": "Sangli",
            "review": "175",
            "role": "provider",
            "rating": "4.6",
            "serviceType": "electrician",
            "providedService": "House Wiring,Switch Repair,Lighting",
            "price": "330",
            "experience": "8 yrs exp",
            "createdAt": "2026-05-28T16:00:00.000Z",
            "providerId": "P1008",
            "id": "p008"
        },
        {
            "name": "Sneha Kulkarni",
            "logo": "SK",
            "phone": "9876543217",
            "email": "sneha@gmail.com",
            "password": "123",
            "location": "Pune",
            "review": "210",
            "role": "provider",
            "rating": "4.9",
            "serviceType": "cleaning",
            "providedService": "Home Cleaning,Sofa Cleaning,Office Cleaning",
            "price": "260",
            "experience": "6 yrs exp",
            "createdAt": "2026-05-28T17:00:00.000Z",
            "providerId": "P1009",
            "id": "p009"
        },
        {
            "name": "Ajay More",
            "logo": "AM",
            "phone": "9876543218",
            "email": "ajay@gmail.com",
            "password": "123",
            "location": "Mumbai",
            "review": "145",
            "role": "provider",
            "rating": "4.5",
            "serviceType": "carpenter",
            "providedService": "Cupboards,Tables,Wood Repair",
            "price": "370",
            "experience": "10 yrs exp",
            "createdAt": "2026-05-28T18:00:00.000Z",
            "providerId": "P1010",
            "id": "p010"
        }
    ]

    const filteredProviders = Providers.filter((provider) =>
        provider.location
            .toLowerCase()
            .includes(location.toLowerCase()) ||
        provider.serviceType
            .toLowerCase()
            .includes(location.toLowerCase())
    );

    return (
        <>
            {viewProfile && (
                <div className="profile-overlay" onClick={() => setViewProfile(false)}>
                    <div className="profile-container" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-btn"
                            onClick={() => setViewProfile(false)}
                        >
                            ✕
                        </button>

                        <ProviderProfile />
                    </div>
                </div>
            )}
            <section id="providers">
                <div className="section-label">Featured Pros</div>
                <div className="section-title">Top-rated Service Providers</div>
                <p className="section-sub">Every provider is background-verified, insured, and rated by real customers.</p>
                <SearchProvider setLocation={setLocation} filterByLocation={filteredProviders} />
                <div className="providers-grid">
                    {filteredProviders.map((item) => (
                        <div className="provider-card fade-up">
                            <div className="provider-header">
                                <div className="provider-avatar" style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}>{item.logo}</div>
                                <div className="provider-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.serviceType} · {item.experience}</span>
                                </div>
                            </div>
                            <div className="rating-row"><span className="stars">★★★★★</span> {item.rating} ({item.review} reviews)</div>
                            <div className="provider-tags">
                                <span className="badge badge-verified">✓ Verified</span>
                                <span className="badge badge-top">🏆 Top Rated</span>
                            </div>
                            <div className="provider-tags">
                                {item.providedService
                                    .split(",")
                                    .map((service) => (
                                        <span
                                            className="tag"
                                            key={service}
                                        >
                                            {service}
                                        </span>
                                    ))}
                            </div>
                            <div className="provider-footer">
                                <div className="price">₹{item.price}<span>/hr</span></div>
                                <button className="btn-book" onClick={() => setViewProfile(true)}>View Profile</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TopRatedProvider;