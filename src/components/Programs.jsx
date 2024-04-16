
import programaImage from "../assets/programa.png"

const Programs = () => {
  return (
    <div id="programas" className="bg-gray-900 min-h-screen">
      <h1 className="text-center pt-10 text-slate-100 font-bold text-3xl px-2">Programas de contratacao</h1>
      <p className="text-slate-50 px-10 pt-16 max-w-[700px] m-auto">* Recrutamente Inclusivo:
A Corps possui parcerias com organizações e comunidades diversas para atrair talentos de diferentes origens.</p>
      <p className="text-slate-50 px-10 pt-2 max-w-[700px] m-auto">* Processo de Seleção Equitativo:
Através de entrevistas estruturadas que valorizam habilidades e experiências, em vez de características pessoais, a Corps também utiliza de testes práticos e projetos para avaliar as habilidades dos candidatos de forma objetiva.</p>
      <p className="text-slate-50 px-10 pt-2 max-w-[700px] m-auto">* Programas de Desenvolvimento Profissional:
      Mentoria cruzada, onde colaboradores de diferentes origens e áreas compartilham conhecimentos e experiências.
      Treinamentos contínuos sobre diversidade e inclusão para todos os funcionários.
      Oportunidades de avanço na carreira baseadas no desempenho e potencial, independentemente de origem ou identidade.</p>
      <p className="text-slate-50 px-10 pt-2 max-w-[700px] m-auto">* Cultura Organizacional Inclusiva:
Com o foco em gerar o senso de pertencimento, a empresa organiza eventos, e criação de grupos de afinidade para promover o networking.
Políticas claras contra discriminação e assédio, com canais de denúncia acessíveis e confidenciais.
Celebração de datas importantes para a diversidade, como o Mês do Orgulho LGBTQ+ e o Dia Internacional da Mulher.</p>
      <p className="text-slate-50 px-10 pt-2 max-w-[700px] m-auto pb-10">* Monitoramento e Avaliação Constantes:
Análise regular dos dados de contratação, promoção e retenção para identificar possíveis disparidades.
Pesquisas de clima organizacional para medir a percepção dos funcionários sobre a cultura de diversidade e inclusão.
Ajustes contínuos no programa com base nos feedbacks e resultados obtidos.
Na Corps Solutions, a diversidade não é apenas uma iniciativa, é a nossa força motriz. Junte-se a nós e faça parte de uma equipe onde suas diferenças são celebradas e valorizadas.</p>
      <img className="max-w-[90%] md:w-[700px] m-auto pb-10" src={programaImage} alt="" />
    </div>
  )
}

export default Programs
