/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { getImageUrl } from '../../api/imageUpload';
import { getRole, hostRequest } from '../../api/user';
import BecomeHostForm from '../../Components/Form/BecomeHostForm';
import { AuthContext } from '../../contexts/AuthProvider';

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);

  const [role, setRole] = useState(null);

  useEffect(() => {
    getRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
    });
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageUrl(image)
      .then((data) => {
        const hostData = {
          location,
          documentIMG: data,
          role: 'requested',
          email: user?.email
        };
        hostRequest(hostData).then((data) => console.log(data));
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <div>
      <BecomeHostForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default BecomeAHost;
