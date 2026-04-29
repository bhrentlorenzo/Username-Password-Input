// --- USER VALIDATION LOGIC ---
function validateUser() {
    const pass = document.getElementById('password').value;
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const isOnlyNumbers = /^\d+$/.test(pass);

    if (pass.length < 8) {
        alert("Registration Failed: Password must be at least 8 characters."); [cite: 10]
    } else if (isOnlyNumbers) {
        alert("Registration Failed: Password cannot consist only of integers."); [cite: 11]
    } else if (!hasUpper || !hasLower) {
        alert("Registration Failed: Password must be a combination of uppercase and lowercase."); [cite: 12]
    } else {
        alert("Registration Successful!");
    }
}

// --- INVENTORY LOGIC ---
function toggleInventory() {
    const table = document.getElementById('inventoryTable');
    table.classList.toggle('hidden', !document.getElementById('toggleTable').checked);
}

function addItem() {
    const name = document.getElementById('itemName').value;
    const qty = document.getElementById('itemQty').value;

    if (!name || !qty) return alert("Please fill in both fields");

    const tbody = document.getElementById('tableBody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td class="qty-cell" ondblclick="editQuantity(this)">${qty}</td>
    `; [cite: 17]

    tbody.appendChild(row);
    
    // Clear inputs
    document.getElementById('itemName').value = '';
    document.getElementById('itemQty').value = '';
}

function editQuantity(cell) {
    const currentVal = cell.innerText;
    const input = document.createElement('input');
    input.type = 'number';
    input.value = currentVal;
    input.className = 'edit-input'; [cite: 18]

    // Save on blur or Enter key
    input.onblur = function() {
        cell.innerText = input.value;
    };
    
    input.onkeydown = function(e) {
        if(e.key === 'Enter') input.blur();
    };

    cell.innerHTML = '';
    cell.appendChild(input);
    input.focus();
}