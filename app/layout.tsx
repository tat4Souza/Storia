import { ReactNode } from "react";
import "../styles/css/style.css";

export const metadata = {
  title: "Storia",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
