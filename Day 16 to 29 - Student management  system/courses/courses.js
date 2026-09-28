let card = document.querySelectorAll(".card");

card.forEach(function(card) {
    card.addEventListener("click", function() {
        let sub_name = card.querySelector(".sub-name p");
        let course_code = card.querySelector(".course-code p");
        let inst_name = card.querySelector(".inst-name p");
        let popup = document.querySelector(".popup");
        let popup_sub_name = document.querySelector(".popup-sub-name");
        let popup_course_code = document.querySelector(".popup-course-code");
        let popup_inst = document.querySelector(".popup-inst");
        let close_button = document.querySelector(".close-button");

        popup.style.display = "flex";
        popup_sub_name.innerHTML = sub_name.textContent;
        popup_course_code.innerHTML = course_code.textContent;
        popup_inst.innerHTML = inst_name.textContent;

        close_button.addEventListener("click", function () {
            popup.style.display = "none";
        });
        
        
    });
});