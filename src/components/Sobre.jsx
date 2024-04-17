import sobreImage from "../assets/sobre-01.png"

const Sobre = () => {
  return (
    <div id="sobre" className="bg-gray-900 min-h-screen">
      <h1 className="text-center pt-10 text-slate-100 font-bold text-3xl px-2">Sobre a Corps</h1>
      <p className="text-slate-50 px-10 py-16 max-w-[700px] m-auto">
        No cenário empresarial atual, onde a diversidade e a inclusão são reconhecidas como elementos cruciais para o sucesso organizacional, surge uma empresa comprometida em liderar essa transformação: a Corps Solutions. Fundada com a missão de revolucionar o setor de Recursos Humanos e Gestão de Pessoas, a Corps Solutions coloca a inclusão em primeiro lugar, reconhecendo-a não apenas como um valor, mas como uma vantagem estratégica.

        Com uma abordagem inovadora e proativa, a Corps Solutions está empenhada em integrar diversos grupos dentro do ambiente de trabalho, celebrando as diferenças e promovendo um ambiente onde todos se sintam valorizados e respeitados. A empresa entende que a diversidade vai além de aspectos visíveis, como gênero, raça e orientação sexual, e abraça também a diversidade de pensamento, experiências e habilidades.
      </p>
      <img className="max-w-[90%] md:w-[700px] m-auto pb-10" src={sobreImage} alt="" />

    </div>
  )
}

export default Sobre
