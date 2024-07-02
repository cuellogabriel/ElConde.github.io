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
            { id: 86, nombre: "", precio: "" },
            { id: 87, nombre: "", precio: "" },
            { id: 88, nombre: "", precio: "" }
        ],
        "pizzas-a-la-piedra": [
            { id: 1, nombre: "Muzarella", precio: "8500" },
            { id: 2, nombre: "Fugazza con queso", precio: "8500" },
            { id: 3, nombre: "Jamon", precio: "10400" },
            { id: 4, nombre: "Jamon y Morrones", precio: "11000" },
            { id: 5, nombre: "Jamon y Anana", precio: "11000" },
            { id: 6, nombre: "Jamon Crudo , Rucula y Parmesano", precio: "13200" },
            { id: 7, nombre: "Rucula y Parmesano", precio: "11000" },
            { id: 8, nombre: "Panceta Ahumada", precio: "11000" },
            { id: 9, nombre: "Calabresa", precio: "10600" },
            { id: 10, nombre: "Provolone", precio: "10600" },
            { id: 11, nombre: "Roquefort", precio: "10600" },
            { id: 12, nombre: "Tres Quesos ", precio: "11900" },
            { id: 13, nombre: "Margarita", precio: "10400" },
            { id: 14, nombre: "Napolitana", precio: "10400" },
            { id: 15, nombre: "Napolitana con Jamon", precio: "11000" },
            { id: 16, nombre: "Napolitana con Jamon y Huevo Duro", precio: "11900" },
            { id: 17, nombre: "Super Napolitana", precio: "12500" },
            { id: 18, nombre: "De Barrio Norte", precio: "13200" },
            { id: 19, nombre: "Palmitos", precio: "11900" },
            { id: 20, nombre: "Palmitos con Jamon", precio: "12500" },
            { id: 21, nombre: "Criolla", precio: "11900" },
            { id: 22, nombre: "Champigñones", precio: "11900" },
            { id: 23, nombre: "El Conde", precio: "13200" },
            { id: 24, nombre: "", precio: "" }

        ],
        "calzones": [
            { id: 25, nombre: "Napolitano", precio: "13000" },
            { id: 26, nombre: "Calabresa", precio: "13000" },
            { id: 27, nombre: "Champigñones", precio: "13000" },
            { id: 28, nombre: "El Conde", precio: "14100" }
        ],
        "fugasetas-rellenas": [
            { id: 29, nombre: "Clasica", precio: "11000" },
            { id: 30, nombre: "Cebolla y Jamon", precio: "12400" },
            { id: 31, nombre: "Cebolla , Jamon y Morrones1", precio: "13400" },
            { id: 32, nombre: "Cebolla, Jamon , Morrones y Huevo Duro", precio: "13900" }
        ],
        "empanadas-al-horno": [
            { id: 33, nombre: "Carne Picada Picante", precio: "1400" },
            { id: 34, nombre: "Carne Picada Suave", precio: "1400" },
            { id: 35, nombre: "Pollo Clasico", precio: "1400" },
            { id: 36, nombre: "Jamon y Queso", precio: "1400" },
            { id: 37, nombre: "Cebolla y Queso", precio: "1400" },
            { id: 38, nombre: "Roquefort", precio: "1400" },
            { id: 39, nombre: "Humita", precio: "1400" },
            { id: 40, nombre: "Verdura y Salsa Blanca", precio: "1400" },
            { id: 41, nombre: "Capresse(Tomate y Albahaca)", precio: "1400" },
            { id: 42, nombre: "Carne Cuhillo Suave", precio: "1600" },
            { id: 43, nombre: "Carne Cuhillo Picante", precio: "1600" },
            { id: 44, nombre: "Pollo a La Crema De Verdeo", precio: "1600" },
            { id: 45, nombre: "Atun", precio: "1600" },
            { id: 46, nombre: "Fatay(Arabe)", precio: "1600" }
        ],
        "milanesas-al-horno": [
            { id: 47, nombre: "Milanesa Sola ", precio: "8000" },
            { id: 48, nombre: "Milanesa Napolitana", precio: "9800" }
        ],
        "hamburguesa-casera-en-pan-de-pizza": [
            { id: 49, nombre: "Hambuerguesa Sola", precio: "5000" },
            { id: 50, nombre: "Hambuerguesa Lechuga y Tomate", precio: "6100" },
            { id: 51, nombre: "Hambuerguesa Jamon y Queso", precio: "6100" },
            { id: 52, nombre: "Hambuerguesa Completa", precio: "6900" }
        ],
        "sandwiches": [
            { id: 53, nombre: "Sandwich De Milanesa De Pollo", precio: "800" },
            { id: 54, nombre: "Sandwich De Milanesa De Carne", precio: "800" },
            { id: 55, nombre: "Sandwich De Churrasco", precio: "800" },
            { id: 56, nombre: "Sandwich De Pollo Grille", precio: "800" },
            { id: 57, nombre: "Sandwich Completo (Pollo + + Jamon y Muzzarella)", precio: "6900" },
            { id: 58, nombre: "Sandwich Completo (Carne + Jamon y Muzzarella)", precio: "6900" },
            { id: 59, nombre: "Sandwich Completo (Churrasquito + + Jamon y Muzzarella)", precio: "6900" },
            { id: 60, nombre: "Sandwich Completo (Pollo Grille + Jamon y Muzzarella)", precio: "6900" },
            { id: 61, nombre: "", precio: "" }
        ],
        "adicionales-de-sandwiches": [
            { id: 62, nombre: "Huevo Frito / Plancha", precio: "850" },
            { id: 63, nombre: "Cebolla Caramelizada", precio: "850" },
            { id: 64, nombre: "Panceta", precio: "1000" },
            { id: 65, nombre: "Provolone", precio: "1000" },
            { id: 66, nombre: "Roquefort", precio: "1000" },
            { id: 67, nombre: "Muzzarella", precio: "850" },
            { id: 68, nombre: "Salsa de Tomate", precio: "850" }
        ],
        "tartas-tortillas-y-ensaladas": [
            { id: 69, nombre: "Tarta Tricolor", precio: "4900" },
            { id: 70, nombre: "Tarta Champignones", precio: "4900" },
            { id: 71, nombre: "Tarta Jamon y Anana", precio: "4900" },
            { id: 72, nombre: "Tarta Capresse", precio: "4900" },
            { id: 73, nombre: "Tarta Palmitos", precio: "4900" },
            { id: 74, nombre: "Tortilla De Papa", precio: "4900" },
            { id: 75, nombre: "Tortilla De Acelga", precio: "4900" },
            { id: 76, nombre: "Papas Fritas Grandes", precio: "3400" },
            { id: 77, nombre: "Papas Fritas Medianas", precio: "3000" },
            { id: 78, nombre: "Papas Fritas Guarnicion", precio: "2700" },
            { id: 79, nombre: "Pure De Calabaza", precio: "2700" },
            { id: 80, nombre: "Ensalada Mixta", precio: "2700" }
        ],
        "bebidas": [
            { id: 81, nombre: "Coca Cola 1.75L", precio: "3300" },
            { id: 82, nombre: "Coca Cola 1.50L", precio: "3000" },
            { id: 83, nombre: "Pepsi 1.5L", precio: "2600" },
            { id: 84, nombre: "Lata Cerveza Heineken/Stelle/Miller/Imperial", precio: "2600" },
            { id: 85, nombre: "Lata Cerveza Warsteiner/Brahama/Quilmes", precio: "2200" }
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





