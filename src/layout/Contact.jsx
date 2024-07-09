import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import SuccessBand from '../components/SuccessBand'
import ErrorBand from '../components/ErrorBand'
import SubtitleText from '../components/SubtitleText'
import ParagraphText from '../components/ParagraphText'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
export default function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm('service_93pxk2g', 'template_bgarekm', form.current, {
        publicKey: 'lbe2BXGF316PYP17-',
      })
      .then(
        () => {
          // Reset form after sending email
          setName('')
          setEmail('')
          setMessage('')
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

  const isFormValid = () => {
    return name.trim() !== '' && email.trim() !== '' && message.trim() !== ''
  }
  return (
    <div>
      {success && <SuccessBand />}
      {error && <ErrorBand />}

      <div className="flex justify-center w-full">
        <form
          className="card bg-white shadow-xl w-2/3 my-16 py-8 px-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex justify-center my-2">
            <div className="w-8 h-8 rounded-full bg-princeton-orange flex justify-center items-center">
              <EnvelopeIcon className="w-6 h-6 text-slate-100" />
            </div>
          </div>
          <div className="flex justify-center text-raisin-black my-2">
            <SubtitleText text="Contact me" />
          </div>

          <div className="pl-1 text-raisin-black">
            <ParagraphText text="Email: smallfish.az@gmail.com" />
          </div>
          <div className="divider text-slate-300">OR</div>
          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="small fish"
              className="input input-bordered input-acccent w-full"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <div className="card-actions mt-8">
            <button
              className="btn bg-princeton-orange w-48"
              disabled={!isFormValid()}
            >
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
