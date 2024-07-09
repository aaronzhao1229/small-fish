import PropTypes from 'prop-types'

export default function TitleText({ text }) {
  return (
    <div className="my-8">
      <p className="text-3xl font-bold">{text}</p>
    </div>
  )
}

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
}
