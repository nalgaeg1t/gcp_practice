const connection = require('../db');
const jwt = require('../modules/jwt');

module.exports = {
  create: (id, pw, callback) => {
    connection.query(
      `
        INSERT INTO STUDENT (STUDENT_ID, STUDENT_PW)
        VALUES (?, ?)
      `, [id, pw],
            
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
        FROM STUDENT WHERE STUDENT_ID = ?
      `, [id],
            
      (err, result) => {
        if (err) return callback({success: false, result: result});
        return callback({success: true, result: result});
      }
    );
  },

  readAll: (callback) => {
    connection.query(
      `SELECT * FROM STUDENT`, (err, result) => {
        if (err) return callback({success: false, result: result});
        return callback({success: true, result: result});
      }
    )
  },

  update: (id, pw, callback) => {
    connection.query(
      `
        UPDATE STUDENT
        SET STUDENT_PW = ?
        WHERE STUDENT_ID = ?
      `, [pw, id],
    
      (err, result) => {
        if (err) return callback({success: false, result: result});
        return callback({success: true, result: result});
      }
    );
  },

  delete: (id, callback) => {
    connection.query(
      `
        DELETE FROM STUDENT
        WHERE STUDENT_ID = ?
      `, [id],
    
      (err, result) => {
        if (err) return callback({success: false, result: result});
        return callback({success: true, result: result});
      }
    );
  },

  login: async (id, pw, callback) => {
    connection.query(
      `
        SELECT STUDENT_PW
        FROM STUDENT
        WHERE STUDENT_ID=?
      `, [id],

      (err, result) => {
        if (err) return callback({success: false, result: result});
        
        if (result[0].STUDENT_PW === pw) {
          new Promise((res, rej) => res())
          .then(() => jwt.sign(id))
          .then(jwtToken => callback({success: true, result: jwtToken}))
        }
        else return callback({success: false, result: null});
      }
    )
  }
}