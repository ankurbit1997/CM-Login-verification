const form = document.getElementById('form');
  

form.addEventListener('submit',e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value; 


    if (firstName == ''){

        addErrorTo('firstname', 'First name is important');
        
    } else {
        removeErrorFrom('firstname');
    }


    if (lastName == ''){

        addErrorTo('lastname', 'First name is important');
        
    }else {
        removeErrorFrom('lastname');
    }
    if (email == ''){

        addErrorTo('email', 'email is important');
        
    }else {
        removeErrorFrom('email');
    }
    if (password == ''){

        addErrorTo('password', 'Password is important');
        
    }else {
        removeErrorFrom('password');
    }


   
});
function addErrorTo(field, message) {
        const formControl = form[field].parentNode;
        formControl.classList.add('error');
        


        const small = formControl.querySelector('small');
        small.innerText = message;
        small.style.opacity = '1';
}

function removeErrorFrom(field){
    const formControl = form[field].parentNode;
        formControl.classList.remove('error');


    const small = formControl.querySelector('small');
        
        small.style.opacity = '0';

}