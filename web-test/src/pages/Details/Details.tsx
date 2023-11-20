import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingDetails from '../../components/Loading/LoadingDetails';
import Header from '../../components/Header/Header';
import PokeCard from '../../components/Pokemon/PokeCard';
import PokeOverview from '../../components/Pokemon/PokeOverview';
import PokeInfo from '../../components/Pokemon/PokeInfo';
import PokeStats from '../../components/Pokemon/PokeStats';
import PokeEvolution from '../../components/Pokemon/PokeEvolution';
import Footer from '../../components/Others/Footer';
import ModalError from '../../components/Others/ModalError';
import api from '../../services/api';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Details() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<any>({});
  const [showModalError, setShowModalError] = useState(false);

  useEffect(() => {
    function LoadPokemon() {
      api
        .get(`/pokemon/${name}`)
        .then((response) => {
          if (response.status == 200) {
            LoadSpecies(response.data);
          }
        })
        .catch(() => {
          setShowModalError(true);
        });
    }

    if (name == undefined) navigate('/');
    window.scrollTo(0, 0);
    LoadPokemon();
  }, [name]);

  async function LoadSpecies(poke: any) {
    try {
      let pokeSpecies = await api.get(`/pokemon-species/${name}`);
      let pokeEvolution = await axios.get(pokeSpecies.data.evolution_chain.url);

      let flavor_text_sword = '';
      let flavor_text_shield = '';
      let flavor_text_default = '';
      pokeSpecies.data.flavor_text_entries.map((item: any) => {
        if (item.language.name != 'en') return;
        if (item.version.name == 'sword') {
          flavor_text_sword = item.flavor_text;
        } else if (item.version.name == 'shield') {
          flavor_text_shield = item.flavor_text;
        }
        flavor_text_default = item.flavor_text;
      });

      let abilities = '';
      poke.abilities.map((item: any, index: number) => {
        abilities += `${item.ability.name}${
          poke.abilities.length == index + 1 ? '' : ', '
        }`;
      });

      let obj = {
        id: poke.id,
        name: poke.name,
        types: poke.types,
        flavor_text_sword,
        flavor_text_shield,
        flavor_text_default,
        height: poke.height,
        weight: poke.weight,
        abilities,
        gender_rate: pokeSpecies.data.gender_rate,
        capture_rate: pokeSpecies.data.capture_rate,
        habitat: pokeSpecies.data.habitat?.name,
        stats: poke.stats,
        evolution: pokeEvolution.data.chain,
      };

      setDetails(obj);
      setLoading(false);
    } catch (error) {
      setShowModalError(true);
    }
  }

  return (
    <div>
      <Header />
      <ModalError
        show_modal_error={showModalError}
        msg={'Ops! Could not load the information for this pokemon.'}
      />
      <Container fluid className="text-light mb-4">
        {loading ? (
          <LoadingDetails />
        ) : (
          <>
            <Row>
              <Col xs={12} md={6}>
                <PokeCard
                  name={details.name}
                  id={details.id}
                  types={details.types}
                  click={false}
                />
              </Col>

              <Col xs={12} md={6}>
                <PokeOverview
                  flavor_text_sword={details.flavor_text_sword}
                  flavor_text_shield={details.flavor_text_shield}
                  flavor_text_default={details.flavor_text_default}
                />

                <PokeInfo
                  height={details.height}
                  capture_rate={details.capture_rate}
                  weight={details.weight}
                  abilities={details.abilities}
                  gender_rate={details.gender_rate}
                  habitat={details.habitat}
                />
              </Col>

              <PokeStats stats={details.stats} types={details.types} />
            </Row>
            <PokeEvolution data={details.evolution} types={details.types} />
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Details;
