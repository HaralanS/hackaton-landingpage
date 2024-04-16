import HeaderLink from "./HeaderLink"

const Header = () => {
 
  return (
    <div>
      <nav>
        <ul className="md:flex bg-slate-900 hidden justify-around h-20 items-center">
          <HeaderLink url="#sobre" title="Sobre"/>
          <HeaderLink url="#diversidade" title="Diversidade"/>
          <HeaderLink url="#programas" title="Programas"/>
          <HeaderLink url="#missao" title="Missao"/>
          
        </ul>
        <div className="bg-slate-600 h-[2px]"></div>
      </nav>
      
    </div>
  )
}

export default Header
