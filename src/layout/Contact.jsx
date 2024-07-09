export default function Contact() {
  return (
    <div className="flex justify-center w-full">
      <div className="card bg-base-100 shadow-xl w-2/3 my-16 py-8 px-6">
        <label className="form-control mb-4">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="small fish"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control mb-4">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="name@site.com"
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </label>
        <div className="card-actions mt-8">
          <button className="btn bg-princeton-orange  w-48">Send</button>
        </div>
      </div>
    </div>
  )
}
