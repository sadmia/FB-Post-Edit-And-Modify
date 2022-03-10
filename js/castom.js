"use strict";

let nameInput = document.getElementById("nameInput");
let proImgLink = document.getElementById("proImgLink");
let fBLink = document.getElementById("FBLink");
let inputPostText = document.getElementById("inputPostText");
let postImgLink = document.getElementById("postImgLink");

let submitBtn = document.getElementById("submitBtn");
let clearBtn = document.getElementById("clearBtn");
let skipBtn = document.getElementById("skipBtn");



// Data Store Start

	let inputName = "MD Mehedi Hasan";

	let PostImages_1 = "https://i.ytimg.com/vi/HzB7JiY-wsk/maxresdefault.jpg";
	let imagesSRC = "images/profile/profile.jpg";
	let imagesHREF = "https://www.facebook.com/mehedihasansad.profile";
	let postText = "অনলাইন টিউটোরিয়ালগুলি সম্পূর্ণ প্রতিক্রিয়াশীল ওয়েবসাইট ডিজাইন এবং টিউটারিয়াল, ক্রিয়েটিভ সিএসএস অ্যানিমেশন এবং হোভার এফেক্টস, সৃজনশীল ইউএক্স এবং ইউআই ডিজাইন এইচটিএমএল এবং সিএসএস ব্যবহার করে এবং আরও অনেক কিছু শেখার জন্য একটি চ্যানেল | এইচটিএম 5, সিএসএস 3, জাভাস্ক্রিপ্ট, JQuery, বুটস্ট্র্যাপ, ফটোশপ, ওয়েবসাইট ডিজাইন এবং টিউটরিয়াল ভিডিও আপলোড।";

	let likeCount = 0;
	let loveCount = 0;
	let wowCount = 0;
	let sadCount = 0;
	let careCount = 0;
	let angryCount = 0;

	let allReact = likeCount + loveCount + wowCount + sadCount + careCount + angryCount;

	let commentCoutn = 0;
	let shareCoutn = 0;
// Data Store End



let body = document.querySelector("body");


let profileName = document.querySelectorAll(".NameTitle");

let profileImages = document.querySelectorAll('.profileImages');
let profileImgLink = document.querySelectorAll(".profileImgLink");
let postTimeAndDate = document.getElementById("postTimeAndDate");

let postImagesDiv = document.getElementById("postImagesDiv");

let postTitele = document.getElementById('postTitele');
let showTextDiv = document.querySelector(".showText");
let seeBtn = document.getElementById("seeBtn");

let likeShow = document.querySelector("#likeShow");
let leftLS = document.querySelector("#leftLS");
let iconBar1 = document.querySelector(".iconBar1");
let iconBar2 = document.querySelector(".iconBar2");
let iconBar3 = document.querySelector(".iconBar3");

let iconBar1I = iconBar1.querySelector("img");
let iconBar2I = iconBar2.querySelector("img");
let iconBar3I = iconBar3.querySelector("img");

let likeBtn = document.getElementById("likeBtn");
let reactIcon = document.getElementById("reactIcon");
let reactText = document.getElementById("reactText");

let likeCountTag = document.getElementById("likeCountTag");

let allCourn = document.getElementById("likeCount");

let commentCount = document.getElementById("commentCount");
let shareCount = document.getElementById("shareCount");

let hoverReact = document.querySelector(".hoverReact");

let LikeBtn = document.getElementById("LikeBtn");
let LoveBtn = document.getElementById("LoveBtn");
let WowBtn = document.getElementById("WowBtn");
let SadBtn = document.getElementById("SadBtn");
let HahaBtn = document.getElementById("HahaBtn");
let AngryBtn = document.getElementById("AngryBtn");


let iconClickDot = document.getElementById("iconClickDot");
let dotClickActive = document.querySelector(".DotClickActive");


for (let i = 0; i < profileImages.length; i++) {
	profileImages[i].src = imagesSRC;
}
for (let i = 0; i < profileImgLink.length; i++) {
	profileImgLink[i].href = imagesHREF;
	profileImgLink[i].target = "facebook";
}

for (let i = 0; i < profileName.length; i++) {
	profileName[i].innerText = inputName;
	profileName[i].href = imagesHREF;
	profileName[i].target = "facebook";
} 

let postImg_1 = postImagesDiv.querySelector("img");
postImg_1.src = PostImages_1;


if (postText.length == 0) {
	showTextDiv.style.display = "none";
} else if (postText.length >= 145) {
	let catText145 = postText.slice(0, 145);
	postTitele.innerText = catText145 + "...";
} else {
	postTitele.innerText = postText;
	seeBtn.style.display = "none";
}



seeBtn.addEventListener("click", function() {
	postTitele.innerText = postText;
	seeBtn.classList.add("disNone");
})
postTitele.addEventListener("click", function() {
	let catText145 = postText.slice(0, 145);
	postTitele.innerText = catText145 + "...";
	seeBtn.classList.remove("disNone");
})

function liveTime() {
	let date = new Date();
	let year = date.getFullYear();
	let manth = date.getMonth() + 1;
	let day = date.getDate();
	let week = date.getDay();
	let hour = date.getHours();
	let minite = date.getMinutes();

	let IntConvartManth = '';
	let IntConvartWeek = '';
	let apChake = '';
	let hourChake;

	if (hour >= 12) {
		apChake = "PM";
	} else {
		apChake = "AM";
	}

	
	if (manth == 1) {
		IntConvartManth = "January";
	} else if (manth == 2) {
		IntConvartManth = "February";
	} else if (manth == 3) {
		IntConvartManth = "March";
	} else if (manth == 4) {
		IntConvartManth = "April";
	} else if (manth == 5) {
		IntConvartManth = "May";
	} else if (manth == 6) {
		IntConvartManth = "Jume";
	} else if (manth == 7) {
		IntConvartManth = "July";
	} else if (manth == 8) {
		IntConvartManth = "August";
	} else if (manth == 9) {
		IntConvartManth = "September";
	} else if (manth == 10) {
		IntConvartManth = "October";
	} else if (manth == 11) {
		IntConvartManth = "November";
	} else if (manth == 12) {
		IntConvartManth = "December";
	}

	if (week == 0) {
		IntConvartWeek = "Sunday";
	} else if (week == 1) {
		IntConvartWeek = "Monday";
	} else if (week == 2) {
		IntConvartWeek = "Tuesday";
	} else if (week == 3) {
		IntConvartWeek = "Wednesday";
	} else if (week == 4) {
		IntConvartWeek = "Thursday";
	} else if (week == 5) {
		IntConvartWeek = "Friday";
	} else if (week == 6) {
		IntConvartWeek = "Saturday";
	}

	if (hour < 12) {
		hourChake = hour;
	} else if (hour == 13) {
		hourChake = 1;
	}
	 else if (hour == 14) {
		hourChake = 2;
	} else if (hour == 15) {
		hourChake = 3;
	}
	 else if (hour == 16) {
		hourChake = 4;
	} else if (hour == 17) {
		hourChake = 5;
	}
	 else if (hour == 18) {
		hourChake = 6;
	} else if (hour == 19) {
		hourChake = 7;
	}
	 else if (hour == 20) {
		hourChake = 8;
	} else if (hour == 21) {
		hourChake = 9;
	}
	 else if (hour == 22) {
		hourChake = 10;
	} else if (hour == 23) {
		hourChake = 11;
	}
	 else if (hour == 0) {
		hourChake = 12;
	}

	postTimeAndDate.title = `${IntConvartWeek}, ${IntConvartManth} ${day}, ${year} at ${hourChake}:${minite} ${apChake}`;
	postTimeAndDate.innerText = `${IntConvartManth} ${day} at ${hourChake}:${minite} ${apChake}`;
}
liveTime();



likeBtn.addEventListener("mouseover", function() {
	hoverReact.style.visibility = "visible";
})
likeBtn.addEventListener("mouseout", function() {
	hoverReact.style.visibility = "hidden";
})

hoverReact.addEventListener("mouseover", function() {
	hoverReact.style.visibility = "visible";
})
hoverReact.addEventListener("mouseout", function() {
	hoverReact.style.visibility = "hidden";
})


let likeBtnVlu = 0;
likeBtn.addEventListener("click", function() {
	likeBtnVlu = likeBtnVlu + 1;

	if (likeBtnVlu == 1) {
		likeBtnVlu = 1;
		likeCount = likeCount + 1;
		likeCountTag.innerText = likeCount;
		iconBar1I.src = "images/fbicon/like.png";
		reactIcon.style.filter = "grayscale(0%)";
		countLCount(likeCount);
	} else if (likeBtnVlu = 2) {
		likeBtnVlu = 0;

		likeCount = likeCount - 1;
		if (likeCount < 0) {
			likeCount = 0;
		} else {
			likeCount = likeCount;
		}
		
		likeCountTag.innerText = likeCount;
		iconBar1I.src = "images/fbicon/like.png";
		reactIcon.src = "images/fbicon/like.png";
		reactIcon.style.filter = "grayscale(100%)";
		countLCount(likeCount);
	}
	
})

LikeBtn.addEventListener("click", function() {
	likeBtnVlu = likeBtnVlu + 1;
	iconBar1I.src = "images/fbicon/like.png";
	reactIcon.src = "images/fbicon/like.png";
	reactIcon.style.filter = "grayscale(0%)";
	function activeLikeAdd(CountActive) {
		likeCountTag.innerText = CountActive;
	}
	likeCountTag.innerText = "1";
	countLCount(1);
})

LoveBtn.addEventListener("click", function() {
	likeBtnVlu = likeBtnVlu + 1;
	iconBar1I.src = "images/fbicon/love.png";
	reactIcon.src = "images/fbicon/love.png";
	reactIcon.style.filter = "grayscale(0%)";
	function activeLikeAdd(CountActive) {
		likeCountTag.innerText = CountActive;	
	}
	likeCountTag.innerText = "1";
	countLCount(1);
})
WowBtn.addEventListener("click", function() {
	likeBtnVlu = likeBtnVlu + 1;
	iconBar1I.src = "images/fbicon/wow.png";
	reactIcon.src = "images/fbicon/wow.png";
	reactIcon.style.filter = "grayscale(0%)";
	function activeLikeAdd(CountActive) {
		likeCountTag.innerText = CountActive;	
	}
	likeCountTag.innerText = "1";
	countLCount(1);
})

HahaBtn.addEventListener("click", function() {
	likeBtnVlu = likeBtnVlu + 1;
	iconBar1I.src = "images/fbicon/haha.png";
	reactIcon.src = "images/fbicon/haha.png";
	reactIcon.style.filter = "grayscale(0%)";
	function activeLikeAdd(CountActive) {
		likeCountTag.innerText = CountActive;	
	}
	likeCountTag.innerText = "1";
	countLCount(1);
})
SadBtn.addEventListener("click", function() {
	likeBtnVlu = likeBtnVlu + 1;
	iconBar1I.src = "images/fbicon/sad.png";
	reactIcon.src = "images/fbicon/sad.png";
	reactIcon.style.filter = "grayscale(0%)";
	function activeLikeAdd(CountActive) {
		likeCountTag.innerText = CountActive;	
	}
	likeCountTag.innerText = "1";
	countLCount(1);
})

AngryBtn.addEventListener("click", function() {
	likeBtnVlu = likeBtnVlu + 1;
	iconBar1I.src = "images/fbicon/angry.png";
	reactIcon.src = "images/fbicon/angry.png";
	reactIcon.style.filter = "grayscale(0%)";
	function activeLikeAdd(CountActive) {
		likeCountTag.innerText = CountActive;	
	}
	likeCountTag.innerText = "1";
	countLCount(1);
})


let iconClickDotVlu = 0;
iconClickDot.addEventListener("click", function() {
	iconClickDotVlu = iconClickDotVlu + 1;
	if (iconClickDotVlu == 1) {
		iconClickDotVlu = 1;
		dotClickActive.style.display = "block";
	} else if (iconClickDotVlu == 2) {
		iconClickDotVlu = 0;
		dotClickActive.style.display = "none";
	}
})


function countLCount(vlu) {
	if (vlu == 0) {
		likeShow.style.display = "none";
	} else if (vlu > 0) {
		likeShow.style.display = "block";
	}
}


let poppap = document.querySelector(".poppap");
let closeBtn = document.querySelector(".closeBtn");
let editMake = document.querySelector(".EditMake");

closeBtn.addEventListener("click", function() {
	body.style.gridTemplateColumns = "1fr 12fr";
	poppap.style.marginLeft = "-100%";
})

editMake.addEventListener("click", function() {
	body.style.gridTemplateColumns = "1fr 2fr";
	poppap.style.marginLeft = "0%";
})


let tDownIcon = document.getElementById("tDownIcon");
let editPostClick = document.getElementById("EditPostClick");
let ePClickBtn = document.getElementById("EPClickBtn");

ePClickBtn.addEventListener("click", function() {
	editPostClick.classList.toggle("heightAddOfRemove");
	tDownIcon.classList.toggle("fa-angle-up");
})

let roundBtnVlu = 0;
let roundBtnClick = document.querySelector("#roundBtnClick");
let moonAndSunIcon = document.getElementById("moonAndSunIcon");
let moveBtn = document.getElementById("moveBtn");
roundBtnClick.addEventListener("click", function() {
	roundBtnVlu = roundBtnVlu + 1;
	moonAndSunIcon.classList.toggle("fa-sun");
	if (roundBtnVlu == 1) {
		roundBtnVlu = 1;
		body.classList.add("darkMode");
		moveBtn.style.left = "50%";
		moveBtn.style.backgroundColor = "#056BE1";
		roundBtnClick.style.backgroundColor = "#8BBEF9";
	} else if (roundBtnVlu == 2) {
		roundBtnVlu = 0;
		body.classList.remove("darkMode");
		moveBtn.style.left = "0%";
		moveBtn.style.backgroundColor = "#3337";
		roundBtnClick.style.backgroundColor = "#3332";
	}
})






clearBtn.addEventListener("click", function() {
	nameInput.value = "";
	proImgLink.value = "";
	fBLink.value = "";
	inputPostText.value = "";
	postImgLink.value = "";
})

skipBtn.addEventListener("click", function() {
	nameInput.value = "";
	proImgLink.value = "";
	fBLink.value = "";
	inputPostText.value = "";
	postImgLink.value = "";
	editPostClick.classList.add("heightAddOfRemove");
	tDownIcon.classList.add("fa-angle-up");
})


submitBtn.addEventListener("click", function() {
	if (nameInput.value !== "") {
		inputName = nameInput.value;
		nameInput.value = "";
		for (let i = 0; i < profileName.length; i++) {
			profileName[i].innerText = inputName;
		}
	}

	if (proImgLink.value !== "") {
		imagesSRC = proImgLink.value;
		proImgLink.value = "";
		for (let i = 0; i < profileImages.length; i++) {
			profileImages[i].src = imagesSRC;
		}
	}

	if (fBLink.value !== "") {
		imagesHREF = fBLink.value;
		fBLink.value = "";
		for (let i = 0; i < profileImgLink.length; i++) {
			profileImgLink[i].href = imagesHREF;
		}
		for (let i = 0; i < profileName.length; i++) {
			profileName[i].href = imagesHREF;
		}
	}

	if (postImgLink.value !== "") {
		PostImages_1 = postImgLink.value;
		postImgLink.value = "";
		images.src = PostImages_1;
	} else if (postImgLink.value.length == 0) {
		images.style.display = "none";
	}

	if (inputPostText.value !== "") {
		postText = inputPostText.value;
		inputPostText.value = "";
		if (postText.length >= 145) {
			let catText145 = postText.slice(0, 145);
			postTitele.innerText = catText145 + "...";
			seeBtn.style.visibility = "visible";
		} else if (postText.length < 145) {
			postTitele.innerText = postText;
			seeBtn.style.visibility = "hidden";
		}
		seeBtn.addEventListener("click", function() {
			postTitele.innerText = postText;
			seeBtn.style.visibility = "hidden";
		})
		postTitele.addEventListener("click", function() {
			if (postText.length < 145) {
				postTitele.innerText = postText;
				seeBtn.style.visibility = "hidden";
			} else if (postText.length >= 145) {
				let catText145 = postText.slice(0, 145);
				postTitele.innerText = catText145 + "...";
				seeBtn.style.visibility = "visible";
			}
		})
	} else if (postText.length == 0) {
		showTextDiv.style.display = "none";
	} 

	if (nameInput.value.length == 0 && proImgLink.value.length == 0 && proImgLink.value.length == 0) {

	} 

})
