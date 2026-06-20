function Heading() {

    const openModal = () => {
        console.log("Opening Model!!")
    }
    return (
        <>
            <section className="cta-section">
                <div className="section-label">Join Us</div>
                <h2>Ready to get started?</h2>
                <p>Whether you need a service or want to offer one — FixIt Pro is the platform for you.</p>
                <div className="cta-actions">
                    <button className="btn-large btn-accent" onClick={openModal('signup')}>Book Your First Service</button>
                    <button className="btn-large btn-outline" onClick={openModal('provider')}>Become a Provider</button>
                </div>
            </section>
        </>
    )
}

export default Heading;