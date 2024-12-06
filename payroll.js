// Convert value to x decimal places
function convertDecimal(value, x) {
    return isNaN(value) ? '' : value.toFixed(x);
}

// Array to store employee data
let emp = [];

// Function to show the table
function showTable() {
    const tableBody = document.getElementById("tablebody");
    tableBody.innerHTML = ''; // Clear existing rows

    emp.forEach((employee, index) => {
        const grossPay = employee.daysWorked * employee.dailyRate;
        const netPay = grossPay - employee.deductionAmount;

        const row = `<tr>
                        <td>${index + 1}</td>
                        <td>${employee.name}</td>
                        <td>${employee.daysWorked}</td>
                        <td>${convertDecimal(employee.dailyRate, 2)}</td>
                        <td>${convertDecimal(grossPay, 2)}</td>
                        <td>${convertDecimal(employee.deductionAmount, 2)}</td>
                        <td>${convertDecimal(netPay, 2)}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    });

    document.getElementById("items").value = emp.length;
}

// Event listener for the "Add" button
document.getElementById("btnadd").addEventListener('click', () => {
    const name = document.getElementById("Name").value.trim();
    const daysWorked = parseFloat(document.getElementById("daysworked").value);
    const dailyRate = parseFloat(document.getElementById("dailyrate").value);
    const deductionAmount = parseFloat(document.getElementById("deductionAmount").value);

    // Validation
    if (!name || daysWorked <= 0 || dailyRate <= 0 || deductionAmount < 0 || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
        alert("Please complete the form with valid data.");
        return;
    }

    // Add to employee array
    emp.push({ name, daysWorked, dailyRate, deductionAmount });

    // Refresh the table
    showTable();

    // Clear input fields
    document.getElementById("Name").value = '';
    document.getElementById("daysworked").value = '';
    document.getElementById("dailyrate").value = '';
    document.getElementById("deductionAmount").value = '';
});

// Handle delete all button
document.getElementById("DeleteAll").addEventListener("click", () => {
    document.getElementById("dlgmsg").innerHTML = "Delete the entire table?";
    currentAction = () => {
        emp = [];
        showTable();
    };
    dlgConfirmCancel.showModal();
});

// Handle delete single row button
document.getElementById("btndelete").addEventListener("click", () => {
    const index = parseInt(document.getElementById("delitem").value, 10) - 1;

    if (isNaN(index) || index < 0 || index >= emp.length) {
        alert("Invalid item number.");
        return;
    }

    document.getElementById("dlgmsg").innerHTML = `Delete item ${index + 1} (${emp[index].name})?`;
    currentAction = () => {
        emp.splice(index, 1);
        showTable();
        document.getElementById("delitem").value = '';
    };
    dlgConfirmCancel.showModal();
});

// Confirm/Cancel buttons for dlgConfirmCancel
btnConfirm.addEventListener("click", () => {
    dlgConfirmCancel.returnValue = "confirm";
    dlgConfirmCancel.close();
});
btnCancel.addEventListener("click", () => {
    dlgConfirmCancel.returnValue = "cancel";
    dlgConfirmCancel.close();
});

// Yes/No buttons for dlgAreYouSure
btnYes.addEventListener("click", () => {
    dlgAreYouSure.returnValue = "yes";
    dlgAreYouSure.close();
});
btnNo.addEventListener("click", () => {
    dlgAreYouSure.returnValue = "no";
    dlgAreYouSure.close();
});

// Main dialog (dlgConfirmCancel) close handler
dlgConfirmCancel.addEventListener("close", (e) => {
    if (e.target.returnValue === "confirm" && typeof currentAction === "function") {
        dlgAreYouSure.showModal(); // Show final confirmation dialog
    }
});

// Final confirmation dialog (dlgAreYouSure) close handler
dlgAreYouSure.addEventListener("close", (e) => {
    if (e.target.returnValue === "yes" && typeof currentAction === "function") {
        currentAction(); // Execute the confirmed action
    }
});
