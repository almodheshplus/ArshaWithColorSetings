/*
    # Coded With 🧡 By Youssef Almodhesh
*/

let toggleOverlay = document.querySelectorAll("[data-toggle='overlay']");
let overlayContainer = document.querySelector("#overlayContainer");
let selectColor = document.querySelectorAll("#colorSettingsContainer .colors-container .choose-color .select-color");

for (let toggleBtn of toggleOverlay) {
    toggleBtn.onclick = () => {
        overlayContainer.classList.toggle("hidden");
    }
}

function deleteCheckSign(affectedElement, affectedProperity) {
    for (let element of document.querySelectorAll(`[data-affect-element="${affectedElement}"][data-affect-properity="${affectedProperity}"]`)) {
        element.innerHTML = "";
    }
}

for (let selectBtn of selectColor) {
    selectBtn.onclick = function () {
        let affectedElement = this.getAttribute("data-affect-element"),
        affectedProperity   = this.getAttribute("data-affect-properity"),
        newValue            = this.style.background,
        affectedElements    = document.querySelectorAll(affectedElement);
        for (let element of affectedElements) {
            element.style[affectedProperity] = newValue;            
        }
        deleteCheckSign(affectedElement, affectedProperity);
        this.innerHTML = '<i class="bi bi-check"></i>';
    }
}