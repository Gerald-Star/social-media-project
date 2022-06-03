import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="../images/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="../images/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Enjoy Modern Infrastructure:</span>
            <span className="rightbarInfoValue">Berlin</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City of Life:</span>
            <span className="rightbarInfoValue">Spain</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Land of Tourists:</span>
            <span className="rightbarInfoValue">Maldives</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="../images/ben-parker.jpg"
              alt="Ben Parker"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ben Parker</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="../images/joseph-gonzalez.jpg"
              alt="Joseph Gonzalez"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Joseph Gonzalez</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="../images/jurica-koletic.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Juric Koletic</span>
                </div>
                
          <div className="rightbarFollowing">
            <img
              src="../images/may-gauthier.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">May Gauthier</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="../images/michael-dam.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Michael Dam</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="../images/toa-heftiba.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Toa heftiba</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}