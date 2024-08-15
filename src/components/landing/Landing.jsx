import React from 'react'
import AppointForm from './AppointForm'
import './landing.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Landing() {
  return (
    <div id="landpg" className="min-vh-100">
      <div className="container">
        <div id="freepg" className="container mt-3">
          <div className="row ms-5">
            <div className="col-12">
              <div>
                <h3>
                Anxiety, Depression, Negative Thoughts,
                Irrational Feeligns, Harmful Habits, Out of Touch with Reality.
                Don't let these things bring you down.
                </h3>
                <h1>
                We're here to help.
                </h1>
                <h3>
                Because you need not go through this alone.
                </h3>
              </div>
              <div>
                <a href="#" className="btn btn-brand me-2 mt-5"
                  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Discover more</a>
              </div>
            </div>
          </div>
        </div>
        <AppointForm />
      </div>
    </div>
  )
}
