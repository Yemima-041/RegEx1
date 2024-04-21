$(document).ready(function() {
    const nimRegex = /^[0-9]{9}$/;
    const tanggalLahirRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    const nomorhpRegex = /^(08[0-9]{10,11})$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    const validateInput = (input, regex, errorMessage, successMessage, inputElement) => {
        const isValid = regex.test(input);
        const errorElement = inputElement.next('.error-message');
        const successElement = inputElement.next('.success-message');

    //Menghapus pesan sukses sebelumnya yang terkait dengan inputElement
        successElement.remove();

        if (!input.trim()) {
            // Menghapus pesan kesalahan jika input kosong
            errorElement.remove();
        } else if (!isValid) {
            // Menampilkan pesan kesalahan jika input tidak valid
            if (!errorElement.length) {
                displayErrorMessage(errorMessage, inputElement);
            }
        } else {
            // Menghapus pesan kesalahan jika input valid
            errorElement.remove();
            // Menampilkan pesan sukses
            displaySuccessMessage(successMessage, inputElement);
        }
    };

    const displayErrorMessage = (errorMessage, inputElement) => {
        // Menambahkan pesan kesalahan
        const errorMessageElement = $('<div class="error-message text-red-500 text-sm mt-1">' + errorMessage + '</div>');
        inputElement.after(errorMessageElement);
    };

    const displaySuccessMessage = (successMessage, inputElement) => {
        // Menambahkan pesan sukses
        const successMessageElement = $('<div class="success-message text-green-500 text-sm mt-1">' + successMessage + '</div>');
        inputElement.after(successMessageElement);
    };
    

    $('#nim').on('input', function() {
        validateInput($(this).val(), nimRegex, 'Harus terdiri dari 9 digit angka.', 'Inputan valid', $(this));
    });
    
    $('#tanggal-lahir').on('input', function() {
        validateInput($(this).val(), tanggalLahirRegex, 'Gunakan format dd/mm/yyyy.', 'Inputan valid', $(this));
    });
    
    $('#nomor-hp').on('input', function() {
        validateInput($(this).val(), nomorhpRegex, 'Awalan "08" & format 12-13 angka.', 'Inputan valid', $(this));
    });
    
    $('#email').on('input', function() {
        validateInput($(this).val(), emailRegex, 'Akhiran harus @gmail.com.', 'Inputan valid', $(this));
    });
    
    $('#url').on('input', function() {
        validateInput($(this).val(), urlRegex, 'Dimulai dengan protokol "ftp://", "http://", atau "https://".', 'Inputan valid', $(this));
    });
});
