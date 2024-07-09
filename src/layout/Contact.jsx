import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import SuccessBand from '../components/SuccessBand'
import ErrorBand from '../components/ErrorBand'
export default function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm('service_93pxk2g', 'template_bgarekm', form.current, {
        publicKey: 'lbe2BXGF316PYP17-',
      })
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 5000)
        },
        (error) => {
          setError(true)
          setLoading(false)
        }
      )
  }
  return (
    <div>
      {success && <SuccessBand />}
      {error && <ErrorBand />}
      <div className="flex justify-center w-full">
        <form
          className="card bg-base-100 shadow-xl w-2/3 my-16 py-8 px-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="small fish"
              className="input input-bordered w-full"
              name="name"
            />
          </label>
          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="name@site.com"
              className="input input-bordered w-full"
              name="email"
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              name="message"
            ></textarea>
          </label>
          <div className="card-actions mt-8">
            <button className="btn bg-princeton-orange  w-48">
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
