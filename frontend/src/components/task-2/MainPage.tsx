import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './main-page-styles.module.css';

type NoteType = {
  id: string;
  content: string;
};

export default function MainPage(): React.JSX.Element {
  const [notesList, setNotesList] = useState<NoteType[]>([]);
  const [newNote, setNewNote] = useState<string>('');

  const updateListHandler = async (): Promise<void> => {
    const url = 'http://localhost:7070/notes';
    try {
      const response = await fetch(url);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const newList: NoteType[] = await response.json();
      setNotesList(newList);
    } catch (error) {
      console.error('Ошибка при обновлении списка заметок:', error);
    }
  };

  const sendNewNoteHandler = async (): Promise<void> => {
    const url = 'http://localhost:7070/notes';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ id: uuidv4(), content: newNote }),
      });

      if (response.ok) {
        await updateListHandler();
      }
      setNewNote('');
    } catch (error) {
      console.error('Ошибка при добавлении заметки:', error);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewNote(e.target.value);
  };

  const deleteNoteHandler = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    const url = `http://localhost:7070/notes/${e.currentTarget.id}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      if (response.ok) {
        await updateListHandler();
      }
      setNewNote('');
    } catch (error) {
      console.error('Ошибка при добавлении заметки:', error);
    }
  };

  useEffect(() => {
    const fetchNotes = async (): Promise<void> => {
      await updateListHandler();
    };
    void fetchNotes();
  }, []);

  return (
    <div>
      <div className="d-flex">
        <h1>Notes</h1>
        <button onClick={updateListHandler}>update</button>
      </div>
      {notesList.map((note) => (
        <div key={note.id} className={`${styles.card_container} m-3 p-3`}>
          {note.content}
          <button id={note.id} onClick={deleteNoteHandler} className={`${styles.delete_button} `}>
            X
          </button>
        </div>
      ))}
      <div className="d-flex m-3">
        <textarea name="newNote" onChange={onChangeHandler} value={newNote}></textarea>
        <button onClick={sendNewNoteHandler}>send</button>
      </div>
    </div>
  );
}
