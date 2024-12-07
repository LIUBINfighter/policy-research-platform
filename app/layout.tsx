import './globals.css'

export const metadata = {
  title: '政策研究平台',
  description: '政策研究、梳理与搜索平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
