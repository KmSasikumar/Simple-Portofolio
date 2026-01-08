function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let menuIcon = document.querySelector('.menu-icon');

    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        menuIcon.style.display = 'none';
    } else {
        menuIcon.style.display = 'block';
    }
}

function showSection(sectionId) {
    let sections = document.querySelectorAll('.content section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    let selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');

    let sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        toggleSidebar();
    }
}

document.addEventListener('click', function(e) {
    let sidebar = document.getElementById('sidebar');
    let menuIcon = document.querySelector('.menu-icon');

    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
        if (sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    }
});
