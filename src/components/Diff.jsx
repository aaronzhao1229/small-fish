import { useNavigate } from 'react-router-dom'
export default function Diff() {
  const navigate = useNavigate()
  return (
    <div className="diff aspect-[16/9]">
      <div
        className="diff-item-1"
        onClick={() => {
          navigate('/software')
        }}
      >
        <div className="bg-primary text-primary-content grid place-content-center text-7xl font-black">
          Software Engineering
        </div>
      </div>
      <div
        className="diff-item-2"
        onClick={() => {
          navigate('/acoustic')
        }}
      >
        <div className="bg-base-200 grid place-content-center text-7xl font-black">
          Acoustic Engineering
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  )
}
