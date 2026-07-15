import './globals.css'

const TITLE = 'Prakhar Shukla — Software Engineer · MERN · Java · DSA'
const DESC = 'Prakhar Shukla — Software Engineer specializing in MERN stack, Java, DSA, REST APIs, MongoDB and scalable backend systems.'

export const metadata = {
  title: TITLE,
  description: DESC,
  authors: [{ name: 'Prakhar Shukla' }],
  openGraph: {
    title: TITLE,
    description: DESC,
    type: 'website',
    siteName: 'Prakhar Shukla',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Prakhar Shukla',
    jobTitle: 'Software Engineer',
    knowsAbout: ['MERN Stack', 'Java', 'Data Structures & Algorithms', 'Node.js', 'MongoDB', 'REST APIs'],
    email: 'mailto:prakharshukla6095@gmail.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Dadri', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
  }

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#070a0f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}