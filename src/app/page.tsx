import "./globals.css";
import UserAuth from "@/components/UserAuth/user-auth.component";
import LeftSection from "@/components/LeftSection/left-section.component";
import RightSection from "@/components/RightSection/right-section.component";



export default function Home() {
  return (
    <div className='flex h-dvh'>
        {/* <UserAuth /> */}
      <LeftSection />
      <RightSection />
    </div>
  );
}
