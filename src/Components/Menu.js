import React from 'react'

function Menu() {
    return (
        <div alt='menu' className=' p-2 flex justify-evenly border-b-2 border-neutral-150'>
            <button>The Outsiders Second Hand</button>
            <div class="dropdown">
                <button>Categorias ↓</button>
                <div className='dropdown-content '>
                    <a href='./#'>Acessórios</a>
                    <a href='./#'>Bijuterias</a>
                    <a href='./#'>Saias</a>
                </div>
            </div>
        </div>
    )
}

export default Menu