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
            url: 'http://127.0.0.1:3000/login',
            data: {
                email,
                password
            }
        });
        location.assign('/student-menu')
        // console.log(result.data);
        // Swal.fire({
        //     icon: 'success',
        //     title: '',
        //     text: 'Login successful!'
        // });
    }
    catch(error) {
        console.log(error.response.data);
        Swal.fire({
            icon: 'error',
            title: '',
            text: 'Something went wrong!'
        });
    }


}