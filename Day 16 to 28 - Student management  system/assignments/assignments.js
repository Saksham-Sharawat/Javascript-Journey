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