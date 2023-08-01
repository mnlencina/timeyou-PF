const express = require("express");
const selectedUser = require("../../controllers/getUserName");
const userEmail = require("../../controllers/getUserEmail");
const allUsers = require("../../controllers/getAllUsers");
const updateWatch = require("../../controllers/putAdminWatch");
const allBuyUsers = require("../../controllers/getAllBuy");
const updateUser = require("../../controllers/putAdminUser");

const adminRouter = express.Router();

adminRouter.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const newUser = await createUser(userName, email, password);
    if (email) {
      sendEmailConPlantilla(email, "newUser");
    }
    if (newUser) res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    if (error.message.includes("not available")) {
      return res.status(400).json({ Error: error.message });
    } else res.status(500).json({ Error: error.message });
  }
});

adminRouter.get("/allUsers", async (req, res) => {
  try {
    const userDataBase = await allUsers();
    res.status(200).json(userDataBase);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

adminRouter.get("/users-by-email", async (req, res) => {
  const { email } = req.query;
  try {
    const userFound = await userEmail(email);
    res.status(200).json(userFound);
  } catch (error) {
    if (error.message.includes("Email"))
      return res.status(404).json({ Error: error.message });
    else return res.status(500).json({ Error: error.message });
  }
});

adminRouter.get("/user-by-userName", async (req, res) => {
  const { userName } = req.query;
  try {
    const userFound = await selectedUser(userName);
    res.status(200).json(userFound);
  } catch (error) {
    if (error.message.includes("userName"))
      return res.status(404).json({ Error: error.message });
    else return res.status(500).json({ Error: error.message });
  }
});

adminRouter.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userByIdentifier = await userById(id);
    res.status(200).json(userByIdentifier);
  } catch (error) {
    if (error.message.includes("uuid"))
      return res.status(404).json({ Error: error.message });
    else return res.status(500).json({ Error: error.message });
  }
});

adminRouter.put("/updateUser/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    const update = await updateUser(id, user);
    res.status(200).json(update);
    
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

// Rutas Watch

adminRouter.put("/update-watch/:id", async (req, res) => {
  const { id } = req.params;
  const watch = req.body;

  try {
    const update = await updateWatch(id, watch);
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

// Rutas Buy

adminRouter.get("/allBuy", async (req, res) => {
  try {
    const allBuy = await allBuyUsers();
    if (allBuy.message)
      return res.status(200).json({ message: allBuy.message });

    res.status(200).json(allBuy);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = adminRouter;
