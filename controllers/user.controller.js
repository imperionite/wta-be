exports.getProfile = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.json({
    id: req.user._id,
    email: req.user.email,
    role: req.user.role,
  });
};

