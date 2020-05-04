import React from "react"
import Layout from "../components/layout"

import "./gallery.css"

const Profile = () => (
  <Layout>
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img
          src="https://i.imgur.com/kEJbNCR.png"
          className="gallery__img"
          alt="Image 1"
        />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img
          src="https://i.imgur.com/WJunVDL.png"
          className="gallery__img"
          alt="Image 2"
        />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img
          src="https://i.imgur.com/MljNVUu.png"
          className="gallery__img"
          alt="Image 3"
        />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img
          src="https://i.imgur.com/Er5qknu.png"
          className="gallery__img"
          alt="Image 4"
        />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img
          src="https://i.imgur.com/9iw4Mmx.png"
          className="gallery__img"
          alt="Image 5"
        />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img
          src="https://i.imgur.com/MIa4a9N.png"
          className="gallery__img"
          alt="Image 6"
        />
      </figure>
    </div>
  </Layout>
)

export default Profile
