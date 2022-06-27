import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function createEmoji(emojipedia) {
//   return (
//     <Entry
//       key={emojipedia.id}
//       emojiEntry={emojipedia.emoji}
//       nameEntry={emojipedia.name}
//       meaningEntry={emojipedia.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojipedia) => (
          <Entry
            key={emojipedia.id}
            emojiEntry={emojipedia.emoji}
            nameEntry={emojipedia.name}
            meaningEntry={emojipedia.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
