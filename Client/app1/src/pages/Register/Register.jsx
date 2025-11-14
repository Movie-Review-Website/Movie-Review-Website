import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='container'>
      <h2 className='page-header'>Register</h2>
      <div className='register-container'>
        <div className='mb-3'>
          <label htmlFor=''>First Name</label>
          <input
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Last Name</label>
          <input
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Phone Number</label>
          <input
            type='tel'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
          <input
            type='password'
            className='form-control'
          />
        </div>

        <div>
          Already have an account?{' '}
          <button className='btn btn-link'>Login here</button>
        </div>
        <div>
          <button className='btn btn-success'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register
