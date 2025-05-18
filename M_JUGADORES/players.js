window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('showModal') === 'true') {
    document.getElementById("myModal").style.display = "flex";
  }
};

const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close-btn");

openBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
