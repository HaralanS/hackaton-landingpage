import FilterInput from '../components/dashboard/FilterInput/FilterInput';
import Goals from '../components/dashboard/Goals/Goals';
import Insights from '../components/dashboard/Insights/Insights';
import Table from '../components/dashboard/Table/Table';
import * as S from './Dashboard.styles';

function Initial() {
  document.title = 'Dashboard | Corp Solution';
  return (
    <S.Section>
      <FilterInput />
      <Table />
      <Insights />
      <Goals />
    </S.Section>
  );
}

export default Initial;
