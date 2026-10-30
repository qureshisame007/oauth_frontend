import { useAuth } from "../context/AuthContext.jsx";

const Dashboard = () => {
    const { user, logout } = useAuth();

    const isGithub = Boolean(user?.login);
    const displayName = user?.name || user?.login || "User";
    const providerLabel = isGithub ? "GitHub" : "Google";

    return (
        <div className="dashboard-container">
            {/* Header */}
            <div className="dashboard-header">
                <div className="header-left">
                    <div className="logo-icon">🔐</div>
                    <h1>Dashboard</h1>
                </div>
                <button className="logout-button" onClick={logout}>
                    <span className="logout-icon">🚪</span> Logout
                </button>
            </div>

            {/* Welcome Banner */}
            <div className="welcome-banner">
                <div className="welcome-text">
                    <h2>Welcome back, {displayName}! 👋</h2>
                    <p>You're signed in with your {providerLabel} account.</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-grid">
                {/* Profile Card */}
                <div className="card profile-card">
                    <div className="card-header">
                        <h3>👤 Profile</h3>
                    </div>
                    <div className="card-body">
                        <div className="profile-section">
                            {user?.picture && (
                                <div className="avatar-wrapper">
                                    <img src={user.picture} alt="profile" className="profile-picture" />
                                    <span className="avatar-status"></span>
                                </div>
                            )}
                            <div className="profile-info">
                                <h3>{displayName}</h3>
                                <p className="email">{user?.email}</p>
                                {isGithub && <p className="username">@{user.login}</p>}
                                <span className={`provider-badge ${isGithub ? "github" : "google"}`}>
                                    {isGithub ? "⚛️" : "🌐"} {providerLabel} Account
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Details Card */}
                <div className="card details-card">
                    <div className="card-header">
                        <h3>📋 Account Details</h3>
                    </div>
                    <div className="card-body">
                        <div className="detail-row">
                            <span className="detail-label">Full Name</span>
                            <span className="detail-value">{user?.name || "—"}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Email</span>
                            <span className="detail-value">{user?.email || "—"}</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Provider</span>
                            <span className="detail-value">{providerLabel}</span>
                        </div>
                        {isGithub && (
                            <>
                                <div className="detail-row">
                                    <span className="detail-label">Username</span>
                                    <span className="detail-value">@{user?.login || "—"}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Bio</span>
                                    <span className="detail-value">{user?.bio || "—"}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Location</span>
                                    <span className="detail-value">{user?.location || "—"}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Company</span>
                                    <span className="detail-value">{user?.company || "—"}</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Quick Stats Card */}
                <div className="card stats-card">
                    <div className="card-header">
                        <h3>📊 Quick Stats</h3>
                    </div>
                    <div className="card-body">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-icon">✅</div>
                                <div className="stat-info">
                                    <span className="stat-value">Active</span>
                                    <span className="stat-label">Status</span>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">🔒</div>
                                <div className="stat-info">
                                    <span className="stat-value">OAuth2</span>
                                    <span className="stat-label">Auth Method</span>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">🌐</div>
                                <div className="stat-info">
                                    <span className="stat-value">{providerLabel}</span>
                                    <span className="stat-label">Provider</span>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">📧</div>
                                <div className="stat-info">
                                    <span className="stat-value">{user?.email ? "Verified" : "N/A"}</span>
                                    <span className="stat-label">Email</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity Card */}
                <div className="card activity-card">
                    <div className="card-header">
                        <h3>🕐 Recent Activity</h3>
                    </div>
                    <div className="card-body">
                        <div className="activity-item">
                            <div className="activity-dot active"></div>
                            <div className="activity-content">
                                <p className="activity-title">Logged in successfully</p>
                                <p className="activity-time">Just now</p>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-dot"></div>
                            <div className="activity-content">
                                <p className="activity-title">Account authenticated via {providerLabel}</p>
                                <p className="activity-time">Session started</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;