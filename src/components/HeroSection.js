import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat numquam facere dolores laudantium mollitia deleniti maiores voluptates? Temporibus doloribus eius perspiciatis pariatur. Cupiditate repellendus porro dolore recusandae earum numquam illum?
              Blanditiis impedit expedita nostrum repellendus ut quibusdam aspernatur doloremque inventore, ea reprehenderit cupiditate, excepturi quia animi sapiente dicta fugit similique repudiandae, id nemo? Consequuntur quos explicabo reiciendis? Vel, vitae ex!
              Dolores pariatur, provident inventore qui dignissimos dolorem amet? Doloremque labore earum ea ut modi non, placeat reiciendis nostrum, iste numquam accusantium rem mollitia, et tempore quasi ipsum cumque porro maiores?
              A ad excepturi adipisci voluptates sit repudiandae officiis, ipsam magnam natus distinctio earum eligendi, aliquid nemo? Quidem officia laborum architecto delectus numquam magnam, pariatur eligendi excepturi fuga quis, repudiandae fugit.
            </p>
            <NavLink>
              <Button>SHOP NOW</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
