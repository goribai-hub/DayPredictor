const days = document.querySelectorAll(".day");
const predictBtn = document.getElementById("predictBtn");

let selected = null;

days.forEach(btn => {
  btn.onclick = () => {
    days.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selected = btn.textContent;

    predictBtn.disabled = false;
    predictBtn.classList.add("enabled");
  };
});

predictBtn.onclick = () => {
  // hide question
  document.getElementById("screen-question").classList.add("hidden");
  document.getElementById("screen-loading").classList.remove("hidden");

  // get tomorrow
  const todayIndex = new Date().getDay(); // 0 = Sunday
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const tomorrow = dayNames[(todayIndex + 1) % 7];

  setTimeout(() => {
    document.getElementById("screen-loading").classList.add("hidden");
    document.getElementById("screen-result").classList.remove("hidden");

    const title = document.querySelector("#screen-result h2");
    const iqBox = document.querySelector(".iq");

    if (selected === tomorrow) {
      title.textContent = "🎉 YOU'RE RIGHT!";
      iqBox.textContent = "Your IQ is higher than 99.9% of all humanity 😳";
      iqBox.style.background = "gold";
    } else {
      title.textContent = "❌ YOU'RE WRONG!";
      iqBox.textContent = `Correct answer is: ${tomorrow}`;
      iqBox.style.background = "#ffb3b3";
    }
  }, 3000);
};

document.getElementById("restart").onclick = () => {
  location.reload();
};
