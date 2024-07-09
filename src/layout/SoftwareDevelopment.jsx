import ImageWithText from '../components/ImageWithText'
import TitleText from '../components/TitleText'
const homeBaseSubtitle = 'Home Base Enamels'
const homebase =
  'Home Base Enamels is a torch fired enamel jewellery store and I have created their e-commerce website from scratch using full-stack tools.'
const kascadeSubtitle = 'Kascade'
const kascade =
  'Kascade is a helpful tool for designers to detect styles from the existing websites and use them in their own design. I worked with developer and designers from PivotPoint | Experience Design on the product.'
export default function SoftwareDevelopment() {
  return (
    <div className="mx-8 mt-12">
      <TitleText text="Software development" />
      <ImageWithText
        image="../homebase.png"
        subtitleText={homeBaseSubtitle}
        text={homebase}
        link={'https://www.homebaseenamels.co.nz/'}
      />
      <div className="divider"></div>
      <ImageWithText
        image="../kascade.png"
        subtitleText={kascadeSubtitle}
        text={kascade}
        link={'https://www.kascade.design/'}
      />
    </div>
  )
}
