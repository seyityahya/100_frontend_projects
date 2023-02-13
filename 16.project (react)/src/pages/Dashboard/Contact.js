import React from 'react'
import { useFormik } from 'formik';

function Contact() {
  const formik = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit:(values) => {
      console.log(values);
    }
  })


  return (
    <div>
        <h2>İletişim</h2>

        <form onSubmit={formik.handleSubmit} className='form'>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input 
            id="firstName" 
            name="firstName" 
            placeholder="Jane" 
            onChange={formik.handleChange("firstName")}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input 
            id="lastName" 
            name="lastName" 
            placeholder="Doe" 
            onChange={formik.handleChange("lastName")} 
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            onChange={formik.handleChange("email")}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message..."
            onChange={formik.handleChange("message")}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact