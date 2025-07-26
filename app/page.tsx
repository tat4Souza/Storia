import Cloud1 from "./(illustrator_components)/Cloud1";
import Cloud2 from "./(illustrator_components)/Cloud2";

import Logo from "./(shared)/Logo";
import Button from "./(shared)/Button";
import Waves from "./(shared)/Waves";

export default function Page() {
  return (
    <div className="wave-container">
      {/* Change className and correct wave-container */}
      <Logo className="logo" />
      <Waves className="wave wave--1" />
      <Waves className="wave wave--2" flip />
      <Waves className="wave wave--3" />
      <Cloud1 className="cloud cloud--1" />
      <Cloud2 className="cloud cloud--2" />
      <Button
        content="Login"
        outlined
        ripple
        mainColor="var(--surface-100)"
        rippleColor="var(--surface-100)"
      />
    </div>
  );
}
