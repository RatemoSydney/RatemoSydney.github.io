const date = new Date(),
    copyrightYear = document.getElementById('currentYear'),
    currentYear = date.getFullYear();

copyrightYear.innerHTML = currentYear;