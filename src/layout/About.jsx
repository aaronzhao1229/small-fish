import Carousel from '../components/Carousel'

import ParagraphText from '../components/ParagraphText'
import TitleText from '../components/TitleText'
import SubtitleText from '../components/SubtitleText'

const introduction1 =
  'My name is Jian Zhao, though I chose to go by Aaron when I settled in New Zealand in 2015. I began my journey as a sole trader in early 2024, when I started leveraging off my background in acoustic engineering.'
const introduction2 =
  'I had been asked by architects to deliver traffic noise assessments. I provided cost-effective assessments, and quickly. These projects re-kindled my desire to help others by lending my proficiency in acoustic engineering. They also allowed me to settle down in Wellington and pursue my new passion for software development.'
const introduction3 =
  'The pursuit of adventure and a love of the outdoors brought me to New Zealand. Now I find myself embarking on an adventure of collaborating successfully with engineers, architects, and developers to bring about unique and cutting edge solutions across New Zealand.'
const introduction4 =
  'Originally from a small town in China, I am learning how to adapt to life as an independent entrepreneur on the other side of the world, a small fish in a big pond.'
const journey1 =
  "In 2010, I graduated from Xi'an Jiaotong University with a bachelor's degree in Nuclear Engineering and Technology. My first career was in the only nuclear power station in North East China, where I worked as an operator and a planning engineer. However, working in the nuclear industry soon felt prescriptive and routine. I decided to begin a new chapter of my life by moving to New Zealand, a country I had barely heard of."

const journey2 =
  "In 2015, I arrived brimming with curiosity and excitement. I began a Master's degree in Mechanical Engineering at the University of Auckland with a focus on building services, hydraulics, and acoustic engineering. While adjusting to a vastly different culture on the other side of the world, I became skilled in specialized knowledge in building systems and acoustics."

const journey3 =
  "On completing my Master's degree in October 2016, I began my career as an acoustic engineer. My work involved both environmental acoustics—such as traffic, aircraft, port, commercial, and industrial noise assessments—and building acoustics for residential, commercial, hospital, school, and university buildings."

const journey4 =
  'Though this phase of my career enriched me with extensive knowledge, a solid philosophical foundation, and practical experience in acoustic engineering, I felt that I had missed out on enjoying the wild landscapes that New Zealand has to offer.'

const journey5 =
  "While on sabbatical I discovered a love of long-distance running and tramping. I embarked on a solo walk across the South Island section of Te Araroa, New Zealand's long-distance trail. This experience stands out as a highlight of my life, allowing me to appreciate New Zealand's natural beauty and reflect deeply on my life. Inspired by this, I chose to follow my passion for programming and transition into software development."

const journey6 =
  'In 2022, I completed a full-stack software development course at Dev Academy, a 15-week immersive bootcamp designed to simulate a real-life development team environment. The course covered a modern web development stack and emphasized human skills such as empathy, collaboration, non-violent communication, and teamwork within an agile framework. Working closely with my team, I appreciated the critical importance of teamwork.'

const journey7 =
  'After graduating from Dev Academy, I began work as a software developer, collaborating with web designers to create tools for designers. This provided me with practical software development experience and deepened my understanding of web design.'

export default function About() {
  return (
    <div className="mx-8 mt-12 text-justify">
      <div>
        <TitleText text="About me" />
        <div className="hero p-0">
          <div className="hero-content flex-col lg:flex-row-reverse p-0">
            <img
              src="../profile.jpeg"
              className="rounded-lg w-48 md:w-72 ml-4 mb-2"
            />
            <div className="flex flex-col">
              <ParagraphText text={introduction1} />
              <ParagraphText text={introduction2} />
              <ParagraphText text={introduction3} />
              <ParagraphText text={introduction4} />
            </div>

            {/* <ParagraphText text={introduction1} />
            <ParagraphText text={introduction2} />
            <ParagraphText text={introduction3} />
            <ParagraphText text={introduction4} /> */}
          </div>
        </div>
      </div>

      <div>
        <SubtitleText text="My Journey to Becoming a Sole Trader" />
        <div className="text-sm">
          <ParagraphText text={journey1} />
          <div>
            <img
              src="../studyAuckland.jpeg"
              className="rounded-lg w-48 md:w-72 float-left mr-4 mb-2"
            />
            <ParagraphText text={journey2} />
            <ParagraphText text={journey3} />
            <ParagraphText text={journey4} />
          </div>
          <ParagraphText text={journey5} />
          <Carousel />
          <ParagraphText text={journey6} />
          <ParagraphText text={journey7} />
        </div>
      </div>
    </div>
  )
}
