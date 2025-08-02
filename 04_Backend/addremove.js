// ADD MEMBER
document.getElementById("memberForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("memberName").value;
    const club = document.getElementById("clubName").value;

    await addDoc(collection(db, "members"), {
        name: name,
        club: club,
    });

    alert("Member added!");
    getMembers(); // refresh list
});

// SHOW MEMBERS
async function getMembers() {
    const querySnapshot = await getDocs(collection(db, "members"));
    const membersDiv = document.getElementById("membersList");
    membersDiv.innerHTML = "";
    querySnapshot.forEach((docu) => {
        const data = docu.data();
        membersDiv.innerHTML += `
      <p>${data.name} (${data.club})
        <button onclick="deleteMember('${docu.id}')">❌</button>
      </p>`;
    });
}
getMembers();

// DELETE MEMBER
async function deleteMember(id) {
    await deleteDoc(doc(db, "members", id));
    getMembers();
}
