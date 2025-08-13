import { useParams } from "react-router-dom";

const data = {
  pompompurin: {
    name: "폼폼푸린",
    description: "리트리버",
  },
  muffin: {
    name: "머핀",
    description: "폼폼푸린의 친구",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.description}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
