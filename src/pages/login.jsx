import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
    const { loginWithGoogle, loginWithGithub } = useAuth();

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-icon">🔐</div>
                    <h2>Welcome Back</h2>
                    <p>Sign in to access your dashboard</p>
                </div>
                <div className="login-buttons">
                    <button onClick={loginWithGoogle} className="login-button google-button">
                        <span className="btn-icon">🌐</span>
                        <span className="btn-text">
                            <strong>Sign in with Google</strong>
                            <small>Quick & secure</small>
                        </span>
                    </button>
                    <button onClick={loginWithGithub} className="login-button github-button">
                        <span className="btn-icon">⚛️</span>
                        <span className="btn-text">
                            <strong>Sign in with GitHub</strong>
                            <small>Use your GitHub account</small>
                        </span>
                    </button>
                </div>
                <div className="login-footer">
                    <p>🔒 Your data is secure and encrypted</p>
                </div>
            </div>
        </div>
    );
};

export default Login;