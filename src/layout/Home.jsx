import { PlusIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import BgImage from '../components/BgImage'
export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="m-4 sm:m-8">
      <div className="xs:mx-4 sm:mx-8 lg:mx-12 my-12">
        <p className="text-2xl">
          Welcome to <span className="text-safety-orange">small fish</span>{' '}
          consulting!
        </p>
      </div>
      <BgImage
        image={'../acoustic.jpg'}
        label={'Acoustic Engineering'}
        onClick={() => {
          navigate('/acoustic')
        }}
      />

      <div className="flex justify-center p-4">
        <PlusIcon className="size-12 text-raisin-black" />
      </div>
      <BgImage
        image={'../software.jpg'}
        label={'Software and web development'}
        onClick={() => {
          navigate('/software')
        }}
      />
    </div>
  )
}
