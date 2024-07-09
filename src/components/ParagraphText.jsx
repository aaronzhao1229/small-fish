import PropTypes from 'prop-types'

export default function ParagraphText({ text }) {
  return (
    <div className="mb-4">
      <p className="whitespace-pre-line">{text}</p>
    </div>
  )
}

ParagraphText.propTypes = {
  text: PropTypes.string.isRequired,
}
