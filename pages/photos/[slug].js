import Head from 'next/head'
import Link from 'next/link'
import photos from '@/photos'

export default function Photo ({ index, title, flickr_url, image, alt, location, date, camera, film }) {
  const style = { viewTransitionName: `photo-${index}` }

  return (
    <>
      <Head><title>{`${title} | Dom Christie Photography`}</title></Head>
      <header>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
      </header>
      <main>
        <figure itemscope itemtype="https://schema.org/Photograph">
          <a href={flickr_url} title="This photo on Flickr">
            <img src={image} itemprop="image" alt={alt} style={style}/>
          </a>

          <figcaption>
            <h2 itemprop="name headline">{title}</h2>

            <div>
              {location} <time dateTime={date} itemprop="dateCreated">{new Date(date).getFullYear()}</time>
            </div>

            <dl>
              <dt>Camera</dt>
              <dd>{camera}</dd>
              {film && <><dt>Film</dt><dd>{film}</dd></>}
            </dl>
          </figcaption>
        </figure>
      </main>
    </>
  )
}

export async function getStaticProps({ params }) {
  const index = photos.findIndex((photo) => photo.slug === params.slug)
  const photo = photos[index]
  photo.index = index

  return {
    props: photo
  }
}

export async function getStaticPaths() {
  return {
    paths: photos.map((photo) => {
      return {
        params: {
          slug: photo.slug,
        },
      }
    }),
    fallback: false
  }
}
