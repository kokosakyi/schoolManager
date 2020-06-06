let signUpForm = document.querySelector('.signUpForm');

if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = {
            firstName: document.getElementById('firstName').value,
            surname: document.getElementById('surname').value,
            otherNames: document.getElementById('otherNames').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            passwordConfirm: document.getElementById('passwordConfirm').value
        };
        signUp(user);
    });
}



const signUp = async (user) => {
    try {
        const result = await axios({
            method: 'POST',
            url: '/sign-up',
            data: {
                ...user
            }
        });
        Swal.fire({
            icon: 'success',
            title: '',
            text: 'User data successfully saved'
        });
    }
    catch(error) {
        Swal.fire({
            icon: 'error',
            title: '',
            text: 'Something went wrong!'
        });
    }


}