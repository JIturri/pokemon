import peso from "./weight.png";
import altura from "./height.png";
import "./card.css";

export const Card = (props) => (
  <>
    <div className={`card ${props.typeOne}`}>
      <div className="card-name-number">
        <div className="name">{props.name}</div>
        <div className="number">{`#${props.id}`}</div>
      </div>
      <div className="card-information">
        <div class="hole"></div>
        <img className="image" src={`${props.imgUrl}`} alt="imagen"></img>
        <div className="content">
          <div className="type">
            {props.array.map((poketype) => {
              return <div className={`${poketype} type-card`}>{poketype}</div>;
            })}
          </div>
          <div className="info-about">About</div>
          <div className="measures">
            <div className="weight">
              <div className="weight-icon-number">
                <img className="icon" src={peso} alt="pesoicono"></img>
                <div className="value">{`${props.weight} kg`}</div>
              </div>
              <div className="weight-name">Weight</div>
            </div>
            <div className="line"></div>
            <div className="weight">
              <div className="weight-icon-number">
                <img className="icon" src={altura} alt="alturaicono"></img>
                <div className="value">{`${props.height} m`}</div>
              </div>
              <div className="weight-name">Height</div>
            </div>
          </div>
          <div className="text">{"Aquí va la descripción de cada Pokemon"}</div>
        </div>
      </div>
    </div>
  </>
);
