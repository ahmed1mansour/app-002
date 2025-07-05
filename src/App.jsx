import Header from './structure/Header'
import sum from './helpers/functions'
import Footer from './structure/Footer';
import Btn from './components/Btn';
import Btn2 from './components/Btn2';
import Alert from './components/Alert';
import Card from './components/Card';

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

      <p className='bg-emerald-500'>SOME COLORED TEXT</p>
      <Footer >  </Footer>


      <div className="flex justify-center gap-4 flex-wrap bg-slate-800">
        <Card
          title="Kareem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis explicabo, quo voluptatem illo dolores! Voluptas distinctio ipsa soluta recusandae!"
          button1="Add"
          button2="Remove"
          button1_color="sky"
          button2_color="red"
        />
        <Card
          title="A.Mansour"
          description="This is card 2"
          button1="Reset"
          button2="Cancel"
          button1_color="red"
          button2_color="emerald"
        />
        <Card
          title="Maged"
          description="This is a new Card"
          button1="Save"
          button2="Close"
          button1_color="green"
          button2_color="teal"
        />
      </div>




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