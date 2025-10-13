import Card from "../components/Card";
import Profile from "../components/Profile";
import { profileData } from "../DummyData/DummyData";
import Badge from "../components/Badge";
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
      <div className="flex flex-col mt-8 ">
      <h2 className="text-2xl text-black font-extrabold ml-5">Skills</h2>
      <Badge className="ml-5" things={profileData.skills} />
      </div>
    </Card>
  );
}
