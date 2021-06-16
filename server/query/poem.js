const connection = require('../db');

module.exports = {
    create: (educlass_id, id, content, title, description, callback) => {
      connection.query(
        `
          INSERT INTO POEM (EDUCLASS_ID, POEM_ID, POEM_CONTENT, POEM_TITLE, POEM_DESCRIPTION)
          VALUES (?, ?, ?, ?, ?)
        `, [educlass_id, id, content, title, description],
              
        (err, result) => {
          if(err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },
  
    read: (id, callback) => {
      connection.query(
        `
          SELECT *
          FROM POEM WHERE EDUCLASS_ID = ?
        `, [id],
              
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },
  
    readAll: (callback) => {
      connection.query(
        `SELECT * FROM POEM`, (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      )
    },

    update: (id, title, content, description, callback) => {
      connection.query(
        `
          UPDATE POEM
          SET POEM_TITLE = ?, POEM_CONTENT = ? POEM_DESCRIPTION = ?
          WHERE POEM_ID = ?
        `, [title, content, description, id],
      
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },
  
    delete: (id, callback) => {
      connection.query(
        `
          DELETE FROM POEM
          WHERE POEM_ID = ?
        `, [id],
      
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    }
}