
const profilePic = document.getElementById('profilePic');
const profileMenu = document.getElementById('profileMenu');
profilePic.addEventListener('click', function (e) {
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', function (e) {
    if (!profilePic.contains(e.target) && !profileMenu.contains(e.target)) {
        profileMenu.style.display = 'none';
    }
});

