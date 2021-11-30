const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db");
const app = express();
app.use(express.json());
app.use(cors());

const roleRouter = require('./routers/routes/role');
const userRouter = require("./routers/routes/user");
const todoRouter = require("./routers/routes/todo");


app.use(roleRouter)
app.use(userRouter);
app.use(todoRouter);

const PORT = process.env.PORT || 4600;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
