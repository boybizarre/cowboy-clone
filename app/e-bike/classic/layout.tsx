import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classic Bike',
  description: 'Classic Bike For Urban Riders',
};

export default function CLassicBikeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
