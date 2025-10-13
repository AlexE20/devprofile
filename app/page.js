import Image from "next/image";
import DevProfile from "./views/DevProfile";
import { profileData } from "./DummyData/DummyData";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-[#F5F8FA]">

      <DevProfile
        image={profileData.avatar}
        name={profileData.name}
        charge={profileData.title}
        location={profileData.location}
        bio={profileData.bio}
      />
    </main>
  );
}
