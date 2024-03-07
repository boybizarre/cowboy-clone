import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessories - Cowboy',
  description: 'Electric Bike For Urban Riders',
};

export default function AccessoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
