const {GroupSchema} = require("./Group.schema");

const insertGroup = (groupObj) => {
  return new Promise((resolve, reject) => {
    try {
      GroupSchema(groupObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};


// const getAllGroups = () => {
//   return new Promise((resolve, reject) => {
//     try {
//         GroupSchema.findAll()
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// const getGroup = (clientId) => {
//   return new Promise((resolve, reject) => {
//     try {
//         GroupSchema.find({ clientId })
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// const getGroupById = (_id, clientId) => {
//   return new Promise((resolve, reject) => {
//     try {
//         GroupSchema.find({ _id, clientId })
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// const updateClientReply = ({ _id, message, sender }) => {
//   return new Promise((resolve, reject) => {
//     try {
//       TicketSchema.findOneAndUpdate(
//         { _id },
//         {
//           status: "Pending operator response",
//           $push: {
//             conversations: { message, sender },
//           },
//         },
//         { new: true }
//       )
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// const updateStatusClose = ({ _id, clientId }) => {
//   return new Promise((resolve, reject) => {
//     try {
//       TicketSchema.findOneAndUpdate(
//         { _id, clientId },
//         {
//           status: "Closed",
//         },
//         { new: true }
//       )
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// const deleteGroup = ({ _id, clientId }) => {
//   return new Promise((resolve, reject) => {
//     try {
//         GroupSchema.findOneAndDelete({ _id, clientId })
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

module.exports = {
  insertGroup,
//   getAllGroups,
//   getGroup,
//   getGroupById,
    //   updateClientReply,
    //   updateStatusClose,
//   deleteGroup,
};
