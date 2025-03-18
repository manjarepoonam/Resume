function showSection(id, event) {
    document.querySelectorAll('.content').forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}
