import React, { useState } from "react";

const MOODS = [
  "😀​",
  "😌",
  "😊",
  "😄",
  "🤣",
  "😰",
  "🥰",
  "🙃",
  "😔",
  "😇",
  "🤔",
  "😩",
  "😭",
  "😤",
  "😵",
  "🤒",
  "🤤",
  "😱​",
  "🤯​",
  "🥳​",
];

export default function DiaryForm({ addItem }) {
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    let itemObject = {
      title: title,
      mood: mood,
      date: date,
      text: text,
    };
    addItem(itemObject);
    setTitle("");
    setMood("");
    setText("");
    setDate("");
  };

  return (
    <div className="diary-wrapper">
      <form onSubmit={onSubmit}>
        <div className="diary-form">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
            className="diary-input"
          />
          <select
            value={mood}
            onChange={(event) => setMood(event.target.value)}
            name="mood"
            className="input-mood-select"
          >
            <option value="">Select Mood</option>
            {MOODS.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
            className="diary-date-input"
          />
        </div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Content"
          rows="2"
          className="diary-textarea"
        ></textarea>
        <button type="submit" className="diary-button">
          Add to Diary
        </button>
      </form>
    </div>
  );
}
