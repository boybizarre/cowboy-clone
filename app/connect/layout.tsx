import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Connect - Cowboy',
    description: 'Electric Bike For Urban Riders',
  }

export default function ConnectLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }