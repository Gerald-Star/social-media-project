import "./profile.css";
// import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
//  import Rightbar from "../../components/rightbar/Rightbar";
//import PersonIcon from '@mui/icons-material/Person';//
export default function Profile() {
  return (
    <>
      {/* <Topbar /> */}
      <div className="profile">
              {/* <Sidebar /> */}
              {/*<PersonIcon />*/}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="../images/Indonesia.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="../images/ben-parker.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Ben Parker</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
             {/* <Feed /> */}
            {/* <Rightbar  />  */}
          </div>
        </div>
      </div>
    </>
  );
}