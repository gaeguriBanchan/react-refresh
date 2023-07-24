import React from 'react';
import { useParams } from 'react-router-dom';
import { user } from '../../db';

const User = () => {
  const { userId } = useParams();
  return (
    <h1>
      User with it {userId} is name: {user[Number(userId) - 1].name}
    </h1>
  );
};

export default User;
