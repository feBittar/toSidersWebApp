import React from 'react'
import Menu from './Menu'
function Nav() {
  return (
    <nav className='sticky top-0'>
      <div className=' border-b-2 border-neutral-150 h-20 p-2 flex justify-between items-center'>
        <a className='h-full ' href='./#' ><img alt='logo' className='h-full ' src='./assets/imgs/logo-to.png'></img></a>

        <div className='flex justify-end'>
          <input alt='search bar' placeholder='O que você está buscando?' className='bg-neutral-50 inp-nav h-10 border-solid border outline-none border-neutral-600 rounded-md'></input>
          <button className='search-btn'><img className='search-ico' src='/assets/imgs/search.png'></img></button>
        </div>
        <div className='flex justify-evenly gap-2'>
          <button className='btn-nav rounded-md hover:bg-neutral-50'>Minha Conta</button>
          <button className='btn-nav rounded-md hover:bg-neutral-50'>Contato</button>
          <button className='btn-nav rounded-md hover:bg-neutral-50'>Meu Carrinho</button>
        </div>
      </div>
      <Menu />
    </nav>
  )
}

export default Nav