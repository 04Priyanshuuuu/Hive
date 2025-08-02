document.getElementById("eventForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const title = document.getElementById("eventTitle").value;
    const date = document.getElementById("eventDate").value;
    const desc = document.getElementById("eventDesc").value;

    await addDoc(collection(db, "events"), {
        title: title,
        date: date,
        description: desc,
    });

    alert("Event Announced!");
});
