// Digital Guardian - API Service
// Handles all backend API communication

const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
    constructor() {
        this.token = localStorage.getItem('authToken');
    }

    // Set authentication token
    setToken(token) {
        this.token = token;
        if (token) {
            localStorage.setItem('authToken', token);
        } else {
            localStorage.removeItem('authToken');
        }
    }

    // Get authentication token
    getToken() {
        return this.token || localStorage.getItem('authToken');
    }

    // Make API request
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };

        // Add auth token if available
        const token = this.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        try {
            const response = await fetch(url, config);
            
            // Handle network errors
            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.message || `Request failed with status ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            // Handle network/fetch errors
            if (error.message.includes('fetch')) {
                throw new Error('Cannot connect to server. Please make sure the backend is running on port 5000.');
            }
            console.error('API Error:', error);
            throw error;
        }
    }

    // Authentication methods
    async signup(userData) {
        const data = await this.request('/auth/signup', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
        
        if (data.token) {
            this.setToken(data.token);
        }
        
        return data;
    }

    async signin(email, password) {
        const data = await this.request('/auth/signin', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        
        if (data.token) {
            this.setToken(data.token);
        }
        
        return data;
    }

    async verifyToken() {
        try {
            const data = await this.request('/auth/verify');
            return data;
        } catch (error) {
            this.setToken(null);
            return null;
        }
    }

    async getAvatars() {
        return await this.request('/auth/avatars');
    }

    // User methods
    async getProfile() {
        return await this.request('/user/profile');
    }

    async updateProfile(profileData) {
        return await this.request('/user/profile', {
            method: 'PUT',
            body: JSON.stringify(profileData)
        });
    }

    async updatePoints(points) {
        return await this.request('/user/points', {
            method: 'PUT',
            body: JSON.stringify({ points })
        });
    }

    async getLeaderboard() {
        return await this.request('/user/leaderboard');
    }

    // Logout
    logout() {
        this.setToken(null);
        window.location.reload();
    }
}

// Create global API instance
const api = new ApiService();

