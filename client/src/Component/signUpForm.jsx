import { useState, useEffect } from "react";
import {
    User,
    Briefcase,
    Clock3,
    ShieldCheck,
    Star,
    Users,
    Mail,
    Lock,
    Phone,
    Eye,
    CircleArrowRight,
    EyeOff
} from "lucide-react";
import CustomerSignup from "./from Component/userSignup";
import ProviderSignup from "./from Component/providerSignup";
import "./Auth.css";

function SignUpForm() {

    const [userType, setUserType] = useState(false);
    const [login, setLogin] = useState(false);
    const [forgetPassword, setForgetPassword] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [generatedOTP, setGeneratedOTP] = useState("");
    const [userVerified, setUserVerified] = useState(false);
    const [otpInput, setOtpInput] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [form, setForm] = useState({
        phone: "",
        otp: "",
        password: "",
        confirmPassword: ""
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const handleLogin = async (userType) => {

        try {

            const endpoint = userType ? "providers" : "users";

            console.log("Endpoint:", endpoint);

            const response = await fetch(`http://localhost:5000/${endpoint}`);

            const data = await response.json();

            console.log("All Data:", data);

            const user = data.find(
                (item) =>
                    item.email.trim() === loginData.email.trim() &&
                    item.password.trim() === loginData.password.trim()
            );

            console.log("Matched User:", user);

            if (user) {

                // save login session
                if (rememberMe) {

                    localStorage.setItem(
                        "loggedInUser",
                        JSON.stringify({
                            user,
                            userType
                        })
                    );

                } else {

                    sessionStorage.setItem(
                        "loggedInUser",
                        JSON.stringify({
                            user,
                            userType
                        })
                    );

                }

                if (userType) {
                    alert("Redirecting to Provider Dashboard...");
                } else {
                    alert("Redirecting to User Dashboard...");
                }

            } else {

                alert("Invalid email or password");

            }

        } catch (error) {

            console.error(error);
            alert("Login failed");

        }
    };

    useEffect(() => {

        const savedUser =
            localStorage.getItem("loggedInUser") ||
            sessionStorage.getItem("loggedInUser");

        if (savedUser) {

            const parsedUser = JSON.parse(savedUser);

            console.log("Auto Login:", parsedUser);

            alert("Welcome back!");

            // redirect user
            if (parsedUser.userType) {

                console.log("Provider logged in");

            } else {

                console.log("Customer logged in");

            }
        }

    }, []);

    const handleOTPVerification = (e) => {
        // Handle OTP verification logic here
        console.log("Verifying OTP");
        e.preventDefault();
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
        alert("OTP sent to your phone number successfully!");
        console.log(`Your OTP is: ${otp}`);
        setOtpInput(true);
    };

    const handleReSendOTP = () => {
        const otp =
            Math.floor(
                100000 +
                Math.random() * 900000
            ).toString();
        setGeneratedOTP(otp);
        console.log(`Your OTP is: ${otp}`);
    };

    const handleForgetPassword = async () => {

        try {

            console.log("Handling forget password");

            if (!form.phone) {
                alert("Please enter phone number");
                return;
            }

            if (!form.password || !form.confirmPassword) {
                alert("Please enter and confirm your new password");
                return;
            }

            if (form.password !== form.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            if (!userVerified) {
                alert("Please verify your phone number first");
                return;
            }

            // choose endpoint
            const endpoint = userType ? "providers" : "users";

            // fetch all users/providers
            const response = await fetch(`http://localhost:5000/${endpoint}`);

            const data = await response.json();

            // find matching phone number
            const foundUser = data.find(
                (item) => item.phone === form.phone
            );

            if (!foundUser) {
                alert("User not found");
                return;
            }

            // update password using real ID
            const updateResponse = await fetch(
                `http://localhost:5000/${endpoint}/${foundUser.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        password: form.password,
                    }),
                }
            );

            const updatedData = await updateResponse.json();

            console.log(updatedData);

            alert("Password updated successfully!");
            setForgetPassword(false)
            setLogin(true)

        } catch (error) {

            console.error(error);
            alert("Something went wrong");

        }
    };

    return (
        <div className="login-wrapper">
            <div className="grid-bg"></div>

            <div className="login-container">

                <h1>
                    Create <span>Your</span> Account
                </h1>

                <div className="role-switch">
                    <button
                        className={!userType ? "active" : ""}
                        onClick={() => { setUserType(false); setForgetPassword(false) }}
                    >
                        <User size={18} />
                        I'm a Customer
                    </button>

                    <button
                        className={userType ? "active" : ""}
                        onClick={() => { setUserType(true); setForgetPassword(false); console.log("User type set to Service Provider") }}
                    >
                        <Briefcase size={18} />
                        I'm a Service Provider
                    </button>

                </div>

                <div className="glass-card">
                    <div className="card-head">
                        <div className="icon-box">
                            {userType ? <Briefcase /> : <User />}
                        </div>
                        <div>
                            <h2>
                                {login ? "Log In" : "Sign Up"} as{" "}
                                <span>
                                    {userType
                                        ? "Service Provider"
                                        : "Customer"}
                                </span>
                            </h2>

                            <p>
                                Create your account
                            </p>
                        </div>
                    </div>

                    {forgetPassword ? (
                        <>
                            <div className="input-group">
                                <label>
                                    Enter your registered  phone number
                                </label>
                                <div className="input-box">
                                    <Phone size={18} />
                                    <input
                                        type="text"
                                        placeholder="Enter phone number"
                                        value={form.phone}
                                        onChange={(e) => {
                                            // You can add logic here to validate the input and enable the send OTP button
                                            setForm({ ...form, phone: e.target.value });
                                            const value = e.target.value;
                                            if (value.length === 10) {
                                                setTimeout(() => {

                                                    setOtpSent(true);
                                                }, 100); // Simulate OTP sending delay
                                            }
                                        }}
                                    />
                                    {otpSent && (<button type="button" className="send-otp-btn" onClick={handleOTPVerification}>
                                        {userVerified ? "Verified" : "Verify"}
                                    </button>
                                    )}
                                </div>
                            </div>


                            {otpInput && (<div className="input-group">
                                <label>
                                    Enter the OTP sent to your phone number
                                </label>
                                <div className="input-box">
                                    <Mail size={18} />
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={form.otp}
                                        onChange={(e) => {
                                            setForm({ ...form, otp: e.target.value });
                                            const value = e.target.value;
                                            if (value.length === 6) {
                                                if (value === generatedOTP) {
                                                    setUserVerified(true);
                                                    alert("Phone number verified successfully!");
                                                    setOtpInput(false);
                                                } else {
                                                    alert("Invalid OTP. Please try again.");
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>)}

                            {userVerified && (
                                <div>
                                    <div className="input-group">
                                        <label>New Password</label>
                                        <div className="input-box">
                                            <Lock size={18} />
                                            <input
                                                value={form.password}
                                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter password"
                                            />
                                            <Eye
                                                size={18}
                                                style={{ cursor: "pointer" }}
                                                onClick={() => setShowPassword(!showPassword)}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <label>Confirm New Password</label>
                                        <div className="input-box">
                                            <Lock size={18} />
                                            <input
                                                value={form.confirmPassword}
                                                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Confirm password"
                                            />
                                            <Eye
                                                size={18}
                                                style={{ cursor: "pointer" }}
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="login-options">

                                <span

                                    style={{
                                        cursor: "pointer",
                                        color: "blue"
                                    }}
                                    onClick={handleReSendOTP}
                                >

                                    Resend OTP

                                </span>

                            </div>

                            <button className="login-btn" type="button" style={{ cursor: "pointer" }} onClick={handleForgetPassword} disabled={!otpSent}>

                                Forget Password

                            </button>

                            <p
                                className="bottom-text"
                            >

                                <span
                                    style={{
                                        cursor: "pointer",
                                        marginTop: "10px",
                                        display: "inline-block"
                                    }}

                                    onClick={() =>
                                        setForgetPassword(
                                            false
                                        )}

                                >

                                    Back to Login

                                </span>

                            </p>
                        </>
                    ) : (
                        login ? (
                            <>
                                <div className="input-group">
                                    <label>Email Address</label>
                                    <div className="input-box">
                                        <Mail size={18} />
                                        <input
                                            value={loginData.email}
                                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                            type="email"
                                            placeholder="Enter email address"
                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label>Password</label>
                                    <div className="input-box">
                                        <Lock size={18} />
                                        <input
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter password"
                                        />
                                        {
                                            showPassword ?
                                                <EyeOff onClick={() => setShowPassword(false)} style={{ cursor: "pointer" }} />
                                                :
                                                <Eye onClick={() => setShowPassword(true)} style={{ cursor: "pointer" }} />
                                        }
                                    </div>
                                </div>
                                <div className="login-options">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                        <span style={{ marginLeft: "5px" }}>
                                            Remember me
                                        </span>
                                    </label>

                                    <span style={{ cursor: "pointer" }} onClick={() => setForgetPassword(true)}>
                                        Forgot Password?
                                    </span>

                                </div>
                                <button className="login-btn" onClick={(e) => {
                                    e.preventDefault();

                                    console.log("Current userType:", userType);

                                    handleLogin(userType);
                                }}>
                                    {!login ? (
                                        <>
                                            Create Account <CircleArrowRight size={18} />
                                        </>
                                    ) : (
                                        <>
                                            Log In <CircleArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            </>
                        ) : (userType ? <ProviderSignup providerLogin={login} /> : <CustomerSignup userLogin={login} />))}



                    <div className="divider">
                        OR
                    </div>

                    <p className="bottom-text">
                        {!login ? (
                            <>
                                Already have an account ? &nbsp;
                                <span onClick={() => { setLogin(true); setForgetPassword(false) }}>
                                    Log In
                                </span>
                            </>
                        ) : (
                            <>
                                Don't have an account ?&nbsp;
                                <span onClick={() => { setLogin(false); setForgetPassword(false) }}>
                                    Sign Up
                                </span>
                            </>
                        )}
                    </p>

                </div>

                <div className="stats">

                    <div>
                        <Users />
                        <h3>50K+</h3>
                        <p>Clients</p>
                    </div>

                    <div>
                        <ShieldCheck />
                        <h3>1200+</h3>
                        <p>Verified</p>
                    </div>

                    <div>
                        <Star />
                        <h3>4.9</h3>
                        <p>Rating</p>
                    </div>

                    <div>
                        <Clock3 />
                        <h3>30 min</h3>
                        <p>Response</p>
                    </div>

                </div>

            </div>
        </div >
    );
}

export default SignUpForm;