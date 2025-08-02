// Sample notifications – replace this with dynamic fetching later
const notifications = [
  {
    title: "New Feature Released!",
    body: "We’ve added real-time notifications for all users. Check it out now!"
  },
  {
    title: "Maintenance Alert",
    body: "Scheduled maintenance on 5th Aug from 1:00AM to 3:00AM."
  },
  {
    title: "New Blog Post",
    body: "Read our latest article on modern web development practices."
  },
  {
    title: "New Feature Released!",
    body: "We’ve added real-time notifications for all users. Check it out now!"
  },
];

// Dynamically insert notification cards
const container = document.getElementById("notifications");

notifications.forEach((note) => {
  const card = document.createElement("div");
  card.className = "notification-card";

  card.innerHTML = `
    <div class="notification-title">${note.title}</div>
    <div class="notification-body">${note.body}</div>
  `;

  container.appendChild(card);
});
