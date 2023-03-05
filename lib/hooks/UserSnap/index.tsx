// @ts-nocheck
import React, { useEffect } from 'react';

const UserSnap = () => {
  useEffect(() => {
    window.onUsersnapCXLoad = function (api) {
      api.init();
    };
    var script = document.createElement('script');
    script.defer = 1;
    script.src =
      'https://widget.usersnap.com/global/load/3f909d32-0d10-4566-b000-e13378b922dd?onload=onUsersnapCXLoad';
    document.getElementsByTagName('head')[0].appendChild(script);
  }, []);
  return <></>;
};

export default UserSnap;
