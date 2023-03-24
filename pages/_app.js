import '@/styles/globals.css'
import ViewTransition from '@/components/ViewTransition'

export default function App({ Component, pageProps }) {
  return (
    <ViewTransition>
      <Component {...pageProps} />
    </ViewTransition>
  )
}
