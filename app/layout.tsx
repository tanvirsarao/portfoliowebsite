import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import { Providers } from './providers';
import ParticleBackground from './components/ParticleBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tanvir Sarao',
  description: 'Personal portfolio website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <Providers>
          <ParticleBackground />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
