'use client'

import React, { useState } from 'react'
import "./styles.css"

const page = () => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = () => {
        alert(email+ " - "+ password)
    }

  return (  
    <main className="page">
    <section className="visual" aria-label="OPF Studio introduction">
      <a className="brand" href="#" aria-label="OPF Studio home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M13.4 2 5.8 13h5L9.7 22 18 10.2h-5.1L13.4 2Z" fill="currentColor"/></svg>
        </span>
        OPF Studio
      </a>

      <div className="hero">
        <span className="eyebrow">Powering better work</span>
        <h1>Energy ideas become impact.</h1>
        <p>One intelligent workspace to plan, collaborate, and bring your most ambitious projects online.</p>
      </div>

      <svg className="network" viewBox="0 0 680 520" fill="none" aria-hidden="true">
        <g stroke="#70D8FF" stroke-width="1.4" opacity=".45">
          <path d="M80 436 180 325l96 48 92-171 107 74 112-156"/>
          <path d="m48 298 132 27 77-160 111 37 54-108 165 26"/>
          <path d="m80 436 177-271 218 111 112-156"/>
        </g>
        <g fill="#BFF3FF">
          <circle cx="80" cy="436" r="7"/><circle cx="180" cy="325" r="6"/><circle cx="276" cy="373" r="7"/>
          <circle cx="368" cy="202" r="8"/><circle cx="475" cy="276" r="6"/><circle cx="587" cy="120" r="9"/>
          <circle cx="48" cy="298" r="5"/><circle cx="257" cy="165" r="6"/><circle cx="422" cy="94" r="5"/>
        </g>
        <g fill="#fff" opacity=".13">
          <circle cx="368" cy="202" r="42"/><circle cx="587" cy="120" r="58"/><circle cx="80" cy="436" r="36"/>
        </g>
      </svg>

      <span className="visual-foot">Secure access · OPF Studio</span>
    </section>

    <section className="login-side">
      <div className="login">
        <a className="brand mobile-brand" href="#" aria-label="OPF Studio home">
          <span className="brand-mark" style={{"color":"#fff","background":"#155eef"}} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="M13.4 2 5.8 13h5L9.7 22 18 10.2h-5.1L13.4 2Z" fill="currentColor"/></svg>
          </span>
          OPF Studio
        </a>

        <h2>Welcome back</h2>
        <p className="intro">Enter your details to access your workspace.</p>

        <form id="loginForm" noValidate>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <div className="input-wrap">
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required aria-describedby="emailError" onChange={(e) => setEmail(e.target.value)} value={email}/>
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m5 8 7 5 7-5"/></svg>
            </div>
            <p className="error" id="emailError">Enter a valid email address.</p>
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <div className="input-wrap">
              <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" minLength={8} required aria-describedby="passwordError" onChange={(e) => setPassword(e.target.value)} value={password}/>
              <button className="reveal" id="revealPassword" type="button" aria-label="Show password" aria-pressed="false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>
              </button>
            </div>
            <p className="error" id="passwordError">Password must contain at least 8 characters.</p>
          </div>

          <div className="options">
            <label className="remember" htmlFor="remember"><input id="remember" name="remember" type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button className="submit" id="submitButton" type="submit" onClick={handleLogin}>
            <span className="button-text">Sign in</span>
            <span className="spinner" aria-hidden="true"></span>
          </button>
          <p className="status" id="status" role="status" aria-live="polite"></p>
        </form>

        <p className="signup">New to OPF Studio? <a href="#">Create an account</a></p>
      </div>
    </section>
  </main>
  )
}

export default page