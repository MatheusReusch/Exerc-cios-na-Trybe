import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  if (email === '') {
      return <h2 data-testid="id-email-user">Insira um email</h2>
  }
  else {
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3 data-testid='h3'>{(verifyEmail(email) ? <p className='green'>Email Valido</p> : <p className='red'>Email Inválido</p>)}</h3>
    </div>
  );
}
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;