import Card from "../components/Card";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import { profileData } from "../DummyData/DummyData";
export default function DevProfile({
  skills,
  projects,
  text,
  image,
  name,
  charge,
  location,
  bio,
}) {
  return (
    <Card>
      <Profile
        image={image}
        name={name}
        charge={charge}
        location={location}
        bio={bio}
      />
      <Skills skills={profileData.skills}/>
    </Card>
  );
}
