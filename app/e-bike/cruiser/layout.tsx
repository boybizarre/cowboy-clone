import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cruiser Bike',
  description: 'Cruiser Bike For Urban Riders',
};

export default function CruiserBikeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
