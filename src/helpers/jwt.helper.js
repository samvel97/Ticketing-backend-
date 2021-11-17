const jwt = require("jsonwebtoken");
const { setJWT, getJWT } = require("./redis.helper");
const { storeUserRefreshJWT } = require("../model/user/User.model");
const { token } = require("morgan");

const crateAccessJWT = async (email, _id) => {
  try {
    const accessJWT = await jwt.sign({ email }, 'ljhhIT8YWE87^*8768kjksfs', {
      expiresIn: "1d", //change this to 15m
    });

    await setJWT(accessJWT, _id);

    return Promise.resolve(accessJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const crateRefreshJWT = async (email, _id) => {
  try {
    const refreshJWT = jwt.sign({ email }, 'xzcvzxss$&^*(7ykKKJJHKU&hashf)', {
      expiresIn: "30d",
    });

    await storeUserRefreshJWT(_id, refreshJWT);

    return Promise.resolve(refreshJWT);
  } catch (error) {
    return Promise.reject(error);
  }
};

const verifyAccessJWT = (userJWT) => {
  try {
    return Promise.resolve(jwt.verify(userJWT, 'ljhhIT8YWE87^*8768kjksfs'));
  } catch (error) {
    return Promise.resolve(error);
  }
};
const verifyRefreshJWT = (userJWT) => {
  try {
    return Promise.resolve(jwt.verify(userJWT, 'xzcvzxss$&^*(7ykKKJJHKU&hashf)'));
  } catch (error) {
    return Promise.resolve(error);
  }
};

module.exports = {
  crateAccessJWT,
  crateRefreshJWT,
  verifyAccessJWT,
  verifyRefreshJWT,
};
