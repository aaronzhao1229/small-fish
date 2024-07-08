import { PlusIcon } from '@heroicons/react/24/solid'
import BgImage from './BgImage'
export default function Home() {
  return (
    <div className="xs:m-4 sm:m-8">
      <BgImage image={'../house.jpg'} label={'Acoustic Engineering'} />

      <div className="flex justify-center p-4">
        <PlusIcon className="size-12 text-raisin-black" />
      </div>
      <BgImage image={'../code1.jpg'} label={'Software and web development'} />
    </div>
  )
}
