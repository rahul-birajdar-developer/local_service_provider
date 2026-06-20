function ProvidedService() {

    const showToast = () => {
        console.log("Searching Provider !!")
    }
    return (
        <>
            <section id="services">
                <div className="section-label">What We Offer</div>
                <div className="section-title">Every home service, one platform</div>
                <p className="section-sub">From leaky pipes to full electrical rewiring — browse 20+ service categories with
                    certified professionals.</p>
                <div className="services-grid">
                    <div className="service-card fade-up" onClick={showToast('Browsing Plumbing pros...')}>
                        <span className="service-icon">🔧</span>
                        <div className="service-name">Plumbing</div>
                        <div className="service-count">142 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Electrical pros...')}>
                        <span className="service-icon">⚡</span>
                        <div className="service-name">Electrical</div>
                        <div className="service-count">98 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Home Cleaning pros...')}>
                        <span className="service-icon">🧹</span>
                        <div className="service-name">Home Cleaning</div>
                        <div className="service-count">210 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Carpentry pros...')}>
                        <span className="service-icon">🪚</span>
                        <div className="service-name">Carpentry</div>
                        <div className="service-count">76 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Painting pros...')}>
                        <span className="service-icon">🎨</span>
                        <div className="service-name">Painting</div>
                        <div className="service-count">88 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Plumbing pros...')}>
                        <span className="service-icon">❄️</span>
                        <div className="service-name">AC Repair</div>
                        <div className="service-count">54 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Plumbing pros...')}>
                        <span className="service-icon">🐛</span>
                        <div className="service-name">Pest Control</div>
                        <div className="service-count">41 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Plumbing pros...')}>
                        <span className="service-icon">🌿</span>
                        <div className="service-name">Gardening</div>
                        <div className="service-count">63 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Plumbing pros...')}>
                        <span className="service-icon">📷</span>
                        <div className="service-name">CCTV & Security</div>
                        <div className="service-count">37 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Plumbing pros...')}>
                        <span className="service-icon">📦</span>
                        <div className="service-name">Moving & Packing</div>
                        <div className="service-count">29 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Plumbing pros...')}>
                        <span className="service-icon">🔌</span>
                        <div className="service-name">Appliance Repair</div>
                        <div className="service-count">91 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                    <div className="service-card fade-up" onClick={showToast('Browsing Plumbing pros...')}>
                        <span className="service-icon">🏠</span>
                        <div className="service-name">Interior Design</div>
                        <div className="service-count">18 providers</div>
                        <span className="service-arrow">↗</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProvidedService;