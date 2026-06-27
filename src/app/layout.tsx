import RTKStoreProvider from "@/components/RTKStoreProvider/rtk-store-provider.component";

export const metadata = {
  title: "Chat App",
  description: "A real-time chat application with public and private messaging features built with Next.js, React, Redux Toolkit, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-black">
        <RTKStoreProvider>
        {children}
        </RTKStoreProvider>
      </body>
    </html>
  );
}
