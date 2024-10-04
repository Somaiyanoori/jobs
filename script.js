"use script";

const jobTypes = [
  "All",
  "technology",
  "Financial",
  "Management",
  "Contract",
  "Remote",
];

// Function to render job type options in the dropdown
function renderJobTypeDropdown() {
  const jobTypeDropdown = document.getElementById("job-type-dropdown");

  jobTypes.forEach((jobType) => {
    const link = document.createElement("a");
    link.className = "dropdown-item";
    link.href = "#";
    link.dataset.job = jobType;
    link.innerText = jobType;

    link.onclick = (event) => {
      event.preventDefault();
      filterJobs(jobType);
    };

    jobTypeDropdown.appendChild(link);
  });
}

// Function to filter jobs
function filterJobs(jobType) {
  const jobItems = document.querySelectorAll(".job-item", "");

  jobItems.forEach((jobItem) => {
    const jobTypeAttribute = jobItem.getAttribute("data-type");

    if (jobType === "All" || jobTypeAttribute === jobType) {
      jobItem.style.display = "flex"; // Show job item
    } else {
      jobItem.style.display = "none"; // Hide job item
    }
  });
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  renderJobTypeDropdown();
  showJobs(currentPage);
});

const jobsPerPage = 9; // تعداد شغل‌ها در هر صفحه
let currentPage = 1;

// تابع برای نمایش شغل‌ها بر اساس صفحه جاری
function showJobs(page) {
  const jobCards = document.querySelectorAll(".job-card");
  const totalJobs = jobCards.length;
  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  jobCards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = ""; // نمایش
    } else if (totalJobs === endIndex) {
      card.style.display = "";
    } else {
      card.style.display = "none"; // پنهان کردن
    }
  });
}

// مدیریت کلیک روی pagination
document.querySelectorAll(".page-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    currentPage = parseInt(this.getAttribute("data-page"));
    showJobs(currentPage);
  });
});
//search bar
const button = document.getElementById("button-addon2");
const searchInput = document.getElementById("search-input");

button.addEventListener("click", function () {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const jobItems = document.querySelectorAll(".job-item"); // Get all job items

  jobItems.forEach((item) => {
    const title = item
      .querySelector(".card-title-job")
      .textContent.toLowerCase();
    const description = item.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      item.style.display = "block"; // Show the item
    } else {
      item.style.display = "none"; // Hide the item
    }
  });
  document.getElementById("button-addon2");
  button.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const jobItems = document.querySelectorAll(".job-item"); // Get all job items

    jobItems.forEach((item) => {
      const title = item
        .querySelector(".card-title-job")
        .textContent.toLowerCase();
      const description = item.querySelector("p").textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        item.style.display = "block"; // Show the item
      } else {
        item.style.display = "none"; // Hide the item
      }
    });
  });
});
document.addEventListener("keydown", function (e) {
  if (e === "Enter") {
    function click() {
      document.addEventListener("click", function () {});
    }
  }
});
