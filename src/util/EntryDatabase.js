import SQLite from 'react-native-sqlite-storage';
import {Platform} from 'react-native';

class EntryDatabase {

    db = null;

    constructor(props) {
        this.db = SQLite.openDatabase(
            {
                name : "academy_entry.db",
                location: "default",
                createFromLocation : 1
            },
            () => {
                console.log(`${Platform.OS} 불러오기 성공`);
            },
            error => {
                console.log('에러발생: ', error);
            },

        )
    }
    
    getStudentList = async () => {
        try {
            const data = await new Promise((resolve, reject) => {
                db.transaction(tx => {
                  tx.executeSql(
                    'SELECT * FROM student',
                    [],
                    (tx, results) => {
                      const rows = results.rows;
                      let items = [];
                      for (let i = 0; i < rows.length; i++) {
                        items.push(rows.item(i));
                      }
                      resolve(items);
                    },
                    error => {
                      reject(error);
                    }
                  );
                });
              });
              return data;
        } catch(error) {
            console.error(error);
        }
    }

}

export default new EntryDatabase();