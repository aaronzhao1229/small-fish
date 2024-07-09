import SubtitleText from './SubtitleText'
import PropTypes from 'prop-types'
export default function ImageWithText({ image, text, subtitleText, link }) {
  const handleButtonClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className="flex items-center my-8">
      <img src={image} alt="image" className="w-1/3 rounded-xl shadow-lg" />
      <div className="w-2/3 pl-8">
        <SubtitleText text={subtitleText} />
        <p>{text}</p>
        {link && (
          <button
            className="bg-princeton-orange hover:bg-safety-orange font-bold mt-8 py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            Case Study
          </button>
        )}
      </div>
    </div>
  )
}

ImageWithText.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
  link: PropTypes.string,
}
