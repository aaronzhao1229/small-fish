import SubtitleText from './SubtitleText'
import PropTypes from 'prop-types'
export default function ImageWithText({ image, text, subtitleText }) {
  return (
    <div className="flex items-center my-8">
      <img src={image} alt="image" className="w-1/3 rounded-xl" />
      <div className="w-2/3">
        <SubtitleText text={subtitleText} />
        <p className="pl-8">{text}</p>
      </div>
    </div>
  )
}

ImageWithText.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
}
