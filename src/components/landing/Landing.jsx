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
                <h5>
                  Anxiety, Depression, Negative Thoughts,
                </h5>
                <h5>
                  Irrational Feeligns, Harmful Habits
                </h5>
                <h5>
                  Don't let these things bring you down.
                </h5>
                <h1 className="fw-bold">
                  We're here to help.
                </h1>
                <h4>
                  Because you need not go through this alone.
                </h4>
              </div>
              <div className="btn-apt">
                <AppointForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
