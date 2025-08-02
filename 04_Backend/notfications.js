onSnapshot(collection(db, "events"), (snapshot) => {
    const notifSection = document.getElementById("notifications"); // id="notifications"
    notifSection.innerHTML = "";
    snapshot.forEach((docu) => {
        const data = docu.data();
        notifSection.innerHTML += `<p><strong>${data.title}</strong> on ${data.date}</p>`;
    });
});
