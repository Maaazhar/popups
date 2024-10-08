import "./globals.css";



export const metadata = {
  title: "Pop ups for game play.",
  description: "Two separate pop ups for game play.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
