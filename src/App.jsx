import Header from './structure/Header'
import sum from './helpers/functions'
import Footer from './structure/Footer';
import Btn from './components/Btn';
import Btn2 from './components/Btn2';
import Alert from './components/Alert';

export default function App() {





  return (
    <>

      <Header></Header>

      <Btn size='sm'>OK</Btn>
      <Btn size='lg'>Cancel</Btn>
      <Btn size='sm'>Save</Btn>
      <Btn size='xl'>Delete</Btn>

      <Btn2 size='sm' label='OK' />
      <Btn2 size='lg' label='Cancel' />
      <Btn2 size='sm' label='Save' />
      <Btn2 size='xl' label='Delete' />


      <Alert type='success' border={true} rounded={true}>
        <h2>Saved Successfully</h2>
        <p>Data Saved...</p>
      </Alert>

      <Alert type='error' border={true}>
        <h2>Cannot Delete</h2>
        <p>Failed to Delete the file</p>
      </Alert>

      <Alert type='warn'>
        <h2>Warning</h2>
        <p>Please confirm that .....</p>
      </Alert>

      <Alert border={true}>
        <h2>General</h2>
        <p>Welcome to the app</p>
      </Alert>

      <Alert>
        <h2>General</h2>
        <p>Welcome to the app</p>
      </Alert>

      <Alert type='error'  >
        <h2>User Will be deleted</h2>
        <p>Are you sure you want to delete this user account?</p>
        <Btn color='red'>OK</Btn>
        <Btn color='white'>Cancel</Btn>
      </Alert>

      <Footer >  </Footer>




      <Card title='Card Header' btn1='Save' btn2='Cancel' btn1Color='green' btn2Color='red'>
        Any thing you need
      </Card>

      <Card title='Card Confirmation' btn1='Delete' btn2='Close' btn1Color='red' btn2Color='yellow'>
        Yet any thing you need
      </Card>


      {/* 
      <nav className='mb-4 border-b'>
        <div>
          LOGO
        </div>

        <div>
          <a href="">Link </a>
          <a href="">Link </a>
          <a href="">Link </a>
          <a href="">Link </a>
        </div>

        <div>
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      </nav>

      <main className='mb-4 border-b'>
        <h2>Main Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia, voluptatum.
        </p>
      </main>

      <footer className='mb-4 border-b'>
        <p>Footer</p>
      </footer> */}
    </>
  )
}