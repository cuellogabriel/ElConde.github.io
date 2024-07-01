document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const products = this.parentElement.parentElement.querySelector('.products');
            products.style.display = products.style.display === 'none' ? 'block' : 'none';
            this.textContent = products.style.display === 'none' ? '+' : '-';
        });
    });

    const productos = {
        "Promociones": [
            { id: 1, nombre: "Promoción 1", precio: "$100" },
            { id: 2, nombre: "Promoción 2", precio: "$200" }
        ],
        "Pizzas a la Piedra": [
            { id: 3, nombre: "Pizza Margarita", precio: "$300" },
            { id: 4, nombre: "Pizza Napolitana", precio: "$350" }
        ],
        "Calzones": [
            { id: 5, nombre: "Calzone de Jamón y Queso", precio: "$400" },
            { id: 6, nombre: "Calzone de Verduras", precio: "$450" }
        ],
        "Fugasetas Rellenas": [
            { id: 7, nombre: "Fugaseta de Cebolla", precio: "$500" },
            { id: 8, nombre: "Fugaseta de Espinaca", precio: "$550" }
        ],
        "Empanadas al Horno": [
            { id: 9, nombre: "Empanada de Carne", precio: "$600" },
            { id: 10, nombre: "Empanada de Pollo", precio: "$650" }
        ],
        "Milanesas al Horno": [
            { id: 11, nombre: "Milanesa de Ternera", precio: "$700" },
            { id: 12, nombre: "Milanesa de Pollo", precio: "$750" }
        ],
        "Hamburguesa Casera En Pan De Pizza": [
            { id: 13, nombre: "Hamburguesa Clásica", precio: "$800" },
            { id: 14, nombre: "Hamburguesa con Queso", precio: "$850" }
        ],
        "Sandwiches": [
            { id: 15, nombre: "Sandwich de Jamón y Queso", precio: "$900" },
            { id: 16, nombre: "Sandwich de Milanesa", precio: "$950" }
        ],
        "Adicionales De Sandwiches": [
            { id: 17, nombre: "Adicional de Queso", precio: "$100" },
            { id: 18, nombre: "Adicional de Jamón", precio: "$150" }
        ],
        "Tartas / Tortillas y Ensaladas": [
            { id: 19, nombre: "Tarta de Espinaca", precio: "$200" },
            { id: 20, nombre: "Ensalada César", precio: "$250" }
        ],
        "Bebidas": [
            { id: 21, nombre: "Agua Mineral", precio: "$50" },
            { id: 22, nombre: "Coca Cola", precio: "$100" }
        ]
    };

    function addProducts(categoryId, products) {
        const category = document.getElementById(categoryId.toLowerCase()); 
        const productsContainer = category.querySelector('.products');
        products.forEach(product => {
            const productElement = document.createElement('p');
            productElement.innerHTML = `${product.nombre} <span>${product.precio}</span>`;
            productsContainer.appendChild(productElement);
        });
    }

    // Agrega los productos a cada categoría
    for (const category in productos) {
        addProducts(category, productos[category]); 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sliceImages = document.querySelectorAll('.slice-image');
    let currentIndex = 0;

    // Ocultar todas las imágenes excepto la primera al cargar la página
    for (let i = 1; i < sliceImages.length; i++) {
        sliceImages[i].style.display = 'none';
    }

    setInterval(() => {
        sliceImages[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % sliceImages.length;
        sliceImages[currentIndex].style.display = 'block';
    }, 5000); // Cambiar de imagen cada 10 segundos (5000 milisegundos)
});





