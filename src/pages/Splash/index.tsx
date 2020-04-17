import React from "react";
import Carousel from "re-carousel";
import IndicatorDots from "./dots";
import { Screen, SplashBody } from "../../components/Splash";
import Fab from "@material/react-fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import corona from "./corona.png";
import house from "./house.png";
import splash1 from "./splash1.png";

export default function SplashScreen() {
  return (
    <SplashBody>
      <Carousel className="carousel" widgets={[IndicatorDots]}>
        <Screen bg={splash1}>
          <img height="200px" width="200px" src={corona} alt="Coronavirus" />
          <h2>
            A OMS (Organização Mundial de Saúde) declarou que o surto do novo
            coronavírus constitui uma Emergência de Saúde Pública de Importância
            Internacional.
          </h2>
        </Screen>
        <Screen bg={splash1}>
          <img height="200px" width="200px" src={house} alt="Fica em casa" />
          <h2>
            Ajude e denuncie aglomerações durante a quarentena devido ao
            COVID-19.
          </h2>
        </Screen>
        <Screen bg={splash1}>
          <img height="200px" width="200px" src={corona} alt="Coronavirus" />
          <h2>
            A OMS (Organização Mundial de Saúde) declarou que o surto do novo
            coronavírus constitui uma Emergência de Saúde Pública de Importância
            Internacional.
          </h2>
        </Screen>
      </Carousel>

      <Fab
        onClick={() => localStorage.setItem("splash_screen", "true")}
        className="fab"
        icon={<FontAwesomeIcon icon={faArrowRight} />}
      />
    </SplashBody>
  );
}
