import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Book A Test Ride',
    description: 'Electric Bike For Urban Riders',
  }

export default function TestRideLayout({
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