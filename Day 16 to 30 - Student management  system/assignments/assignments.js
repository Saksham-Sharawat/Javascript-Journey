// status button of every card

let status = document.querySelectorAll((".status"));

status.forEach(function (status) {
    status.addEventListener("click", function() {
        let status_value = status.textContent;
        
        if (status_value == "Pending") {
            status.innerHTML = "Submitted";
        } else {
            status.innerHTML = "Pending";
        }

    });
});

// status filter dropdown

let statusFilter = document.querySelector("#status-filter");

let cards = document.querySelectorAll(".card");

statusFilter.addEventListener("change", function() {
    let optionValue = statusFilter.value;
    
    cards.forEach(function(card) {

        
    });

});