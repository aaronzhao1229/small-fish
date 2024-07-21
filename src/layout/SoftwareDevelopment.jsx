import ServiceCard from '../components/ServiceCard'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="my-4 mr-4">
          <ServiceCard
            image="../homebase.png"
            title={homeBaseSubtitle}
            service={homebase}
            hasButton={true}
            link={'https://www.homebaseenamels.co.nz/'}
          />
        </div>
        <div className="my-4 mr-4">
          <ServiceCard
            image="../kascade.png"
            title={kascadeSubtitle}
            service={kascade}
            hasButton={true}
            link={'https://www.kascade.design/'}
          />
        </div>
      </div>
      {/* <ImageWithText
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
      /> */}
    </div>
  )
}
