const loginAttempts = {};

const loginGuard = (req, res, next) => {

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const now = Date.now();

  // ✅ ensure the object exists in memory
  if (!loginAttempts[email]) {
    loginAttempts[email] = {
      count: 0,
      lastAttempt: now,
    };
  }

  const attempt = loginAttempts[email];

  console.log(`Email: ${email}, Count: ${attempt.count}`);

  // 🚫 block if too many failed attempts
  if (
    attempt.count >= 5 &&
    now - attempt.lastAttempt < 10 * 60 * 1000
  ) {
    console.log("BLOCKED BY LOGIN GUARD");

    return res.status(429).json({
      message: "Login guard: Too many failed attempts. Try again later.",
    });
  }

  // attach references (NOT copies)
  req.loginAttempt = attempt;
  req.loginAttemptsStore = loginAttempts;

  next();
};

module.exports = loginGuard;