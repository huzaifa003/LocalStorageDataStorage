// Retrieve and display data from LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    // Fetch data from LocalStorage
    const loginData = JSON.parse(localStorage.getItem('loginData')) || [];

    if (loginData.length === 0) {
        dataContainer.innerHTML = '<p>No data available.</p>';
    } else {
        loginData.forEach((item, index) => {
            // Create a div for each login entry
            const dataItem = document.createElement('div');
            dataItem.classList.add('data-item');

            // Add username and password
            dataItem.innerHTML = `
                <span>Username: ${item.username}</span>
                <span>Password: ${item.password}</span>
            `;

            // Append to the container
            dataContainer.appendChild(dataItem);
        });
    }
});
