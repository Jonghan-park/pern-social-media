const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
require("dotenv").config();
const pool = require("./db");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_PASSWORD = process.env.GOOGLE_CLIENT_PASSWORD;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_PASSWORD,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const account = profile._json;
      let user = {};
      console.log(account);
      try {
        const currentUserQuery = await pool.query(
          "SELECT * FROM users WHERE google_id = $1",
          [account.sub]
        );
        if (currentUserQuery.rows.length === 0) {
          // create user
          await pool.query(
            "INSERT INTO users (username, img, google_id) VALUES ($1, $2, $3)",
            [account.name, account.picture, account.sub]
          );
          const id = await pool.query(
            "SELECT id FROM users WHERE google_id = $1",
            [account.sub]
          );
          user = {
            id: id.rows[0].id,
            username: account.name,
            img: account.picture,
          };
        } else {
          //have user
          user = {
            id: currentUserQuery.rows[0].id,
            username: currentUserQuery.rows[0].username,
            img: currentUserQuery.rows[0].img,
          };
        }
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  // loads into req.session.passport.user
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // loads into req.user
  done(null, user);
});
