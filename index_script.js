// SHOW CHAPTER FUNCTION -STA. ROSA
function showChapter(chapter) {
    document.querySelectorAll('.chapter').forEach(ch => ch.classList.remove('active'));
    document.getElementById('chapter' + chapter).classList.add('active');
}

// DARK MODE - STA. ROSA
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});