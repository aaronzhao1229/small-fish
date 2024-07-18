import ImageWithText from '../components/ImageWithText'
import TitleText from '../components/TitleText'
const trafficSubtitle = 'Traffic noise assessment'
const trafficNoise =
  'I work closely with architects to ensure the break-in noise from traffic to the habitable spaces is minimised and comply with the council and NZTA requirements.'

const aircraftSubtitle = 'Aircraft noise assessment'
const aircraft =
  'I work closely with architects to ensure the break-in noise from aircraft to the habitable spaces is minimised and comply with the council requirements.'
const g6Subtitle = 'Building Code compliance'
const g6 =
  'I work closely with architects to ensure the inter-tenancy separation of the townhouses and apartments comply with the Building Code G6 requirements.'

export default function AcousticEngineering() {
  return (
    <div className="mx-8 mt-12">
      <TitleText text="Acoustic Engineering" />
      <ImageWithText
        image="../house1.png"
        subtitleText={trafficSubtitle}
        text={trafficNoise}
      />
      <div className="divider"></div>
      <ImageWithText
        image="../aircraft1.png"
        subtitleText={aircraftSubtitle}
        text={aircraft}
      />
      <div className="divider"></div>
      <ImageWithText
        image="../townhouses.png"
        subtitleText={g6Subtitle}
        text={g6}
      />
    </div>
  )
}
