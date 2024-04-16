import logo from '../../../assets/dashboard/logo.png';
import people from '../../../assets/dashboard/people.png';
import profile from '../../../assets/dashboard/profile.png';
import * as S from './FilterInput.styles';
import Filters from '../Filters/Filters';
import data from '../../../data/colaboradores.json';

function FilterInput() {
  const totalColaboradores = data.length;
  return (
    <S.Section>
      <div className="header">
        <div>
          <img src={ logo } alt="Corp Solutions" />
          <h1>Corp Solutions</h1>
        </div>
        <div>
          <img src={ people } alt="ícone de colaboradores" />
          <p>
            { `Total de colaboradores: ${totalColaboradores}` }
          </p>
        </div>
        <div>
          <img src={ profile } alt="foto de perfil" />
          <p>rh@corpsolutions.com.br</p>
        </div>
      </div>
      <Filters />
    </S.Section>
  );
}

export default FilterInput;
