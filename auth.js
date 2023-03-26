const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "109065371763-jd5s12vl61fsvk8n7dta9j1epuargb6p.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
