import './globals.css';

export const metadata = {
  title: 'BAS-HAR // AI Mission Control',
  description: 'AI Human Activity Recognition for On-board BAS Experiments (SIH Concept)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}