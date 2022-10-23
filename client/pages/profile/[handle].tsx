/* pages/profile/[handle].js */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { client, getProfile } from "../../api";
import { useQuery } from "urql";
type Profile = {
  picture: {
    original: {
      url: string;
    };
  };
  handle: string;
  bio: string;
};
export default function Profile() {
  /* create initial state to hold user profile and array of publications */
  const [profile, setProfile] = useState<Profile>();
  /* using the router we can get the lens handle from the route param */
  const router = useRouter();
  const { handle } = router.query;
  console.log(handle);
  const [result, reexecuteQuery] = useQuery({
    query: getProfile,
    variables: { handle },
  });

  useEffect(() => {
    if (handle) {
      fetchProfile();
    }
  }, [handle]);

  async function fetchProfile() {
    try {
      /* fetch the user profile using their handle */
      const { data, fetching, error } = result;

      console.log(data, "xx");
      const returnedProfile = await client
        .query(getProfile, { handle })
        .toPromise();
      console.log(returnedProfile);
      const profileData = returnedProfile.data.profile;
      /* format their picture if it is not in the right format */
      const picture = profileData.picture;
      if (picture && picture.original && picture.original.url) {
        if (picture.original.url.startsWith("ipfs://")) {
          let result = picture.original.url.substring(
            7,
            picture.original.url.length
          );
          profileData.picture.original.url = `http://lens.infura-ipfs.io/ipfs/${result}`;
        }
      }
      setProfile(profileData);
      /* fetch the user's publications from the Lens API and set them in the state */
    } catch (err) {
      console.log("error fetching profile...", err);
    }
  }

  if (!profile) return null;

  return (
    <div className="pt-20">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-64 rounded-full"
          src={profile.picture?.original?.url}
        />
        <p className="text-4xl mt-8 mb-8">{profile.handle}</p>
        <p className="text-center text-xl font-bold mt-2 mb-2 w-1/2">
          {profile.bio}
        </p>
      </div>
    </div>
  );
}
