import { Link } from 'react-router-dom';
import './style.css';
import { GetImageById } from '../../functions/utils';

const PokeCard = ({ name, id, types }: any) => {
  return (
    <Link to={`/details/${name}`} className="container-card mb-4 link">
      <div>
        <div className="text-center">
          <h2 className="pokemon-name limit-text my-0">{name}</h2>
          <p className="pokemon-number mb-0">
            # {id.toString().padStart(3, '0')}
          </p>
        </div>
      </div>
      <figure
        className={`container-card-img position-relative my-4 container-${types[0].type.name}`}
      >
        <img
          className="animation-up-down"
          alt={name}
          title={name}
          src={GetImageById(id)}
        />
      </figure>
      <div className="w-100  d-flex justify-content-between">
        {types.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={` 
            ${item.type.name}
            type-item ${types.length == 1 && 'w-100'}`}
            >
              <p className="mb-0 text-uppercase">{item.type.name}</p>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default PokeCard;
