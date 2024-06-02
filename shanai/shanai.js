// MAP AREAS
const faneArea = document.querySelector("#fane");
const trigArea = document.querySelector("#trig");
const belfrostArea = document.querySelector("#belfrost");
const foArea = document.querySelector("#fo");
const maulArea = document.querySelector("#maul");
const annisArea = document.querySelector("#annis");
const alldarkArea = document.querySelector("#alldark");
const dilothArea = document.querySelector("#diloth");
const westfallArea = document.querySelector("#westfall");
const tuskArea = document.querySelector("#tusk");
const aroArea = document.querySelector("#aro");
const tethArea = document.querySelector("#teth");
const lykaArea = document.querySelector("#lyka");
const baldurkeepArea = document.querySelector("#baldurkeep");
const anethyrArea = document.querySelector("#anethyr");
const faelaenArea = document.querySelector("#faelaen");
const bahzArea = document.querySelector("#bahz");
const karathuhmArea = document.querySelector("#karathuhm");
const mystraArea = document.querySelector("#mystra");
const duinArea = document.querySelector("#duin");
const saltcliffArea = document.querySelector("#saltcliff");
const amyrArea = document.querySelector("#amyr");
const valynorArea = document.querySelector("#valynor");
const demlinArea = document.querySelector("#demlin");

// PAGE ELEMENTS
const popup = document.querySelector(".popup-overlay");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector("sidebar-container");
const sidebarContent = document.querySelector(".sidebar-content");
const pyreMap = document.querySelector(".pyre-map");

// Object containing all the place info

const placesInfo = {
  ithaar: {
    place: "Ithaar",
    leader: "Chief Margol the Cursed",
    description: `In the centre of the known world floats the small island country of Ithaar, the jewel of Shanai. The Ithaari were early masters of navigational science and seacraft, gaining naval dominance, joining the known world  together with trade. Though its land does not yield an abundance of resources, nor its population a vast army, Ithaar is undoubtedly the wealthiest country in Shanai through trade and a careful control of the seas. For a thousand years, Ithaar has been ruled by an order known as the faceless council. The council meets in secret, their identities unknown and members are appointed only after the death of a sitting member.`,
  },
};

for (const [placeKey, placeInfo] of Object.entries(placesInfo)) {
  // attach event listener
  const areaMap = document.getElementById(placeKey);
  console.log(areaMap, placeInfo);
  areaMap.addEventListener("click", (e) => {
    clear();
    getInfo(placeInfo);
  });
}

// Click Handler
function getInfo(info) {
  const Header = document.createElement("h3");
  Header.innerHTML = info.place;
  sidebarContent.appendChild(Header);

  if (info.leader != undefined) {
    const Leader = document.createElement("h4");
    Leader.innerHTML = info.leader;
    sidebarContent.appendChild(Leader);
  }

  const Content = document.createElement("p");
  Content.innerHTML = info.description;
  sidebarContent.appendChild(Content);
}

// Event listeners
closeBtn.addEventListener("click", () => {
  clear();
  const placeholder = document.createElement("p");
  placeholder.innerHTML =
    "<em>Click a place on the map to begin exploring Pyre!</em>";
  placeholder.classList.add("placeholder");
  sidebarContent.appendChild(placeholder);
});

// Clears sidebar
const clear = () => {
  sidebarContent.innerHTML = "";
};

// For popup/modal
// const popupActive = () => {
//     popup.classList.add('overlay-active');
// }
