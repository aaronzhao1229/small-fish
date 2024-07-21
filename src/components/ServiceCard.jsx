export default function ServiceCard({
  image,
  title,
  service,
  hasButton,
  link,
}) {
  const handleButtonClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify text-sm">{service}</p>
        {hasButton && (
          <div className="card-actions justify-end">
            <button className="btn bg-princeton-orange hover:bg-safety-orange mt-4" onClick={handleButtonClick}>
              Case Study
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
