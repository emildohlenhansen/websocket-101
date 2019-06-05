import * as React from 'react';

const User: React.FunctionComponent<any> = props => {
  return (
    <section className="player-container border">
      <h2>Brukernavn</h2>
      <div className="player-list" />
    </section>
  );
};

export default User;
