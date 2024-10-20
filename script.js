const content = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-button');
const lawyerDashBtn = document.querySelector('.lawyer-dashboard');

const pages = {
    home: `
        <h1>Welcome to Legal eMarketplace</h1>
        <p>Find trusted legal professionals for your needs</p>
        <div class="grid">
            <div class="card">
                <h3>Easy Search</h3>
                <p>Find the right legal professional quickly</p>
            </div>
            <div class="card">
                <h3>Quality Assurance</h3>
                <p>Verified professionals with client ratings</p>
            </div>
            <div class="card">
                <h3>Secure & Transparent</h3>
                <p>Safe interactions with service providers</p>
            </div>
        </div>
    `,
    'find-services': `
        <h2>Find Legal Services</h2>
        <input type="text" placeholder="Search for legal services...">
        <div class="grid">
            ${['Advocate', 'Mediator', 'Notary', 'Arbitrator', 'Document Writer']
                .map(service => `
                    <div class="card">
                        <h3>${service}</h3>
                        <p>Find experienced ${service.toLowerCase()}s</p>
                        <button>Find ${service}</button>
                    </div>
                `).join('')}
        </div>
    `,
    'for-providers': `
        <h2>For Legal Service Providers</h2>
        <p>Join our platform and grow your practice</p>
        <div class="grid">
            <div class="card">
                <h3>Rewards Program</h3>
                <p>Earn points and unlock benefits</p>
            </div>
            <div class="card">
                <h3>Expanded Reach</h3>
                <p>Connect with clients across India</p>
            </div>
        </div>
        <button>Join as a Provider</button>
    `,
    about: `
        <h2>About Legal eMarketplace</h2>
        <p>Connecting clients with trusted legal professionals</p>
        <div class="grid">
            <div class="card">
                <h3>Our Mission</h3>
                <p>Make legal services accessible and efficient</p>
            </div>
            <div class="card">
                <h3>Contact Us</h3>
                <p>123 Legal Street, New Delhi, India</p>
                <p>Phone: +91 1234567890</p>
                <p>Email: contact@legalemarketplace.in</p>
            </div>
        </div>
    `
};

function setActiveTab(tab) {
    navButtons.forEach(button => button.classList.toggle('active', button.dataset.tab === tab));
    content.innerHTML = pages[tab];
}

navButtons.forEach(button => button.addEventListener('click', () => setActiveTab(button.dataset.tab)));

lawyerDashBtn.addEventListener('click', ()=>{
    window.location.href = 'app.html'
})
setActiveTab('home');

