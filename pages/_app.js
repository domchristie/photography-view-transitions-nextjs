import '@/styles/globals.css'
import ViewTransition from '@/view-transition'

export default function App({ Component, pageProps }) {
  return (
    <ViewTransition>
      <Component {...pageProps} />
    </ViewTransition>
  )
}
