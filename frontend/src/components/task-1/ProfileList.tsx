import { memo, useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import type { ProfileListType } from './Task1';
import styles from './task-styles.module.css';
import { url } from './helper';

type ProfileListPropsType = {
  onSelectUser: Dispatch<SetStateAction<ProfileListType | null>>;
};

const ProfileList = ({ onSelectUser }: ProfileListPropsType): React.JSX.Element => {
  const [users, setUsers] = useState<ProfileListType[]>([]);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch(url);

        const data = (await response.json()) as ProfileListType[];
        setUsers(data);
      } catch (error) {
        console.error('Ошибка при загрузке списка пользователей:', error);
      }
    };

    void fetchUsers();
  }, []);

  return (
    <div className={styles.list}>
      {users.map((user) => (
        <div
          onClick={() => onSelectUser({ id: user.id, name: user.name })}
          className={styles.list_item}
          key={user.id}
          data-name={user.id.toString()}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default memo(ProfileList);
