const connection = require('../db');
const jwt = require('../modules/jwt');

module.exports = {
  create: (id, pw, callback) => {
    connection.query(
      `
        INSERT INTO TEACHER (TEACHER_ID, TEACHER_PW)
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
        FROM TEACHER WHERE TEACHER_ID = ?
      `, [id],
            
      (err, result) => {
        if (err) return callback({success: false, result: result});
        return callback({success: true, result: result});
      }
    );
  },

  readAll: (callback) => {
    connection.query(
      `SELECT * FROM TEACHER`, (err, result) => {
        if (err) return callback({success: false, result: result});
        return callback({success: true, result: result});
      }
    )
  },

  update: (id, pw, callback) => {
    connection.query(
      `
        UPDATE TEACHER
        SET TEACHER_PW = ?
        WHERE TEACHER_ID = ?
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
        DELETE FROM TEACHER
        WHERE TEACHER_ID = ?
      `, [id],
    
      (err, result) => {
        if (err) return callback({success: false, result: result});
        return callback({success: false, result: result});
      }
    );
  },

  login: async (id, pw, callback) => {
    connection.query(
      `
        SELECT TEACHER_PW
        FROM TEACHER
        WHERE TEACHER_ID=?
      `, [id],

      (err, result) => {
        if (err) return callback({success: false, result: result});
        
        if (result[0].TEACHER_PW === pw) {
          new Promise((res, rej) => res())
          .then(() => jwt.sign(id))
          .then(jwtToken => callback({success: true, result: jwtToken}))
        }
        else return callback({success: false, result: null});
      }
    )
  }
}