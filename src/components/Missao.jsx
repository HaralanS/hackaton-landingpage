import missaoImage from "../assets/mission-01.png"

const Missao = () => {
  return (
    <div id="missao" className="bg-gray-100 min-h-screen">
      <h1 className="text-center pt-10 text-slate-900 font-bold text-3xl px-2">Nossa Missao</h1>
      <p className="text-slate-900 px-10 py-16 max-w-[700px] m-auto">Com a missão de transformar o cenário corporativo por meio da inclusão, com valores sólidos enraizados em cada ação. Celebramos a diversidade como nossa maior força, promovendo igualdade, respeito e colaboração em todas as interações. 

Valorizamos a integridade em todas as nossas decisões, buscando sempre a transparência e a ética. Priorizamos a inovação, buscando constantemente novas formas de impulsionar o progresso e a excelência. E acima de tudo, nossa dedicação é o bem-estar e o crescimento de nossa equipe, garantindo um ambiente onde todos possam prosperar e alcançar seu potencial máximo. Juntos, estamos construindo não apenas uma equipe, mas uma comunidade onde cada voz é ouvida, cada perspectiva é respeitada e cada indivíduo tem a oportunidade de prosperar.</p>
      <img className="max-w-[90%] md:w-[700px] m-auto" src={missaoImage} alt="" />
    </div>
  )
}

export default Missao
