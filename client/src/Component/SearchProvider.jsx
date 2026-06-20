function SearchProvider({ setLocation, filterByLocation }) {

    return (
        <>
            <div className="search-section">
                <div className="search-card">
                    <h3>🔍 Find the right professional</h3>
                    <div className="search-row">
                        <div className="search-field">
                            <label>Service Type</label>
                            <select title="select" onChange={(e) => setLocation(e.target.value)}>
                                <option value="">Select Service Type</option>
                                <option>Plumbing</option>
                                <option>Electrical</option>
                                <option>Cleaning</option>
                                <option>Carpentry</option>
                                <option>Painting</option>
                                <option>AC Repair</option>
                                <option>Pest Control</option>
                                <option>Gardening</option>
                            </select>
                        </div>
                        <div className="search-field">
                            <label>Your Location</label>
                            <input type="text" placeholder="e.g. Koregaon Park, Pune" onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <button className="search-btn" onClick={filterByLocation}>Search
                            Pros</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchProvider;