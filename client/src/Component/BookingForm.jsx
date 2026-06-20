import { useState } from "react";

function BookingForm() {
    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        email: "",
        service: "",
        bookingDate: "",
        bookingTime: "",
        address: "",
        notes: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Booking Data:", formData);

        alert("Booking Submitted Successfully!");

        setFormData({
            customerName: "",
            phone: "",
            email: "",
            service: "",
            bookingDate: "",
            bookingTime: "",
            address: "",
            notes: "",
        });
    };

    return (
        <div className="booking-container">
            <form className="booking-form" onSubmit={handleSubmit}>
                <h2>Book Service Provider</h2>

                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Select Service</label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Choose Service</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Painter">Painter</option>
                        <option value="Carpenter">Carpenter</option>
                        <option value="Cleaner">Cleaner</option>
                    </select>
                </div>

                <div className="row">
                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="date"
                            name="bookingDate"
                            value={formData.bookingDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Time</label>
                        <input
                            type="time"
                            name="bookingTime"
                            value={formData.bookingTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <textarea
                        rows="3"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Additional Notes</label>
                    <textarea
                        rows="4"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="book-btn">
                    Book Now
                </button>
            </form>
        </div>
    );
}

export default BookingForm;