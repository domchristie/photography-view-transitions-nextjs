import Head from 'next/head'
import photos from '@/photos'
import Photo from '@/components/Photo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head><title>Dom Christie Photography</title></Head>
      <header></header>
      <main aria-label="Content">
        <ol aria-label="Photographs">
          {photos.map((photo, index) => (<Photo {...photo} index={index} key={photo.slug}/>))}
        </ol>
      </main>
      <Footer/>
    </>
  )
}
