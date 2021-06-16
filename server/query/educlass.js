const connection = require('../db');



module.exports = {
    create: (teacher_id, name, description, icon) => {
      let code = Math.random().toString(36).substr(2, 6) + Math.random().toString(36).substr(2, 6) + Math.random().toString(36).substr(2, 6) + Math.random().toString(36).substr(2, 6);
      connection.query(
        `
          INSERT INTO EDUCLASS (TEACHER_ID, EDUCLASS_ID, EDUCLASS_NAME, EDUCLASS_DESCRIPTION, EDUCLASS_ICON, EDUCLASS_CODE)
          VALUES (?, ?)
        `, [teacher_id, code, name, description, icon, code],
              
        (err, result) => {
          console.log(code);
          if(err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },
  
    read: (id, callback) => {
      connection.query(
        `
          SELECT *
          FROM EDUCLASS WHERE EDUCLASS_ID = ?
        `, [id],
              
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },
  
    update: (id, name, description, icon, callback) => {
      connection.query(
        `
          UPDATE EDUCLASS
          SET EDUCLASS_NAME = ?, EDUCLASS_DESCRIPTION = ? EDUCLASS_ = ?
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
          return callback({success: false, result: result});
        }
      );
    }
}