import React from 'react';
import i18next from 'i18next';

const UserExperience = () => {
  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div>
      <h2>User Experience</h2>
      <p>Customizable Interface, Offline Mode, Multilingual Support</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      {/* Add more buttons for other languages as needed */}
    </div>
  );
};

export default UserExperience;