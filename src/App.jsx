import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";




function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='p-[11px] bg-red-300 text-red-900 dark:bg-red-900 dark:text-red-200 md:bg-sky-300 md:text-sky-900 dark:md:bg-sky-900 md:dark:text-sky-100'>

      <Button color='dark' pill size='xl'>OK</Button>


      <Drawer open={true}>
        <DrawerHeader title="Drawer" />
        <DrawerItems>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, nesciunt.</p>
        </DrawerItems>
      </Drawer>



      <h1 className='text-5xl text-center py-5 hover:text-white hover:scale-90 animate-wiggle'>Page Title</h1>
      <h2 className='text-3xl text-center py-5 hover:text-white hover:scale-90 animate-[wiggle_3s_linear_infinite]'>Page Sub Title</h2>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil laudantium sint corrupti facilis commodi, aliquam, dolore delectus at sed alias sit illo libero id exercitationem incidunt consequatur eligendi distinctio. Quo illo cumque quos quasi consequatur, nulla sapiente, molestias debitis facere, perferendis blanditiis amet neque accusamus aliquam! Obcaecati, adipisci aspernatur! Suscipit, odio aut harum consequuntur eius quam perferendis dolore, accusamus, repudiandae nostrum nihil aliquam ipsum autem sed doloremque ducimus? Laborum placeat veniam tempore cumque aliquam provident ullam corporis dolores consequuntur quae laudantium autem eligendi nisi fuga tempora nam officiis enim cum sit dolore, nesciunt maxime nostrum repellendus! Labore, officia laudantium.

      <div className='border p-10 bg-[#801] text-maged/90'>

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati fuga voluptatum deleniti alias, quidem doloribus aspernatur saepe ut. Impedit temporibus culpa ipsum voluptates repudiandae ea quibusdam esse dolorum labore maxime animi, accusamus rerum sed excepturi amet quidem eveniet dolores omnis! Incidunt libero possimus non accusamus minima perferendis corporis quaerat doloribus.
      </div>

      <div className='p-4 bg-maged'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore animi dolorum possimus earum delectus, nesciunt quis ad officiis, voluptatem aliquam fuga atque quas reprehenderit voluptatum fugit explicabo fugiat soluta. Quidem ipsa dolore libero, dolorem sint ad optio explicabo pariatur nesciunt modi dolores esse, dicta repudiandae consectetur ipsum commodi dignissimos eum hic, aliquid eos placeat!
      </div>

      <div className="p-5 bg-hawaiian-tan-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aut, ab, quo sed aliquid eligendi sint laborum accusamus vel est maiores iusto odio necessitatibus voluptatum veniam provident deserunt porro illum eveniet possimus laboriosam tempore? Excepturi sapiente iste laborum alias asperiores assumenda sunt distinctio nostrum explicabo quaerat aperiam, exercitationem quod ea magnam recusandae porro rem. Neque eum consequuntur hic asperiores, doloribus voluptate? Iste dolorum, libero vero quo excepturi pariatur facere odit corrupti debitis amet voluptate impedit fuga accusamus provident laboriosam. Fugiat, doloribus sit voluptatem nobis doloremque nemo distinctio nulla qui facilis, voluptate autem repellat nihil non ullam deserunt repudiandae vero tempore.
      </div>

      <div className='bg-(--theme-color) p-10`'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptas magni dolor, tempore corrupti temporibus repellat cupiditate dignissimos et libero dolore fugit ex porro incidunt fuga labore quae iusto officiis, at voluptates. Asperiores dolore, ratione maxime deserunt ad ex repellat assumenda nam obcaecati voluptatem reprehenderit architecto quaerat autem eveniet excepturi?3
      </div>

      <div className='border h-40 flex items-center justify-center'>
        <div className='p-4 w-20 h-20 rounded-full border-4 border-maged border-s-transparent animate-spin'>

        </div>
      </div>


      <div className="border md:flex">
        <div className='border md:w-2/12 xl:w-1/3'>A- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam inventore eos et minus maiores animi. Rem dolores optio natus! Cumque temporibus nihil reiciendis incidunt distinctio nulla quae aut tempore sapiente.</div>
        <div className='border md:w-6/12 xl:w-1/3'>B- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam inventore eos et minus maiores animi. Rem dolores optio natus! Cumque temporibus nihil reiciendis incidunt distinctio nulla quae aut tempore sapiente.</div>
        <div className='border md:w-4/12 xl:w-1/3'>C- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam inventore eos et minus maiores animi. Rem dolores optio natus! Cumque temporibus nihil reiciendis incidunt distinctio nulla quae aut tempore sapiente.</div>
      </div>
    </div>
  )
}

export default App
