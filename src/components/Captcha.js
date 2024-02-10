import React from 'react';
import Captcha from 'react-simple-captcha';
import { useState } from 'react';

const Captcha = () => {
  const [captchaValue, setCaptchaValue] = React.useState('');

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div>
      <Captcha
        onChange={handleCaptchaChange}
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export default Captcha;