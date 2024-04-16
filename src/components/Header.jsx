import HeaderLink from "./HeaderLink"

const Header = () => {
 
  return (
    <div>
      <nav>
        <ul className="md:flex bg-slate-600 hidden justify-around h-20 items-center">
          <HeaderLink url="#sobre" title="Sobre"/>
          <HeaderLink url="#diversidade" title="Diversidade"/>
          <HeaderLink title="Programas"/>
          <HeaderLink title="Missao"/>
          
        </ul>
      </nav>
      
    </div>
  )
}

export default Header
