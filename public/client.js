const usersData = document.getElementById('usersTable');
const userArray = [];

document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);
    const userData = Object.fromEntries(myFormData);
//Adatok elküldése a webszervernek
    try {
        const response = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
//Hibás szerver válasz
        if (!response.ok) throw new Error('Hiba a szerver válaszában');

        const result = await response.json();
        console.log('Szerver válasz:', result);

        userArray.push(userData);
        usersData.innerHTML = userArray.map((user, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${user.vezeteknev}</td>
                <td>${user.keresztnev}</td>
                <td>${user.email}</td>
                <td>${user.telephone}</td>
            </tr>
        `).join('');

    } catch (error) {
        console.error('Hiba:', error.message);
    }
});
