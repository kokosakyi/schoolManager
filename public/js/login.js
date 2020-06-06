let loginForm = document.querySelector('.loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });
}


const login = async (email, password) => {
    try {
        const result = await axios({
            method: 'POST',
            url: '/login',
            data: {
                email,
                password
            }
        });
        location.assign('/student-menu')
        // Swal.fire({
        //     icon: 'success',
        //     title: '',
        //     text: 'Login successful!'
        // });
    }
    catch(error) {
        Swal.fire({
            icon: 'error',
            title: '',
            text: 'Something went wrong!'
        });
    }


}