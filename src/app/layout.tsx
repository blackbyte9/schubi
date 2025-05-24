export const metadata = {
  title: 'SchuBi',
  description: 'Schulbuchverwaltung für RSV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
