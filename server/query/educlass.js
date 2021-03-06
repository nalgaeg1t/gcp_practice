const connection = require('../db');



module.exports = {
    create: (teacher_id, id, name, description, icon, code, callback) => {
      connection.query(
        `
          INSERT INTO EDUCLASS (TEACHER_ID, EDUCLASS_ID, EDUCLASS_NAME, EDUCLASS_DESCRIPTION, EDUCLASS_ICON, EDUCLASS_CODE)
          VALUES (?, ?, ?, ?, ?, ?)
        `, [teacher_id, id, name, description, icon, code],
              
        (err, result) => {
          if(err) return callback({success: false, result: result});
          return callback({success: true, result: result, code: code});
        }
      );
    },
  
    read: (id, callback) => {
      connection.query(
        `
          SELECT *
          FROM EDUCLASS WHERE TEACHER_ID = ?
        `, [id],
              
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },

    readAll: (callback) => {
      connection.query(
        `SELECT * FROM EDUCLASS`, (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      )
    },

    update: (id, name, description, icon, callback) => {
      connection.query(
        `
          UPDATE EDUCLASS
          SET EDUCLASS_NAME = ?, EDUCLASS_DESCRIPTION = ? EDUCLASS_ICON = ?
          WHERE EDUCLASS_ID = ?
        `, [name, description, icon, id],
      
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },
  
    delete: (id, callback) => {
      connection.query(
        `
          DELETE FROM EDUCLASS
          WHERE EDUCLASS_ID = ?
        `, [id],
      
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    }
}