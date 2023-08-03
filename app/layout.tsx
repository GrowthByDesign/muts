import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./layouts/footer/Footer";

const robo = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robo.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
