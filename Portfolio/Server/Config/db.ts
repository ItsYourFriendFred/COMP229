/*! 
File Name: Server/Config/db.js
Student Name: Fred Wong
Date: October 26, 2022
Last Updated: October 26

Setting MongoDB configuration variables
*/

export const LocalURI = "mongodb://127.0.0.1/contactsDB";
export const RemoteURI = process.env.RemoteURI as string;
export const HostName = "MongoDB Atlas";
export const Secret = "someSecret";

