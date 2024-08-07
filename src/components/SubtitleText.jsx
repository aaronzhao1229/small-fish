import PropTypes from 'prop-types'
export default function SubtitleText({ text }) {
  return (
    <div className="mb-4">
      <p className="text-xl font-bold">{text}</p>
    </div>
  )
}

SubtitleText.propTypes = {
  text: PropTypes.string.isRequired,
}
