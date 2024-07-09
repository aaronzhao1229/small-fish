import PropTypes from 'prop-types'

export default function BgImage({ label, image, onClick }) {
  return (
    <div
      className="relative bg-cover bg-center h-96 rounded-xl xs:mx-4 sm:mx-8 lg:mx-12 hover:cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-raisin-black bg-opacity-50 flex items-center justify-center rounded-xl">
        <div className="text-center text-white">
          <p className="text-3xl md:text-5xl">{label}</p>
        </div>
      </div>
    </div>
  )
}

BgImage.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
