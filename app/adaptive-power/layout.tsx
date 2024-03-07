import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adaptive Power - Electric Bike',
  description: 'Electric Bike For Urban Riders',
};

export default function AdaptivePowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
