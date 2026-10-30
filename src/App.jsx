import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";         // apne path ke hisaab se badlein
import Dashboard from "./pages/Dashboard.jsx"; // apne path ke hisaab se badlein
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // apne path ke hisaab se badlein

const AppContent = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </div>
        </Router>
    );
};

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;