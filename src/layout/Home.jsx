import { PlusIcon } from '@heroicons/react/24/solid'
import BgImage from '../components/BgImage'
export default function Home() {
  return (
    <div className="xs:m-4 sm:m-8">
      <div className='xs:mx-4 sm:mx-8 lg:mx-12 my-12'>
        <p className='text-2xl'>Welcome to <span className='text-safety-orange'>small fish</span> consulting!</p>
      </div>
      <BgImage image={'../house.jpg'} label={'Acoustic Engineering'} />

      <div className="flex justify-center p-4">
        <PlusIcon className="size-12 text-raisin-black" />
      </div>
      <BgImage image={'../code1.jpg'} label={'Software and web development'} />
    </div>
  )
}
