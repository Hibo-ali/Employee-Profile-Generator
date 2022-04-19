// RENDER html page 
const generateTeamPage = function (team) {
   
   
    // create Manager card
    const generateManagerCard = function (manager) {
        return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-secondary">
                <h3 class="text-white">${manager.name}</h3>
                <h4 class="text-white">Manager</h4><i class="fas fa-mug-hot"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
    }


     // create Engineer card
     const generateEngineerCard = function (engineer) {
        return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-secondary">
                <h3 class="text-white">${engineer.name}</h3>
                <h4 class="text-white">Engineer</h4><i class="fas fa-glasses"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
    }









}