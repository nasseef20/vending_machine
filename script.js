if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/vending_machine/service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((error) => console.log("Service Worker Registration Failed:", error));
}  

function fadeOut() {
    document.querySelectorAll(".firstpage").forEach(el => {
        el.classList.add("fade-out");
    });

// Prevent multiple calls
    document.querySelector(".button").disabled = true;

    setTimeout(() => {
        document.querySelectorAll(".firstpage").forEach(el => el.remove());
        secondpage();
    }, 300);
}

function headToDownloadPage() {
    document.querySelectorAll(".firstpage").forEach(el => {
        el.classList.add("fade-out");
    });

// Prevent multiple calls
    document.querySelector(".button").disabled = true;

    setTimeout(() => {
        document.querySelectorAll(".firstpage").forEach(el => el.remove());
        downloadPage();
    }, 300);
}

const container = document.getElementById("container");

function downloadPage() {

    const downloadtext = document.createElement("p");
    downloadtext.innerHTML = "Scan the QR code to download the app";
    downloadtext.classList.add("bodytext");
    container.appendChild(downloadtext);

    const download_qr = document.createElement("img");
    download_qr.setAttribute("src", "download_qr.png");
    download_qr.classList.add("qrcode");
    container.appendChild(download_qr);

    const done = document.createElement("button");
    done.innerHTML = "Done";
    done.classList.add("button");
    container.appendChild(done);

    done.addEventListener("click", function () {
        window.location.href = "/vending_machine/index.html";
    });

}

weight = 0;
function secondpage(){
    const firstp = document.createElement("p");
    firstp.innerHTML = "Dump plastic waste into the recycle bin to start";
    firstp.classList.add("bodytext");
    container.appendChild(firstp);
    const weightBar = document.createElement("p");
    weightBar.innerHTML = `${weight} g`;
    weightBar.classList.add("weighttext");
    container.appendChild(weightBar);
    setTimeout(() => {
        // Create green background overlay
        firstp.remove();
        const fillBackground = document.createElement("div");
        fillBackground.classList.add("fill-background");
        container.appendChild(fillBackground);

        // Start number increasing animation
        let count = 0;
        const duration = 6000; // 7 seconds
        const interval = 10; // Update every 10ms
        const step = Math.ceil(997 / (duration / interval)); // Step size for smooth animation

        const intervalId = setInterval(() => {
            count += step;
            if (count >= 997) {
                count = 997;
                clearInterval(intervalId);
            }
            weightBar.innerHTML = `${count} g`;

            // Change text color when the background reaches it
            const fillHeight = fillBackground.clientHeight;
            const textPosition = weightBar.offsetTop;
            if (fillHeight >= textPosition) {
                weightBar.style.color = "white";
            }
        }, interval);
        setTimeout(() => {
            document.getElementById("bg_img").remove();
            weightBar.remove();
            fillBackground.remove();

            rewardpage();
        }, 9000); 
    }, 3000); 
}
function rewardpage(){
    document.body.style.backgroundColor = "#4CAF4F";

    const youhaveearned = document.createElement("p");
    youhaveearned.innerHTML = "You have earned";
    youhaveearned.classList.add("whitebodytext");
    container.appendChild(youhaveearned);

    const amounttext = document.createElement("p");
    amounttext.innerHTML = "৳19.94";
    amounttext.classList.add("amounttext");
    container.appendChild(amounttext);

    const pleasescan = document.createElement("p");
    pleasescan.innerHTML = "Please scan the QR code below to obtain your reward";
    pleasescan.classList.add("whitebodytext");
    container.appendChild(pleasescan);

    const qrcode = document.createElement("img");
    qrcode.setAttribute("src", "dummy_qr_code.png");
    qrcode.classList.add("qrcode");
    container.appendChild(qrcode);

    const redo = document.createElement("button");
    redo.innerHTML = "Done";
    redo.classList.add("redobutton");
    container.appendChild(redo);

    redo.addEventListener("click", function(){
        window.location.href = "/vending_machine/index.html";
    });

}
