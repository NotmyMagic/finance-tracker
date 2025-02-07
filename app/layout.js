"use client";

import "./globals.css";
import Nav from "@/components/Navigation";
import FinanceContextProvider from "@/Lib/store/finance-context";
import AuthContextProvider from "@/Lib/store/auth-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <FinanceContextProvider>
            <Nav />
            {children}
          </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
