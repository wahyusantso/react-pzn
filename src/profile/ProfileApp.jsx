import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

export default function ProfileApp() {
    return (
        <>
            <ProfileContext.Provider value="Wahyu Santoso">
                <h1>Profile App</h1>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}