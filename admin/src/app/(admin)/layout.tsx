import { Metadata } from "next";
import { Sidebar } from "../../components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Inventory",
    template: "%s",
  },
  description: "Generated by create next app",
};
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-hardBlack flex min-h-screen w-full">
      <Sidebar />
      {children}
    </main>
  );
}
