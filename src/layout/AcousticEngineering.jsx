import ServiceCard from '../components/ServiceCard'
import TitleText from '../components/TitleText'
const trafficSubtitle = 'Traffic noise assessment'
const trafficNoise =
  'When a house or apartment is next to a busy road, an acoustic assessment is needed to mitigate the potential impact of noise on the living environment. I work closely with architects to ensure the break-in noise from traffic to the habitable spaces is minimised and comply with the council and NZTA requirements.'

const aircraftSubtitle = 'Aircraft noise assessment'
const aircraft =
  'When a house is near an airport, an acoustic assessment is needed to mitigate the potential impact of noise on the living environment. I work closely with architects to ensure the break-in noise from aircraft to the habitable spaces is minimised and comply with the council requirements.'
const g6Subtitle = 'Building Code compliance'
const g6 =
  'When there is an inter-tenancy elements between different units in a building, an acoustic assessment is required due to the building code G6 requirement. I work closely with architects to ensure the inter-tenancy separation of the townhouses and apartments comply with the Building Code G6 requirements.'

export default function AcousticEngineering() {
  return (
    <div className="mx-8 my-12">
      <TitleText text="Acoustic Engineering" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="my-4 mr-4">
          <ServiceCard
            image="../house.jpeg"
            title={trafficSubtitle}
            service={trafficNoise}
          />
        </div>
        <div className="my-4 mr-4">
          <ServiceCard
            image="../plane.jpeg"
            title={aircraftSubtitle}
            service={aircraft}
          />
        </div>
        <div className="my-4 mr-4">
          <ServiceCard
            image="../townhouses.jpeg"
            title={g6Subtitle}
            service={g6}
          />
        </div>
      </div>
    </div>
  )
}
