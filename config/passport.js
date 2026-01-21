const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("../config/config");
const User = require("../models/User");
//const GoogleStrategy = require("passport-google-oauth20").Strategy;

// ======================
// JWT STRATEGY
// ======================
passport.use(
  "jwt",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret,
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.id);
        return user ? done(null, user) : done(null, false);
      } catch (err) {
        done(err, false);
      }
    },
  ),
);

// ======================
// GOOGLE OAUTH STRATEGY
// ======================
/* passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
          });
        }

        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
); */

module.exports = passport;
