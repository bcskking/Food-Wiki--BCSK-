function toggleDetails(id, event) {
    const details = document.getElementById(id);
    details.classList.toggle('active');
    event.stopPropagation(); // Prevents toggling other sections
}

function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('show');
}

// Close details when clicking outside the title or details
document.body.addEventListener('click', function (event) {
    const titles = document.querySelectorAll('.title');
    const details = document.querySelectorAll('.details');

    let clickedInside = false;

    titles.forEach(function (title) {
        if (title.contains(event.target)) {
            clickedInside = true;
        }
    });

    details.forEach(function (detail) {
        if (detail.contains(event.target)) {
            clickedInside = true;
        }
    });

    if (!clickedInside) {
        details.forEach(function (detail) {
            detail.classList.remove('active');
        });
    }
});
