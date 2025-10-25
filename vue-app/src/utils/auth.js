const SESSION_KEY = 'ticketapp_session';

export const isAuthenticated = () => {
  const session = localStorage.getItem(SESSION_KEY);
  return session !== null;
};

export const login = (email, password) => {
  // Simulated authentication
  if (email && password.length >= 6) {
    const session = {
      token: Math.random().toString(36).substring(2),
      user: { email },
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials' };
};

export const signup = (email, password) => {
  // Simulated signup
  if (email && password.length >= 6) {
    const session = {
      token: Math.random().toString(36).substring(2),
      user: { email },
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials' };
};

export const logout = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const getSession = () => {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
};