document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const messageInput = document.getElementById("message");
    const emailInput = form.querySelector("input[type='text']")
    
    form.addEventListener("submit", function(e) {
        let flag = true;
        let errorMsg = ""

        if (messageInput.value.length < 3) {
            flag = false;
            errorMsg += "Za mało treściwa wiadomość, przyjacielu\n";
        }

        const emailLook = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailLook.test(emailInput.value)) {
            flag = false;
            errorMsg += "Niepoprawny adres email";
        }

        if (!flag) {
            e.preventDefault();
            alert(errorMsg);
        }
    });
});