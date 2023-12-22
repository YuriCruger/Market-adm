import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-blackBGLoginPage min-h-screen w-screen">
      <div className="flex">
        <h1 className="text-[#f0f]">SIDEBAR</h1>
        {children}
      </div>
    </main>
  );
}
