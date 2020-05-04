import React from "react"
import Layout from "../components/layout"

import "./profile.css"

const Profile = () => (
  <Layout>
    <div className="profile">
      <h1>
        <em>I did it for your sake.</em>
      </h1>
      <div className="profile-info">
        <p>
          Born and raised in Ishgard, Alpont Vefair is a 24 years old elezen
          that already filled his forced knight quota for 7 years. His family
          maintains some degree of wealth albeit not enough to be recognized
          among the elite and rich of the city.
        </p>
        <p>
          If the children don't grow up our bodies get bigger but our hearts get
          torn up. We're just a million little gods causing rain storms, turning
          every good thing to rust so I guess we'll just have to adjust.
        </p>
        <p>
          But now that I'm older, my heart's colder. And I can see that it's a
          lie.
        </p>
      </div>
    </div>
  </Layout>
)

export default Profile
