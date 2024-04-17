/* eslint-disable react/prop-types */
const HeaderLink = (props) => {
  return (
    <a
      href={props.url}
      className="font-semibold text-gray-50 hover:bg-slate-50/80 h-full w-[100%] text-center content-center cursor-pointer transition-colors hover:text-violet-600 hover:underline"
    >
      {props.title}
    </a>
  )
}

export default HeaderLink
