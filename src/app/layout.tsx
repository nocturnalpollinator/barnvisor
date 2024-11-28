import "./globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="m-auto mx-auto my-8 max-w-screen-lg text-base leading-relaxed max-md:mx-8 md:my-32">
            <main className="md:grid md:grid-cols-5 md:gap-4">{children}</main>
            <Footer className="col-span-full" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
