import { Button, TextInput, Label, Checkbox } from 'flowbite-react';
import { useState } from 'react';

const Register = () => {

    const [termsAccepted, setTermsAccepted] = useState(false);

    const termsAndConditionsChanged = () => {
        console.log('termsAndConditionsChanged')

        setTermsAccepted(!termsAccepted);
    }

    // firstname
    const [firstName, setFirstName] = useState('');
    
    // lastname
    const [lastName, setLastName] = useState('');


    // mobile
    const [mobile, setMobile] = useState('');
    const testmobile = /^01[0125][0-9]{8}$/;

    

    // email
    const [email, setEmail] = useState('');
    const testemail = /^[a-z0-9]+@[a-z]+.[a-z]{2,3}$/;

    // password
    const [password, setPassWord] = useState('');

    let text_password = '';
    let bg_char = '';
    let bg_Aa = '';
    let bg_1 = "";
    let bg_symbol;
    let st_small_pass = `flex justify-center items-center gap-1 `;

    if (password.length == 0) {
        text_password = "";
        bg_char = '';
        bg_Aa = "";
        bg_1 = "";
        bg_symbol = "";
    }
    if (password.length >= 8) {
        bg_char = "bg-green-600"
    }
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
        bg_Aa = "bg-green-600";
    }
    if (/[0-9]/.test(password)) {
        bg_1 = "bg-green-700";
    }
    if (/[^A-Za-z0-9]/.test(password)) {
        bg_symbol = "bg-green-700"
    }
    const st_div_pass = `border w-4 h-4 rounded-lg `;

    // checkpassword
    const [checkpassword, setCheckPassWord] = useState('');

    let bg_check_pass = "";

    if (checkpassword.length == 0) {
        bg_check_pass = ""
    } else if (checkpassword == password) {
        bg_check_pass = "bg-green-700"
    } else {
        bg_check_pass = "bg-red-600"
    }

    const [showdata ,setShowData] = useState(false)

    function x(e) {
        e.preventDefault();
        setShowData(true);
        console.log("jsd");
    }


    return (
        
        <div className="max-w-md mx-auto p-6  rounded-lg shadow-md dark:bg-gray-900 mt-10">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Create an Account</h1>
            <form className="space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-1">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Personal Information</h2>
                    <div>
                        <Label htmlFor="firstName" value="First Name" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput maxLength={15} minLength={3} onChange={e => setFirstName(e.target.value)} id="firstName" type="text" required className="w-full" placeholder='First Name' />
                    </div>
                    <div className={`mb-4 flex justify-between ${firstName.length < 3 ? 'text-red-500' : 'text-green-500'}`}>
                        <small>{firstName.length < 3 ? 'Rejected' : 'Accepted'}</small>
                        <small>{firstName.length}/15</small>
                    </div>
                    <div>
                        <Label htmlFor="lastName" value="Last Name" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput maxLength={15} onChange={e => setLastName(e.target.value)} id="lastName" type="text" required className="w-full" placeholder='last Name' />
                    </div>
                    <div className={`mb-4 flex justify-between ${lastName.length < 3 ? 'text-red-500' : 'text-green-500'}`} >

                        <small>{lastName.length < 3 ? "Rejected" : "Accepted"}</small>
                        <small>{lastName.length}/15</small>
                    </div>
                    <div>
                        <Label htmlFor="mobile" value="Mobile Number" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput maxLength={11} id="mobile" onChange={e => setMobile(e.target.value)} type="number" required className="w-full" placeholder='Mobile' />
                    </div>
                    <div className={`mb-4 flex justify-between  ${mobile.match(testmobile) ? 'text-green-500' : 'text-red-500'}`} >
                        <small>{mobile.match(testmobile) ? 'Accepted' : 'start / 012 / 011 / 010 / 015'}</small>
                        <small>{mobile.length}/11</small>
                    </div>
                </div>
                {/* Account Information Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Account Information</h2>
                    <div>
                        <Label htmlFor="email" value="Email Address" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput onChange={e => setEmail(e.target.value)} id="email" type="email" required className="w-full" placeholder='Email' />
                    </div>
                    <div className={`mb-4  flex justify-between ${email.match(testemail) ? 'text-green-500' : 'text-red-500'}`}>
                        <small >{email.match(testemail) ? 'valid' : 'Please enter a valid email address' }</small>
                        <small>{email.length}</small>
                    </div>
                    <div>
                        <Label htmlFor="password" value="Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput onChange={e => setPassWord(e.target.value)} id="password" type="password" required className="w-full" placeholder='Password' />
                    </div>
                    <div className='mb-4 text-white flex justify-between'>
                        <div className='flex gap-2  justify-start items-start'>
                            <small>{text_password}</small>
                            <small className={st_small_pass}><div className={st_div_pass + bg_char}></div> 8 to 30</small>
                            <small className={st_small_pass}><div className={st_div_pass + bg_Aa}></div>A/a</small>
                            <small className={st_small_pass}><div className={st_div_pass + bg_1}></div>#1</small>
                            <small className={st_small_pass}><div className={st_div_pass + bg_symbol}></div>symbol</small>
                        </div>
                        <small>{password.length}</small>
                    </div>
                    <div>
                        <Label htmlFor="confirmPassword" value="Confirm Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput onChange={e => setCheckPassWord(e.target.value)} id="confirmPassword" type="password" required className="w-full" placeholder='Confirm Password' />
                    </div>
                    <div className='mb-4 text-white flex justify-between '>
                        <div className={st_div_pass + bg_check_pass}></div>
                        <small>{checkpassword.length}</small>
                    </div>
                </div>
                {/* Terms and Conditions */}
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <Checkbox id="terms" onClick={termsAndConditionsChanged} />
                    </div>
                    <Label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Terms and Conditions</a>
                    </Label>
                </div>
                {/* Submit Button */}
                <Button type="submit" onClick={x} className="w-full" disabled={!termsAccepted}>
                    Create Account
                </Button>
                {showdata == true ? <div className="p-3 text-gray-100 bg-gray-900 rounded-md">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{mobile}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                    </div> : "" }
                
                {/* Login Link */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                    Already have an account? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Login</a>
                </div>
            </form>
        </div>
    );
};

export default Register;