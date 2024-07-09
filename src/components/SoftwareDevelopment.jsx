import ImageWithText from './ImageWithText'
import TitleText from './TitleText'
const trafficSubtitle = 'Traffic noise assessment'
const trafficNoise =
  'I work closely with architects to ensure the break-in noise from traffic to the habitable spaces is minimised and comply with the council and NZTA requirements.'
const g6Subtitle = 'Building Code compliance'
const g6 =
  'I work closely with architects to ensure the inter-tenancy separation of the townhouses and apartments comply with the Building Code G6 requirements.'
export default function SoftwareDevelopment() {
  return (
    <div className="mx-8 mt-12">
      <TitleText text="Acoustic Engineering" />
      <ImageWithText
        image="../trafficNoise.jpg"
        subtitleText={trafficSubtitle}
        text={trafficNoise}
      />
      <ImageWithText
        image="../trafficNoise.jpg"
        subtitleText={g6Subtitle}
        text={g6}
      />
    </div>
  )
}
