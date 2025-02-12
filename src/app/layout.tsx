import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import RecoilRootProvider from "../utils/recoilRootProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CultPick",
  description: "문화를 쉽게 즐기는 방법, 컬픽",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RecoilRootProvider>
          <div
            style={{
              minHeight: "calc(100vh - 10rem)",
            }}
          >
            {children}
          </div>
          <Footer />
        </RecoilRootProvider>
      </body>
    </html>
  );
}
