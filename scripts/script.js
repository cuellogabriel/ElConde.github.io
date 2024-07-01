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
        "promociones": [
            { id: 1, nombre: "Promoción 1", precio: "$100" },
            { id: 2, nombre: "Promoción 2", precio: "$200" }
        ],
        "pizzas-a-la-piedra": [
            { id: 3, nombre: "Pizza Margarita", precio: "$300" },
            { id: 4, nombre: "Pizza Napolitana", precio: "$350" }
        ],
        "calzones": [
            { id: 5, nombre: "Calzone de Jamón y Queso", precio: "$400" },
            { id: 6, nombre: "Calzone de Verduras", precio: "$450" }
        ],
        "fugasetas-rellenas": [
            { id: 7, nombre: "Fugaseta de Cebolla", precio: "$500" },
            { id: 8, nombre: "Fugaseta de Espinaca", precio: "$550" }
        ],
        "empanadas-al-horno": [
            { id: 9, nombre: "Empanada de Carne", precio: "$600" },
            { id: 10, nombre: "Empanada de Pollo", precio: "$650" }
        ],
        "milanesas-al-horno": [
            { id: 11, nombre: "Milanesa de Ternera", precio: "$700" },
            { id: 12, nombre: "Milanesa de Pollo", precio: "$750" }
        ],
        "hamburguesa-casera-en-pan-de-pizza": [
            { id: 13, nombre: "Hamburguesa Clásica", precio: "$800" },
            { id: 14, nombre: "Hamburguesa con Queso", precio: "$850" }
        ],
        "sandwiches": [
            { id: 15, nombre: "Sandwich de Jamón y Queso", precio: "$900" },
            { id: 16, nombre: "Sandwich de Atún", precio: "$950" }
        ],
        "adicionales-de-sandwiches": [
            { id: 17, nombre: "Adicional de Queso", precio: "$1000" },
            { id: 18, nombre: "Adicional de Jamón", precio: "$1050" }
        ],
        "tartas-tortillas-y-ensaladas": [
            { id: 19, nombre: "Tarta de Espinaca", precio: "$1100" },
            { id: 20, nombre: "Tarta de Acelga", precio: "$1150" }
        ],
        "bebidas": [
            { id: 21, nombre: "Agua Mineral", precio: "$1200" },
            { id: 22, nombre: "Gaseosa", precio: "$1250" }
        ]
    };

    for (const categoria in productos) {
        const section = document.getElementById(categoria);
        if (section) {
            const productContainer = section.querySelector('.products');
            productos[categoria].forEach(producto => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <span class="product-name">${producto.nombre}</span>
                    <span class="product-price">${producto.precio}</span>
                `;
                productContainer.appendChild(productElement);
            });
        } else {
            console.warn(`No se encontró la sección con el ID: ${categoria}`);
        }
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





