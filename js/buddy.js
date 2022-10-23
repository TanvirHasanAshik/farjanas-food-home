const buddyData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => showBuddyData(data.results))
}
buddyData();

const showBuddyData = (buddys) => {
    const container = document.getElementById('container');
    for (const buddy of buddys) {
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last}, Email: ${buddy.email}, Mobile: ${buddy.cell} `;
        container.appendChild(p);
    }
}