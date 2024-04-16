
const ModalLink = (props) => {
  return (
    <a onClick={() => props.toggle()} href={props.url} className="font-semibold text-gray-50 hover:bg-slate-50/20 h-full w-[100%] text-center content-center cursor-pointer transition-colors hover:text-violet-600">{props.title}</a>
  )
}

export default ModalLink
