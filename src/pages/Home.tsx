import { useState } from 'react';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import Diversidade from '../components/Diversidade';
import Programs from '../components/Programs';
import Missao from '../components/Missao';
import ModalMenu from '../components/ModalMenu';
import ModalLink from '../components/ModalLink';
import '../App.css';
import React from 'react';

function Home() {
  const [modal, setModal] = useState(false)

  const toggleMenu = () => {
    setModal(!modal)
  }
  document.title = 'Trabalhe Conosco | Corp Solution';
  return (
    <>
    <div onClick={() => toggleMenu()} className='z-[4] md:hidden flex flex-col justify-around fixed right-2 top-2 cursor-pointer border-gradient'>
      <div className={`bg-slate-50 h-[2px] z-[5] w-4 m-auto transition-transform ${modal ? 'relative bottom-[-6px] rotate-45' : ''}`}></div>
      <div className={`bg-slate-50 h-[2px] z-[5] w-4 m-auto transition-transform ${modal ? 'relative bottom-[7px] rotate-[135deg]' : ''}`}></div>
    </div>
    <Header />
    <Sobre/>
    <Diversidade/>
    <Programs/>
    <Missao/>
    {modal && (
      // <ModalMenu />
      <div  className='md:hidden flex flex-col fixed top-0 w-full h-full z-[2] bg-slate-900'>
        <ModalLink toggle={toggleMenu} url="#sobre" title="Sobre"/>
        <ModalLink toggle={toggleMenu}  url="#diversidade" title="Diversidade"/>
        <ModalLink toggle={toggleMenu}  url="#programas" title="Programas"/>
        <ModalLink toggle={toggleMenu}  url="#missao" title="Missao"/>
    </div>
    )}
    </>
  )
}

export default Home;
