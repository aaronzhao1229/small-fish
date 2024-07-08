export default function BgImage({ label, image }) {
  return (
    <div
      className="relative bg-cover bg-center h-96 rounded-xl xs:mx-4 sm:mx-8 lg:mx-12"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-raisin-black bg-opacity-50 flex items-center justify-center rounded-xl">
        <div className="text-center text-white">
          <p className="text-3xl md:text-5xl font-bold">{label}</p>
        </div>
      </div>
    </div>
  )
}
