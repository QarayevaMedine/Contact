
    // Düyməni və inputları seçirik
    const button = document.querySelector('button');
    const inputs = document.querySelectorAll('input, textarea');

    button.addEventListener('click', function() {
        // Sadə bir yoxlama: Bütün sahələr doludurmu?
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value) allFilled = false;
        });

        if (allFilled) {
            // Əgər doludursa, Uğurla göndərildi! mesajı çıxsın
            alert("Uğurla göndərildi! 💛");
            
            // Formanı təmizləyək
            inputs.forEach(input => input.value = "");
        } else {
            alert("Zəhmət olmasa bütün sahələri doldur.");
        }
    });
