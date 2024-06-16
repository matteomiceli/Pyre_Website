// PAGE ELEMENTS
const popup = document.querySelector(".popup-overlay");
const closeBtn = document.querySelector(".close-btn");
const gridWrapper = document.getElementById("grid-wrapper")
const sidebarContainer = document.querySelector(".sidebar-container");
const sidebarContent = document.querySelector(".sidebar-content");

async function loadPlaceInfo() {
  const res = await fetch('./places.json')
  return res.json()
}

// Click Handler
function getInfo(info) {
  clear()
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

// Info sidepanel
let isSidepanelClosed = true;

function clear() {
  sidebarContent.innerHTML = "";
}

closeBtn.addEventListener("click", () => {
  if (isSidepanelClosed) {
    sidepanel("open")
  } else {
    sidepanel("close")
  }
});

function sidepanel(action) {
  if (action === "open") {
    if (!isSidepanelClosed) {
      return
    }
    closeBtn.textContent = ">"
    closeBtn.style.transform = "translateX(-48px)"
    gridWrapper.style.gridTemplateColumns = "1fr 350px"
    sidebarContainer.style.padding = "48px 24px"
    isSidepanelClosed = false
  }
  else if (action === "close") {
    if (isSidepanelClosed) {
      return
    }
    closeBtn.textContent = "<"
    closeBtn.style.transform = "translateX(-24px)"
    gridWrapper.style.gridTemplateColumns = "1fr 0px"
    sidebarContainer.style.padding = "48px 0"
    isSidepanelClosed = true
  }
  return
}

// leaflet
async function renderMap(imgPath, mapHeight, mapWidth) {
  const placesInfo = await loadPlaceInfo()

  var map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -4,
    maxZoom: 0,
    zoomSnap: 0.5,
    attributionControl: false,
  });

  var bounds = [
    [0, 0],
    [mapHeight, mapWidth],
  ];
  var image = L.imageOverlay(imgPath, bounds).addTo(map);
  map.fitBounds(bounds);
  image.getElement().style.border = "4px double white";
  image.getElement().style.boxSizing = "border-box";


  for (const placeInfo of Object.values(placesInfo)) {
    // draw rect from coords
    if (placeInfo.coords) {
      L.rectangle(placeInfo.coords, { color: 'transparent' })
        .on('click', () => getInfo(placeInfo))
        .on('hover', () => console.log('hover'))
        .addTo(map)
    }
  }

}

