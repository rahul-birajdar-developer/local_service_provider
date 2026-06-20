import {
    User,
    Mail,
    Lock,
    Eye,
    Phone,
    MapPin,
    Briefcase,
    CircleArrowRight,
    EyeOff
} from "lucide-react";

import "../Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProviderSignup({ providerLogin }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [generatedOTP, setGeneratedOTP] = useState("");
    const [otpInput, setOtpInput] = useState(false);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        serviceType: "",
        location: "",
        otp: "",
        experience: "",
        role: "provider"
    });

    const handleSendOTP = (e) => {
        e.preventDefault();
        if (otpInput) {
            return;
        }
        if (!form.phone) {
            alert("Please enter phone number");
            return;
        }
        const otp =
            Math.floor(
                100000 +
                Math.random() * 900000
            ).toString();
        setGeneratedOTP(otp);
        setOtpSent(true);
        alert(`OTP sent to ${form.phone}`);
        setTimeout(() => {
            setOtpInput(true);
        }, 1000);
        console.log(`Your OTP is: ${otp}`);
    };

    //send data to server
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.phone || !form.email || !form.password || !form.confirmPassword || !form.location || !form.serviceType ||
            !form.experience) {
            alert("Please fill all fields");
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (!phoneVerified) {
            alert("Please verify phone number");
            return;
        }

        try {

            const checkUser = await fetch(
                `http://localhost:5000/providers?email=${form.email}`
            );

            const existingUser = await checkUser.json();

            if (existingUser.length > 0) {
                alert("Email already exists");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/providers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: form.name,
                        phone: form.phone,
                        email: form.email,
                        password: form.password,
                        location: form.location,
                        role: form.role,
                        serviceType: form.serviceType,
                        experience: form.experience + "Year",
                        createdAt: new Date(),
                        providerId: "P" + Date.now()
                    })
                }
            );
            if (!response.ok) {
                throw new Error("Failed to register");
            }

            const data = await response.json();


            console.log(data);

            alert("Provider registered successfully");

            navigate("/provider");

        } catch (err) {

            console.log(err);

            alert("Something went wrong");

        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-groups">
                    <div className="input-group">
                        <label>Full Name</label>
                        <div className="input-box">
                            <User size={18} />
                            <input
                                type="text"
                                placeholder="Enter full name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="input-group" >
                        <label>Phone Number</label>
                        {/* style={{display:"flex",gap:"10px"}} */}
                        <div className="verify-number">
                            <div className="input-box">
                                <Phone size={18} />
                                <input
                                    value={form.phone}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        setForm({ ...form, phone: value, otp: "" });
                                        setPhoneVerified(false);
                                        if (value.length === 10) {
                                            setOtpSent(true);
                                        } else {
                                            setOtpSent(false);
                                            setOtpInput(false);
                                        }
                                    }}
                                    type="tel"
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                    placeholder="Enter phone number"
                                />
                                {otpSent && !phoneVerified && (<button
                                    className="send-otp-btn"

                                    disabled={
                                        phoneVerified
                                    }

                                    onClick={
                                        handleSendOTP
                                    }
                                >

                                    {
                                        phoneVerified
                                            ?
                                            "Verified"
                                            :
                                            "Verify"
                                    }

                                </button>)}
                            </div>
                        </div>
                    </div>
                    {
                        otpInput && !phoneVerified && (

                            <div className="input-group">

                                <label>Enter OTP</label>

                                <div className="input-box">

                                    <input
                                        value={form.otp}

                                        onChange={(e) => {
                                            const value =
                                                e.target.value.replace(/\D/g, "");
                                            setForm({ ...form, otp: value });
                                            if (value.length === 6) {

                                                if (value === generatedOTP) {

                                                    setPhoneVerified(true);
                                                    setGeneratedOTP("");

                                                    setTimeout(() => {
                                                        setOtpInput(false);
                                                        alert("Phone number verified successfully");
                                                        setForm(prev => ({
                                                            ...prev,
                                                            otp: ""
                                                        }));
                                                    }, 1000);

                                                } else {

                                                    alert("Invalid OTP !!");
                                                    setForm({
                                                        ...form,
                                                        otp: ""
                                                    });

                                                }
                                            }

                                        }}

                                        type="tel"

                                        maxLength={6}

                                        placeholder="Enter OTP"
                                    />

                                </div>

                            </div>

                        )
                    }
                    <div className="input-group">
                        <label>Email Address</label>
                        <div className="input-box">
                            <Mail size={18} />
                            <input
                                type="email"
                                placeholder="Enter email address"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <div className="input-box">
                            <Lock size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                            {
                                showPassword ?
                                    <EyeOff onClick={() => setShowPassword(false)} style={{ cursor: "pointer" }} />
                                    :
                                    <Eye onClick={() => setShowPassword(true)} style={{ cursor: "pointer" }} />
                            }
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Confirm Password</label>
                        <div className="input-box">
                            <Lock size={18} />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                value={form.confirmPassword}
                                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                            />
                            {
                                showConfirmPassword ?
                                    <EyeOff onClick={() => setShowConfirmPassword(false)} style={{ cursor: "pointer" }} />
                                    :
                                    <Eye onClick={() => setShowConfirmPassword(true)} style={{ cursor: "pointer" }} />
                            }
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Service Type</label>
                        <div className="input-box">
                            <Briefcase size={18} />
                            <select className="select-service" value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })}>
                                <option value="">Select service type</option>
                                <option value="plumbing">Plumbing</option>
                                <option value="electrical">Electrical</option>
                                <option value="cleaning">Cleaning</option>
                                <option value="carpentry">Carpentry</option>
                                <option value="painting">Painting</option>
                                <option value="gardening">Gardening</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Location / Area</label>
                        <div className="input-box">
                            <MapPin size={18} />
                            <input
                                type="text"
                                placeholder="Enter location"
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Experience (in years)</label>
                        <div className="input-box">
                            <Briefcase size={18} />
                            <input
                                type="number"
                                min={0}
                                placeholder="Enter years of experience"
                                value={form.experience}
                                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
                <div className="login-options">

                    <label>
                        <input type="checkbox" />
                        <span style={{ marginLeft: "5px" }}>
                            Remember me
                        </span>
                    </label>

                </div>
                <button className="login-btn">
                    {!providerLogin ? (
                        <>
                            Create Account <CircleArrowRight size={18} />
                        </>
                    ) : (
                        <>
                            Log In <CircleArrowRight size={18} />
                        </>
                    )}
                </button>
            </form>
        </>
    )
}

export default ProviderSignup;