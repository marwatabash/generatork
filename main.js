document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const generateButton = document.getElementById("generateButton");
  const clearAllButton = document.getElementById("clearAllButton");
  const tagContainer = document.getElementById("tagContainer");

  generateButton.addEventListener("click", function () {
      const name = nameInput.value.trim();
      if (name !== "") {
          generateNameTag(name);
          nameInput.value = ""; // Clear the input field
      }
  });

  clearAllButton.addEventListener("click", function () {
      clearAllTags();
  });

  function generateNameTag(name) {
      const tag = document.createElement("div");
      tag.classList.add("tag");
      tag.style.backgroundColor = getRandomColor();
      tag.innerHTML = `${name} <span class="delete-icon">&#10006;</span>`;
      tag.querySelector(".delete-icon").addEventListener("click", function () {
          tagContainer.removeChild(tag);
      });
      tagContainer.appendChild(tag);
  }

  function clearAllTags() {
      tagContainer.innerHTML = "";
  }

  function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
});

