const defaultUser = {
  user: "admin",
  password: "admin",
};

async function login(user: string, pass: string) {
  // Check if the user and password are correct
}

function signJWT(payload: { userId: number }) {
  // Sign the jwt token
}

function verifyJWT(token: string) {
  // Verify the jwt token
}

const authService = {
  login,
  signJWT,
  verifyJWT,
};

export default authService;