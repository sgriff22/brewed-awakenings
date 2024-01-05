import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-id="${product.id}"
                     data-type="product">
                   ${product.name}
                 </li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const productId = itemClicked.dataset.id

        // Was a product list item clicked?
        if (itemClicked.dataset.type === "product") {
            for (const product of products) {
                if (product.id === parseInt(productId)) { 
                    window.alert(`\n                        ${product.name} costs\n                        $${product.price.toFixed(2)}`)
                }
            }
        }
    }
)
