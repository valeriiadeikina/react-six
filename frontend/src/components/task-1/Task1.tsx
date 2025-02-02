import React, { useState } from 'react';
import styles from './task-styles.module.css';
import ProfileList from './ProfileList';
import ProfileDetails from './ProfileDetails';

export type ProfileListType = {
  name: string;
  id: number;
};

export type ProfileType = {
  name: string;
  id: number;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};

const ProfilePage = (): React.JSX.Element => {
  const [selectedUser, setSelectedUser] = useState<ProfileListType | null>(null);

  return (
    <div className={styles.container}>
      <ProfileList onSelectUser={setSelectedUser} />
      <ProfileDetails info={selectedUser} />
    </div>
  );
};

export default ProfilePage;
