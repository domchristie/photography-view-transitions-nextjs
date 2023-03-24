import Link from 'next/link.js'

export default function Photo ({ slug, image, alt, index }) {
  const style = { viewTransitionName: `photo-${index}` }

  return (
    <li>
      <Link href={`/photos/${slug}`}>
        <img src={image} alt={alt} style={style}/>
      </Link>
    </li>
  )
}
