setTimeout(() => {
    changeColorsToDark();
}, 1);

function checkboxChanged() {
    const darkMode = +localStorage.darkMode;

    if (!darkMode) {
        localStorage.setItem('darkMode', 0);
    }

    localStorage.setItem('darkMode', +!darkMode);

    changeColorsToDark();
}

function changeColorsToDark() {
    const darkMode = +localStorage.darkMode;
    console.log('darkMode', darkMode);
    document.body.style.backgroundColor = darkMode ? '#0d0f10' : '#f4f4f4';
    [...document.getElementsByTagName('h1'), ...document.getElementsByTagName('h2'), ...document.getElementsByTagName('span'), ...document.getElementsByTagName('strong')].forEach(element => {
        if (element.id === 'title') return;

        element.style.color = darkMode ? 'rgb(160 194 211)' : '#2c3e50';
    });

    const content = document.getElementById('content');
    const container = document.querySelector('.container');
    const contentHistory = document.getElementById('content_history');
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    
    if (contentHistory) {
        contentHistory.style.backgroundColor = darkMode ? '#2c3e50' : "#fff";
    } else if (container) {
        container.style.backgroundColor = darkMode ? '#0d0f10' : '#fff';
        document.getElementById('dataTable').style.backgroundColor = darkMode ? '#2c3e50' : '#fff';
        document.querySelector('.result-container').style.backgroundColor = darkMode ? '#34495e' : '#ecf0f1';
    } else if (darkModeCheckbox) {
        console.log(darkModeCheckbox);
        console.log(darkMode);
        darkModeCheckbox.checked = !!darkMode;
    } else {
        content.style.backgroundColor = darkMode ? '#0d0f10' : '#f4f4f4';
    }
}
