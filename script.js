const plants = [
    { name: "Plant 1", image: "https://via.placeholder.com/150" },
    { name: "Plant 2", image: "https://via.placeholder.com/150" },
    { name: "Plant 3", image: "https://via.placeholder.com/150" },
    { name: "Plant 4", image: "https://via.placeholder.com/150" },
    { name: "Plant 5", image: "https://via.placeholder.com/150" }
];

const pesticides = [
    { name: "Pesticide 1", image: "https://via.placeholder.com/150" },
    { name: "Pesticide 2", image: "https://via.placeholder.com/150" },
    { name: "Pesticide 3", image: "https://via.placeholder.com/150" },
    { name: "Pesticide 4", image: "https://via.placeholder.com/150" },
    { name: "Pesticide 5", image: "https://via.placeholder.com/150" }
];

function renderItems(items, gridId) {
    const gridContainer = document.getElementById(gridId);
    items.forEach(item => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        
        const name = document.createElement("p");
        name.textContent = item.name;
        
        gridItem.appendChild(img);
        gridItem.appendChild(name);
        gridContainer.appendChild(gridItem);
    });
}

renderItems(plants, "plants-grid");
renderItems(pesticides, "pesticides-grid");
