import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Harsh', lastName: 'Mishra' };

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar 
        user={loggedIn}
        />

      <div className="flex size-full font-inter">
        <div className="root-layout">
           <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
        </div>
        <div>
            <MobileNav user={loggedIn}/>
        </div>
         {children}
      </div>
    </main>
  );
}
