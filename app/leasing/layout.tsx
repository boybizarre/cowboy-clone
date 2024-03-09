import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lease a Cowboy',
  description: 'Electric Bike For Urban Riders',
};

export default function LeaingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
