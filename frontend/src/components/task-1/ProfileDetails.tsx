import { useEffect, useState, memo } from 'react';
import type { ProfileListType, ProfileType } from './Task1';
import styles from './task-styles.module.css';
import { profileUrl } from './helper';

type ProfileDetailsPropsType = {
  info: ProfileListType | null;
};

const ProfileDetails = ({ info }: ProfileDetailsPropsType): React.JSX.Element => {
  const [userDetails, setUserDetails] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (info?.id) {
      setLoading(true);
      setUserDetails(null);
      const fetchData = async (): Promise<void> => {
        try {
          const response = await fetch(`${profileUrl}${info.id.toString()}.json`);
          if (!response.ok) {
            throw new Error('Ошибка сети');
          }
          const data = (await response.json()) as ProfileType;
          setUserDetails(data);
        } catch (error) {
          console.error('Ошибка при загрузке деталей:', error);
        } finally {
          setLoading(false);
        }
      };

      void fetchData();
    }
  }, [info?.id]);

  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {userDetails && (
        <div className={styles.profile_container}>
          <div className={styles.img}>
            <img src={userDetails.avatar} alt="avatar" />
          </div>
          <div className={styles.details_container}>{userDetails.name}</div>
          <div className={styles.details_container}>City: {userDetails.details.city}</div>
          <div className={styles.details_container}>Company: {userDetails.details.city}</div>
          <div className={styles.details_container}>Position: {userDetails.details.city}</div>
        </div>
      )}
    </div>
  );
};

export default memo(ProfileDetails);
