import { Button, TextInput, Label, Checkbox } from 'flowbite-react';
import { useState } from 'react';

const Register = () => {

    const [termsAccepted, setTermsAccepted] = useState(false);

    const [firstName, setFirstName] = useState('');


    const termsAndConditionsChanged = () => {
        console.log('termsAndConditionsChanged')

        setTermsAccepted(!termsAccepted);
    }
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Create an Account</h1>

            <form className="space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-1">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Personal Information</h2>

                    <div>
                        <Label htmlFor="firstName" value="First Name" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput maxLength={15} minLength={3} onChange={e => setFirstName(e.target.value)} id="firstName" type="text" required className="w-full" placeholder='First Name' />
                    </div>
                    <div className='mb-4 text-white flex justify-between'>
                        <small>{firstName.length < 3 ? 'Rejected' : 'Accepted'}</small>
                        <small>{firstName.length}/15</small>
                    </div>

                    <div>
                        <Label htmlFor="lastName" value="Last Name" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="lastName" type="text" required className="w-full" placeholder='last Name' />
                    </div>
                    <div className='mb-4 text-white flex justify-end'>
                        <small>0/15</small>
                    </div>


                    <div>
                        <Label htmlFor="mobile" value="Mobile Number" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="mobile" type="tel" required className="w-full" placeholder='Mobile' />
                    </div>
                    <div className='mb-4 text-white flex justify-end'>
                        <small>0/15</small>
                    </div>

                </div>

                {/* Account Information Section */}
                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Account Information</h2>

                    <div>
                        <Label htmlFor="email" value="Email Address" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="email" type="email" required className="w-full" placeholder='Email' />
                    </div>
                    <div className='mb-4 text-white flex justify-end'>
                        <small>0/15</small>
                    </div>


                    <div>
                        <Label htmlFor="password" value="Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="password" type="password" required className="w-full" placeholder='Password' />
                    </div>
                    <div className='mb-4 text-white flex justify-end'>
                        <small>0/15</small>
                    </div>


                    <div>
                        <Label htmlFor="confirmPassword" value="Confirm Password" className="block text-sm font-medium text-gray-900 dark:text-white" />
                        <TextInput id="confirmPassword" type="password" required className="w-full" placeholder='Confirm Password' />
                    </div>
                    <div className='mb-4 text-white flex justify-end'>
                        <small>0/15</small>
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


                <Button type="submit" className="w-full" disabled={!termsAccepted}>
                    Create Account
                </Button>


                <div className="p-3 bg-gray-900 rounded-md"></div>

                {/* Login Link */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                    Already have an account? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Login</a>
                </div>
            </form>
        </div>
    );
};

export default Register;