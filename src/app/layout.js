import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curso Nextjs14",
  description: "Actualizando conocimientos en nextjs, para producción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
