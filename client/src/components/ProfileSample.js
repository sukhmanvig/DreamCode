
const ProfileSample = () => {

    function setBadges() {
        let badges = document.querySelectorAll(".ubadge")
        badges[0].style.backgroundImage = "url('/images/badges/writebio.png')" 
        badges[1].style.backgroundImage = "url('/images/badges/helloworld.png')" 
        badges[2].style.backgroundImage = "url('/images/badges/learnlists.png')" 
        badges[3].style.backgroundImage = "url('/images/badges/onldrboard.png')" 
        badges[4].style.backgroundImage = "url('/images/badges/wingame.png')" 
        badges[5].style.backgroundImage = "url('/images/badges/addfriend.png')"  

        // Hover for badge titles
        badges[0].setAttribute("title", "Wrote a Bio")
        badges[1].setAttribute("title", "Completed HelloWorld!")
        badges[2].setAttribute("title", "Learned Python Lists")
        badges[3].setAttribute("title", "Been in the Top 5 Leaderboard")
        badges[4].setAttribute("title", "Won a Game")
        badges[5].setAttribute("title", "Made a Friend") 
    }


    var friendsList = [
        "ggCoder",
        "SarahG",
        "JSbestLang",
        "jokelang",
        "etudiante",
        "Rayla211",
        "y33t",
        "pandaBear3000",
        "stoptheCAP"
    ]


    function getRandomInt(max) {
        //max not included
        return Math.floor(Math.random() * max);
    }

    function setFriends() {
        let urFriends = []
        let inds = []

        while (urFriends.length < 4) {
            let ind = getRandomInt(friendsList.length)
            let isFound = inds.indexOf(ind)
            
            // if not in list yet
            if (isFound < 0) {
                inds.push(ind)
                urFriends.push(friendsList[ind])
            }
        }

        let disF = document.querySelectorAll(".frn h5")
        let dps = document.querySelectorAll(".frn-img")

        for (let i = 0; i < urFriends.length; i++ ) {
            disF[i].innerHTML = urFriends[i]

            let imgdp = document.createElement("img")
            imgdp.setAttribute("src", "/images/userpfp.png")
            imgdp.setAttribute("alt", "friend")

            dps[i].appendChild(imgdp)
        }
    }

    var gamesList = [
        "Python Lists",
        "Hello World!",
        "Tree Traversals",
        "Dictionaries",
        "The If Game",
        "Stacks",
        "Queues",
        "Sorting"
    ]

    function setMostPlayed() {
        let mostPlayed = []
        let inds = []

        while (mostPlayed.length < 6) {
            let ind = getRandomInt(gamesList.length)
            let isFound = inds.indexOf(ind)
            
            // if not in list yet
            if (isFound < 0) {
                inds.push(ind)
                mostPlayed.push(gamesList[ind])
            }
        }

        let disF = document.querySelectorAll("div.game h5")

        
        for (let i = 0; i < mostPlayed.length; i++ ) {
            console.log(disF[i])
            disF[i].innerHTML = mostPlayed[i]

        }

        console.log(mostPlayed)
        // let dps = document.querySelectorAll(".frn-img")
        // for (let i = 0; i < mostPlayed.length; i++ ) {
            
        // }
    }
    
    function setInfo() {
        let lvl = document.querySelectorAll(".setlvl") 
        for (let i = 0; i < lvl.length; i++ ) {
            lvl[i].innerHTML = getRandomInt(10)
        }
        let rank = document.querySelectorAll(".setrank")
        for (let i = 0; i < rank.length; i++ ) {
            rank[i].innerHTML = getRandomInt(99999)
        }
    }
    setBadges();
    setFriends();
    setMostPlayed();
    setInfo()
}
export default ProfileSample
