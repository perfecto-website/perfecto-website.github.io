function updateStatus() {
    fetch("https://api.lanyard.rest/v1/users/667734009736069161")
        .then(response => response.json())
        .then(data => {
            const statusElement = document.querySelector('.status');
            const activities = data.data.activities;
            let statusText = "";
            if (activities.length > 0) {
                statusText = `In the game`;
            } else if (data.data.discord_status !== "offline") {
                statusText = 'Сurrently Online';
            } else {
                statusText = 'Сurrently Offline';
            }
            statusElement.textContent = '';
            statusElement.appendChild(document.createTextNode(statusText + ' '));
            const statusDot = document.createElement('span');
            statusDot.classList.add('status-dot');
            statusElement.appendChild(statusDot);
            if (activities.length > 0 || data.data.discord_status !== "offline") {
                statusDot.style.backgroundColor = 'green';
            } else {
                statusDot.style.backgroundColor = 'red';
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            const statusElement = document.querySelector('.status');
            statusElement.textContent = 'error fetching status';
            const statusDot = document.createElement('span');
            statusDot.classList.add('status-dot');
            statusDot.style.backgroundColor = 'red';
            statusElement.appendChild(statusDot);
        });
}
updateStatus();