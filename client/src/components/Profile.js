import React, { useState, useEffect } from "react";
import ProfileSample from "./ProfileSample"
import Axios from "axios";
import "../css/profile-style.css";
import ProfileSetXP from "./ProfileSetXP";

function Profile() {
  const [details, setDetails] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");

  function getBio(details) {
    Axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"), //the token is a variable which holds the token
    };
    Axios.post("/getBio", {
      username: localStorage.getItem("username"),
    }).then(
      (response) => {
        //console.log(response.data.message);
        setBio(response.data.message);
        setDetails(localStorage.getItem("username"));
        setError("");
      },
      (error) => {
        console.log(error);
        setBio("");
        setError("Couldn't get Bio");
      }
    );
  }
  getBio(details);

  useEffect(() => {
    document.title = localStorage.getItem("username") + "'s Profile";
    ProfileSample();
    ProfileSetXP();
  }, []);

  return (
    <body id="profilebody">
      <main className="profile">
        <div className="profile-content profile">
          <section className="p-head">
            <div id="user-pfp">
              <img
                alt="profile"
                src="https://www.thispersondoesnotexist.com/image"
              />
            </div>
            <div id="user-infosec">
              <h1 id="name-title">{details}</h1>
              <p>LEADERBOARD RANKING</p>
              <p>#<span className="setrank"></span></p>
              <p>LEVEL <span className="setlvl"></span></p>
              <p><span className="setxp"></span> XP</p>
              <p className="bio">
                {bio !== "" ? (
                  <p className="">{bio}</p>
                ) : (
                  <p className="error">{error}</p>
                )}
              </p>
            </div>
            <div id="circle-stats" title="XP">
              <svg>
                <circle
                  className="circle-xp"
                  cx="125"
                  cy="125"
                  r="100"
                ></circle>
              </svg>

              <div className="div-lvl">
                <div>
                  <h3>Level <span className="setlvl">0</span></h3>
                </div>
              </div>
            </div>
          </section>
          <div className="profile-div-left">
            <section className="pf-sec sec-friends">
              <h4>FRIENDS</h4>
              <div className="frn">
                <div className="frn-img"></div>
                <h5>FriendUsername</h5>
              </div>
              <div className="frn">
                <div className="frn-img"></div>
                <h5>FriendUsername</h5>
              </div>
              <div className="frn">
                <div className="frn-img"></div>
                <h5>FriendUsername</h5>
              </div>
              <div className="frn">
                <div className="frn-img"></div>
                <h5>FriendUsername</h5>
              </div>
            </section>
          </div>
          <div className="profile-div-right">
            <section className="pf-sec sec-badges">
              <h4>BADGES</h4>
              <div className="ubadge" title="Say Hello to Coding!"></div>
              <div className="ubadge" title="Badge Name"></div>
              <div className="ubadge" title="Badge Name"></div>
              <div className="ubadge" title="Badge Name"></div>
              <div className="ubadge" title="Badge Name"></div>
              <div className="ubadge" title="Badge Name"></div>
            </section>

            <section className="pf-sec sec-most-played">
              <h4>MOST PLAYED GAMES</h4>
              <div className="game">
                <h5>Hello World!</h5>
              </div>
              <div className="game">
                <h5>Game Title 2</h5>
              </div>
              <div className="game">
                <h5>Game Title 3</h5>
              </div>
              <div className="game">
                <h5>Game Title 4</h5>
              </div>
              <div className="game">
                <h5>Game Title 5</h5>
              </div>
              <div className="game">
                <h5>Game Title 6</h5>
              </div>
            </section>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Profile;
