// BEZ EDITA I CREATE
/* 
import React from "react";

// Struktura podataka
const fileStructure = [
  {
    name: "Folder1",
    type: "folder",
    children: [
      { name: "File1.1", type: "file" },
      { name: "File1.2", type: "file" },
      {
        name: "SubFolder1.1",
        type: "folder",
        children: [
          { name: "File1.1.1", type: "file" },
          { name: "File1.1.2", type: "file" },
        ],
      },
    ],
  },
  {
    name: "Folder2",
    type: "folder",
    children: [
      { name: "File2.1", type: "file" },
      { name: "File2.2", type: "file" },
    ],
  },
  {
    name: "Folder3",
    type: "folder",
    children: [
      { name: "File3.1", type: "file" },
      { name: "File3.2", type: "file" },
    ],
  },
];

// Komponenta za prikaz foldera i fajlova
const FileTree = ({ structure, level = 0 }) => {
  return (
    <div>
      {structure.map((item, index) => (
        <div key={index} style={{ marginLeft: level * 20 }}>
          {item.type === "folder" ? (
            <div style={{ fontWeight: "bold" }}>
              {item.name}
              <FileTree structure={item.children} level={level + 1} />
            </div>
          ) : (
            <div>{item.name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Glavna komponenta
const App = () => {
  return (
    <div>
      <h1>File Structure</h1>
      <FileTree structure={fileStructure} />
    </div>
  );
};

export default App;

*/

//----------------------------------------------------------------------------------------------------------------

//==================================================== SA CREATE ITEM-----------------------------------
/**
 import React, { useState } from "react";

// Inicijalna struktura podataka
const initialFileStructure = [
  {
    name: "Folder1",
    type: "folder",
    children: [
      { name: "File1.1", type: "file" },
      { name: "File1.2", type: "file" },
      {
        name: "SubFolder1.1",
        type: "folder",
        children: [
          { name: "File1.1.1", type: "file" },
          { name: "File1.1.2", type: "file" },
        ],
      },
    ],
  },
  {
    name: "Folder2",
    type: "folder",
    children: [
      { name: "File2.1", type: "file" },
      { name: "File2.2", type: "file" },
    ],
  },
  {
    name: "Folder3",
    type: "folder",
    children: [
      { name: "File3.1", type: "file" },
      { name: "File3.2", type: "file" },
    ],
  },
];

// Rekurzivna funkcija za dodavanje novog fajla u strukturu
const addDummyFile = (structure, folderName) => {
  return structure.map((item) => {
    if (item.type === "folder") {
      if (item.name === folderName) {
        return {
          ...item,
          children: [...item.children, { name: "dummyFile", type: "file" }],
        };
      } else {
        return {
          ...item,
          children: addDummyFile(item.children, folderName),
        };
      }
    }
    return item;
  });
};

// Komponenta za prikaz foldera i fajlova
const FileTree = ({ structure, level = 0, onAddFile }) => {
  return (
    <div>
      {structure.map((item, index) => (
        <div key={index} style={{ marginLeft: level * 20 }}>
          {item.type === "folder" ? (
            <div style={{ fontWeight: "bold" }}>
              {item.name}{" "}
              <button onClick={() => onAddFile(item.name)}>Create</button>
              <FileTree structure={item.children} level={level + 1} onAddFile={onAddFile} />
            </div>
          ) : (
            <div>{item.name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Glavna komponenta
const App = () => {
  const [fileStructure, setFileStructure] = useState(initialFileStructure);

  const handleAddFile = (folderName) => {
    const newStructure = addDummyFile(fileStructure, folderName);
    setFileStructure(newStructure);
  };

  return (
    <div>
      <h1>File Structure</h1>
      <FileTree structure={fileStructure} onAddFile={handleAddFile} />
    </div>
  );
};

export default App;

 */
//--------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------- SA EDIT ITEMMM

import React, { useState } from 'react'

// Inicijalna struktura podataka
const initialFileStructure = [
  {
    name: 'Folder1',
    type: 'folder',
    children: [
      { name: 'File1.1', type: 'file' },
      { name: 'File1.2', type: 'file' },
      {
        name: 'SubFolder1.1',
        type: 'folder',
        children: [
          { name: 'File1.1.1', type: 'file' },
          { name: 'File1.1.2', type: 'file' },
        ],
      },
    ],
  },
  {
    name: 'Folder2',
    type: 'folder',
    children: [
      { name: 'File2.1', type: 'file' },
      { name: 'File2.2', type: 'file' },
    ],
  },
  {
    name: 'Folder3',
    type: 'folder',
    children: [
      { name: 'File3.1', type: 'file' },
      { name: 'File3.2', type: 'file' },
    ],
  },
]

// Rekurzivna funkcija za dodavanje novog fajla u strukturu
const addDummyFile = (structure, folderName) => {
  return structure.map((item) => {
    if (item.type === 'folder') {
      if (item.name === folderName) {
        return {
          ...item,
          children: [
            ...item.children,
            { name: `dummyFile ${item.children.length + 1}`, type: 'file' },
          ],
        }
      } else {
        return {
          ...item,
          children: addDummyFile(item.children, folderName),
        }
      }
    }
    return item
  })
}

// IF NAME EXIST
const nameExist = (structure, newName) => {
  return structure.some((item) => {
    if (item.name === newName) {
      return true
    }
    if (item.type === 'folder') {
      return nameExist(item.children, newName)
    }

    return false
  })
}

// Rekurzivna funkcija za promenu imena fajla ili foldera
const renameItem = (structure, oldName, newName) => {
  if (nameExist(structure, newName)) {
    alert('Name allready exist')
    return structure
  }

  return structure.map((item) => {
    if (item.name === oldName) {
      return {
        ...item,
        name: newName,
      }
    } else if (item.type === 'folder') {
      return {
        ...item,
        children: renameItem(item.children, oldName, newName),
      }
    }
    return item
  })
}

// Komponenta za prikaz foldera i fajlova
const FileTree = ({ structure, level = 0, onAddFile, onRename }) => {
  const [editName, setEditName] = useState(null)
  const [newName, setNewName] = useState('')

  const handleEditClick = (name) => {
    setEditName(name)
    setNewName(name)
  }

  const handleSaveClick = () => {
    onRename(editName, newName)
    setEditName(null)
  }

  return (
    <div>
      {structure?.map((item, index) => (
        <div key={index} style={{ marginLeft: (level + 10) * 10 }}>
          {item.type === 'folder' ? (
            <div style={{ fontWeight: 'bold', margin: '15px' }}>
              {editName === item.name ? (
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                  <button onClick={() => setEditName(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {item.name}{' '}
                  <button
                    style={{ marginRight: '10px' }}
                    onClick={() => onAddFile(item.name)}
                  >
                    Create
                  </button>
                  <button onClick={() => handleEditClick(item.name)}>
                    Edit
                  </button>
                </>
              )}
              <FileTree
                structure={item.children}
                level={level + 1}
                onAddFile={onAddFile}
                onRename={onRename}
              />
            </div>
          ) : (
            <div style={{ margin: '5px', fontWeight: 'normal' }}>
              {editName === item.name ? (
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                  <button onClick={() => setEditName(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {item.name}{' '}
                  <button onClick={() => handleEditClick(item.name)}>
                    Edit
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Glavna komponenta
const FolderStructure = () => {
  const [fileStructure, setFileStructure] = useState(initialFileStructure)

  const handleAddFile = (folderName) => {
    const newStructure = addDummyFile(fileStructure, folderName)
    setFileStructure(newStructure)
  }

  const handleRename = (oldName, newName) => {
    const newStructure = renameItem(fileStructure, oldName, newName)
    setFileStructure(newStructure)
  }

  return (
    <div>
      <h1>File Structure</h1>
      <FileTree
        structure={fileStructure}
        onAddFile={handleAddFile}
        onRename={handleRename}
      />
    </div>
  )
}

export default FolderStructure
