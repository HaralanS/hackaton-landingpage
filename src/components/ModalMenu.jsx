import ModalLink from "./HeaderLink"

const ModalMenu = (props) => {
  return (
    <div  className='md:hidden flex flex-col fixed top-0 w-full h-full z-[2] bg-slate-900'>
        <ModalLink toggle={props.toggle} url="#sobre" title="Sobre"/>
        <ModalLink toggle={props.toggle}  url="#diversidade" title="Diversidade"/>
        <ModalLink toggle={props.toggle}  url="#programas" title="Programas"/>
        <ModalLink toggle={props.toggle}  url="#missao" title="Missao"/>
    </div>
  )
}

export default ModalMenu
