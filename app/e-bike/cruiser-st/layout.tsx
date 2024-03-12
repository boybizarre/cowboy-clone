import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cruiser ST Bike',
  description: 'Cruiser ST Bike For Urban Riders',
};

export default function CruiserSTBikeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
