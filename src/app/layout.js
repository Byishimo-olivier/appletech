import { LanguageProvider } from '@/lib/i18n';
import styles from './Layout.module.css';
import "./globals.css";

export const metadata = {
  title: "KAT (Kigali Apple Tech) Repair Management",
  description: "Premium Repair Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
