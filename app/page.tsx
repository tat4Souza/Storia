import Cloud1 from "./(illustrator_components)/Cloud1";
import Cloud2 from "./(illustrator_components)/Cloud2";
import Button from "./(shared)/Button";
import LogoLetters from "./(shared)/LogoLetters";
import LogoMoon from "./(shared)/LogoMoon";
import Waves from "./(shared)/Waves";

export default function Page() {
  return (
    <>
      <div className="section-logo">
        <div className="moon-wrapper">
          <LogoMoon className="moon" />
        </div>
        <div className="logo-wrapper">
          <LogoLetters />
        </div>
        <div className="cloud-wrapper cloud-wrapper--1">
          <Cloud1 className="cloud" />
        </div>
        <div className="cloud-wrapper cloud-wrapper--2">
          <Cloud2 className="cloud" />
        </div>
        {/* <Button
          content="Login"
          ripple
          mainColor="var(--primary)"
          rippleColor="var(--surface-100)"
        /> */}
      </div>
      <div className="wave-container">
        <Waves className="wave wave--1" />
        <Waves className="wave wave--2" flip />
        <Waves className="wave wave--3" />
      </div>

      <section className="section-1">
        <div className="wave-divider--1">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h1>CONTENT</h1>
      </section>
    </>
  );
}
