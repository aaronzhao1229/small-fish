import Carousel from '../components/Carousel'

import ParagraphText from '../components/ParagraphText'
import TitleText from '../components/TitleText'

const introduction =
  'My name is Jian Zhao, commonly known as Aaron. In 2024, I decided to become a sole trader, utilising my skills in acoustic engineering and software development engineering. At the intersection of engineering and technology, I enjoy using technology to solve engineering challenges.'
const smallFishIntroduction =
  'The philosophy of being a "small fish in a big pond" resonates with me deeply. Therefore, I chose "Small Fish" as my trading name.'

const personalLife =
  'In my spare time, I love tramping, mountaineering, and running, and I am always exploring new ways to push my physical limits.'
export default function About() {
  return (
    <div className="mx-8 mt-12">
      <TitleText text="About me" />
      <ParagraphText text={introduction} />
      <ParagraphText text={smallFishIntroduction} />
      <ParagraphText text={personalLife} />

      <Carousel />
    </div>
  )
}
