const form = document.getElementById('donation-form');
const successMessage = document.getElementById('success-message');
const donorsDiv = document.getElementById('donors');

function loadDonors() {
    const donors = JSON.parse(localStorage.getItem('donors')) || [];
    donorsDiv.innerHTML = '';
    donors.forEach(donor => {
        const donorDiv = document.createElement('div');
        donorDiv.classList.add('donor');
        donorDiv.innerHTML = `
            <p><strong>Name:</strong> ${donor.name}</p>
            <p><strong>Email:</strong> ${donor.email}</p>
            <p><strong>Mobile Number:</strong> ${donor.mobileNumber}</p>
            <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
            ${donor.message ? `<p><strong>Message:</strong> ${donor.message}</p>` : ''}
        `;
        donorsDiv.appendChild(donorDiv);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;
    const bloodGroup = document.getElementById('blood-group').value;
    const message = document.getElementById('message').value;

    const donor = { name, email, mobileNumber, bloodGroup, message };

    const donors = JSON.parse(localStorage.getItem('donors')) || [];
    donors.push(donor);
    localStorage.setItem('donors', JSON.stringify(donors));

    loadDonors();
    form.reset();
    successMessage.style.display = 'block';

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});

document.addEventListener('DOMContentLoaded', loadDonors);
