const connection = require('../db');

module.exports = {
    create: (student_id, poem_id, image, id, callback) => {
      connection.query(
        `
          INSERT INTO PICTURE (STUDENT_ID, POEM_ID, PICTURE_IMAGE, PICTURE_ID)
          VALUES (?, ?, ?, ?)
        `, [student_id, poem_id, image, id],
              
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
          FROM PICTURE WHERE POEM_ID = ?
        `, [id],
              
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },
  
    update: (id, image, callback) => {
      connection.query(
        `
          UPDATE POEM
          SET POEM_TITLE = ?, POEM_CONTENT = ? POEM_DESCRIPTION = ?
          WHERE PICTURE_ID = ?
        `, [image, id],
      
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: true, result: result});
        }
      );
    },
  
    delete: (id, callback) => {
      connection.query(
        `
          DELETE FROM PICTURE
          WHERE PICTURE_ID = ?
        `, [id],
      
        (err, result) => {
          if (err) return callback({success: false, result: result});
          return callback({success: false, result: result});
        }
      );
    }
}