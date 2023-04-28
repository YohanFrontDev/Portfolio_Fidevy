import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


import { FaGithub, FaTwitter, FaReact, FaLinkedinIn } from "react-icons/fa";

export default function footer() {

  return (
    <>
      <footer className='fixed bottom-0 w-100% bg-black text-white'>
        <div className='container bg-black py-5 text-center'>
          <div className='flex justify-center center '>
            <div className='basis-1/4'>
              <div className="bg-[url('/src/assets/LOGO.png')]">
              </div>
            </div>
            <div className='basis-1/4'>
              <h2>Liens utiles</h2>
              <div className='flex flex-col justify-around'>
                <Link>Tutoriels</Link>
                <Link>Infos</Link>
                <Link>Contact</Link>
                <Link>Se connecter</Link>
                <Link>S'inscrire</Link>
              </div>
            </div>
            <div className='basis-1/4'>
              <h2>Techno utilisées</h2>
              <div className='flex flex-col justify-center'>
              <Link to="/contact">Me contacter</Link>
              <Link className=''>
                  <FaReact />
              </Link>
              </div>
            </div>
            <div className='basis-1/4'>
              <h2 className=''>Nos réseaux</h2>
              <div className='flex flex-row justify-around m-4'>
                <Link className='bg-slate-700 w-10 h-10 border-r-6  hover:text-teal-600'>
                  <FaGithub className='text-3xl mx-auto my-auto' />
                </Link>
                <Link>
                  <FaTwitter />
                </Link>
                 <Link>
                  <FaLinkedinIn />
                </Link> 
                 <Link>
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </footer>

    </>
  )
}
