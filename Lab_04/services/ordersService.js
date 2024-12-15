const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite');

exports.getAllUserOrders = (req,res) => {
    const id = req.params.id;
    db.all(`SELECT * FROM orders WHERE userID = ?`,
        [id],
        (err,rows) => {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            res.json({
                "message": "success",
                "data": rows
            });
        }
    );
}

exports.addOrder = (req,res) => {
    const {id,bookID,amount} = req.body;

    db.get(`SELECT * FROM books WHERE id = ?`,
        [bookID],
        (err,row) => {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            if (!row) {
                res.status(404).json({"message": "Book not found"});
                return;
            }

            db.run(`INSERT INTO orders (userID, bookID, amount)
                    VALUES (?, ?, ?)`,
                [id, bookID, amount],
                function(err) {
                    if (err) {
                        res.status(400).json({"error": err.message});
                        return;
                    }
                    res.json({
                        "message": "added",
                        "data": req.body,
                        "id": this.lastID
                    });
                }
            );
        }
    );
}

exports.deleteOrder = (req,res) => {
    const id = req.params.id
    db.run(`DELETE FROM orders WHERE id = ?`,[id],function(err) {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "deleted",
        });
    });
}

exports.patchOrder = (req,res) => {
    const id = req.params.id;
    const {userID, bookID, amount} = req.body;

    db.get(`SELECT *
            FROM books
            WHERE id = ?`,
        [bookID],
        (err, row) => {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            if (!row) {
                res.status(404).json({"message": "Book not found"});
                return;
            }
            db.run(`UPDATE orders
                    SET userID=?,
                        bookID=?,
                        amount=?
                    WHERE id = ?`,
                [userID, bookID, amount, id],
                (err) => {
                    if (err) {
                        res.status(400).json({"error": err.message});
                        return;
                    }
                    res.json({
                        "message": "updated",
                        "data": req.body
                    });
                }
            );
        }
    );
}
