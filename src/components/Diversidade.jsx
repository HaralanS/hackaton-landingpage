import diversidadeImage from "../assets/diversidade-01.png"

const Diversidade = () => {
  return (
    <div id="diversidade" className="bg-gray-100 min-h-screen">
      <h1 className="text-center pt-10 text-slate-900 font-bold text-3xl px-2">Diversidade na Corps</h1>
      <p className="text-slate-900 px-10 py-16 max-w-[700px] m-auto">Na Corps Solutions, a diversidade é o coração de nossa cultura. Celebramos as diferenças de gênero, raça, orientação sexual e habilidades, pois sabemos que é dessa riqueza que surgem as melhores ideias e soluções. Aqui, todos são bem-vindos e valorizados.</p>
      <img className="max-w-[90%] md:w-[700px] m-auto" src={diversidadeImage} alt="" />
    </div>
  )
}

export default Diversidade
