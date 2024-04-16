import FilterInput from '../components/dashboard/FilterInput/FilterInput';
import Goals from '../components/dashboard/Goals/Goals';
import Insights from '../components/dashboard/Insights/Insights';
import Table from '../components/dashboard/Table/Table';
import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import * as S from './Dashboard.styles';

function Initial() {
  document.title = 'Dashboard | Corp Solution';
  const navigate = useNavigate();
  return (
    <S.Section>
      <FilterInput />
      <Table />
      <Insights />
      <Goals />
      <div className="nextPage">
        <button onClick={ () => navigate('/home') }>
          Ir para landing page
        </button>
          <MdOutlineNavigateNext size={ 30 } />
      </div>
    </S.Section>
  );
}

export default Initial;
