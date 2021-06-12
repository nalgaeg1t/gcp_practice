const connection = require('../db');

module.exports = {
    create: (id, pw) => {
        connection.query(`
            INSERT INTO TEACHER (TEACHER_ID, TEACHER_PW)
            VALUES ("${id}", "${pw}")
            `,
            
            (err, result) => {
                if(err) return {success: false, result: result};
                return {success: true, result: result};
            }
        );
    },

    read: (id) => {
        connection.query(`
            SELECT *
            FROM TEACHER WHERE teacher_id = "${id}"
            `,
            
            (err, result) => {
                if (err) return {success: false, result: result};
                const resultArray = Object.values(JSON.parse(JSON.stringify(result)))
                return {success: true, result: resultArray};
            }
        );
    },

    update: (id, pw) => {
        connection.query(`
            UPDATE TEACHER
            SET TEACHER_PW = "${pw}"
            WHERE TEACHER_ID = "${id}"
            `,
    
            (err, result) => {
                if (err) return {success: false, result: result};
                return {success: true, result: result};
            }
        );
    },

    delete: (id) => {
        connection.query(`
            DELETE FROM TEACHER
            WHERE TEACHER_ID = "${id}"
            `,
    
            (err, result) => {
                if (err) return {success: false, result: result};
                return {success: true, result: result};
            }
    
        );
    }
}