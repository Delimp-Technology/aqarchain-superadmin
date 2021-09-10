import React from "react";
import profile from "../../assets/images/pprofile.jpg";

const UserInfo = () => {
  return (
    <p className="text-center profile_text mx-3">
      <span>
        <img src={profile} className="img-fluid mr-2" />
      </span>
      Jhon Doe
    </p>
  );
};
export default UserInfo;
