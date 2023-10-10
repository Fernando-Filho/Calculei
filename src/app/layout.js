"use client"

import GlobalStyle from './globalStyle'
import StyledComponentsRegistry from './libRegistry'
 
export default function RootLayout({ children }) {
  return (
    <html>
      <GlobalStyle/>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}