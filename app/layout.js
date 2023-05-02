import { Navigation } from '../components/Navigation'
import '../styles/globals.css'

const RootLayout = ({ children }) => {
  return (
    <html lang='es'>
      <head>
        <title> My first app with Next 13 </title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
