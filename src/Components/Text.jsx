import { useState } from "react";

import { motion } from "framer-motion";

function Text() {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Double click to edit");
  return (
    <motion.div drag>
      {editMode ? (
        <input
          type="text"
          onDoubleClick={() => {
            setEditMode(false);
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h2 onDoubleClick={() => setEditMode(true)}>{value}</h2>
      )}
    </motion.div>
  );
}

export default Text;
