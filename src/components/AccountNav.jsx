import { useState } from "react";
import { IconLogin } from "../assets/Index";

export default function AccountNav() {
  const [logUserIn, setLoguserIn] = useState(false);

  const handleLogIn = () => {
    setLoguserIn(true);
  };
  const handleLogOut = () => {
    setLoguserIn(false);
  };

  return (
    <>
    <div class="UI__header__acc-nav">
      {!logUserIn ? (
        <div onClick={handleLogIn}>
          <IconLogin />
          <h3>signin</h3>
        </div>
      ) : (
        <div >
          <div onClick={handleLogOut}><h3>log out</h3></div>

        </div>
      )}
      </div>
    </>
  );
}
