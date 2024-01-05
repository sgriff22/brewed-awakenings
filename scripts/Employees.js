import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-id="${employee.id}"
                     data-name="${employee.name}"
                     data-type="employee">
                    ${employee.name}
                 </li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        // Was an employee list item clicked?
        if (itemClicked.dataset.type === "employee") {
            //Get the id of the employee clicked
            const employeeId = itemClicked.dataset.id
            //Get the name of the employee clicked
            const employeeName = itemClicked.dataset.name
            // Start a counter variable at 0
            let orderCounter = 0

            //Get all the orders
            const orders = getOrders()

            for (const order of orders) {
                // Does the order foreign key match the employer id?
                if (parseInt(employeeId) === order.employeeId) {
                    // Increase the counter by 1
                    orderCounter++
                }
            }
            
            window.alert(`${employeeName} sold ${orderCounter} products`)
        }
    }
)