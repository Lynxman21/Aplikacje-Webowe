const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

//Exports module and used in other files with require. Export.funct = (params of funct) => {body}
exports.getAllBooks = (req,res) => {
    //To get all vals in tables
    db.all('SELECT * FROM books',[],(err,rows) => {
       if (err) {
           res.status(400).json({"error": err.message});
           return;
       }
       res.json({
          "message": "success",
          "data": rows
       });
    });
};

exports.getBook = (req,res) => {
    const id = req.params.id //route parameters
    //to get single row
    db.get(`SELECT * FROM books WHERE id = ?`,
        [id],
        (err,row) => {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            if (!row) {
                res.status(404).json({"message": "Book not found"});
                return;
            }
            res.json({
                "message": "success",
                "data": row
            });
        }
    );
};

exports.addBook = (req,res) => {
    const {title,author,year} = req.body;

    db.get(`SELECT * FROM books WHERE title=? AND author=? AND year=?`,
    [title,author,year],(err,row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        if (row) {
            res.status(409).json({"message": "Book already exists"});
            return;
        }
        db.run(`INSERT INTO books (title,author,year) VALUES (?, ?, ?)`,
            [title,author,year],
            function(err) {
                if (err) {
                    res.status(400).json({"error": err.message});
                    return;
                }
                res.json({
                    "message": "success",
                    "data": req.body,
                    "id": this.lastID
                });
            }
        );
    });
};

exports.deleteBook = (req,res) => {
    db.run(`DELETE FROM books WHERE id = ?`,
        req.params.id,
        (err) => {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            res.json({
                "message": "deleted"
            });
        }
    );
};