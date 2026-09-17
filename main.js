document.documentElement.style.setProperty("--left-button-color", "#596983");
document.documentElement.style.setProperty("--right-button-color", "#0a0a0a");
document.documentElement.style.setProperty("--right-button-text-color", "#e7e7e7");
document.documentElement.style.setProperty("--right-button-frame-color", "#e7e7e7");

document.getElementById("right-button").textContent = "Gladly!";
document.getElementById("left-button").textContent = "No, thank you.";


let stage = 0;

document.getElementById("right-button").addEventListener("click", function () {
  if (stage === 0) {
    stage = 1;
    document.documentElement.style.setProperty("--background-pic", 'url("assets/tea.jpg")');
    document.documentElement.style.setProperty("--left-button-color", "#ac6747");
    document.documentElement.style.setProperty("--right-button-color", "#45b353");
    document.documentElement.style.setProperty("--right-button-text-color", "#e7e7e7");
    document.documentElement.style.setProperty("--right-button-frame-color", "#e7e7e7");
    document.documentElement.style.setProperty("--txt-color", "#000000");
    document.getElementById("title").textContent = "";
    document.getElementById("dialouge-txt").textContent = "Here you go, want breakfast too? I have brought some along.";
    document.getElementById("right-button").textContent = "I'd take some if that's alright!";
    document.getElementById("left-button").textContent = "Noo, I'm not hungry. Thank you anyway!";

  } else if (stage === 1) {
    stage = 2;
    document.getElementById("dialouge-txt").textContent = "Here you go! Wanna come over to my burrow now? It's sooo cozy in there. I just tidyed up!";
    document.getElementById("right-button").textContent = "Yes, of course!";
    document.getElementById("left-button").textContent = "It's alright, thanks for the breakfast. I'll be on my way.";
  } else if (stage === 2) {
    window.location.href = "blog/blog.html";
  }

});

document.getElementById("left-button").addEventListener("click", function () {
  if (stage === 0) {
    stage = 1;

  } else if (stage === 1) {
    stage = 2;
  document.getElementById("dialouge-txt").textContent = "It's alright! Wanna come over to my burrow now? It's sooo cozy in there. I just tidyed up!";
  document.getElementById("right-button").textContent = "Yes, of course!";
  document.getElementById("left-button").textContent = "It's alright, thanks for the invite. I'll be on my way.";
  } else if (stage === 2) {
    window.location.href = "index.html";
  }
});

