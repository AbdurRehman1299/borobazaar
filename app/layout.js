import {ClerkProvider} from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/context/AppContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "BoroBazaar | Gadget Store",
  description: "E-commerce website using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <ClerkProvider>
          <Toaster />
          <AppContextProvider>{children}</AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}