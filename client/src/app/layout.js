import "./globals.css";

export const metadata = {
  title: "Kanto",
  description: "Your minimalist hub for productivity.",
  icons: {
    icon: '/icon',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
