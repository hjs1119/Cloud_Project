export default async (app, connection) => {
    app.use("/dis", async (req, res, next) => {
      const { code } = req.query;
      await connection.query(
        "SELECT * FROM U_BOARD WHERE code = ?;",
        [code],
        (error, data) => {
          if (error) console.log(error);
          const result = data;
          return res.send(result);
        }
      );
    });
  };