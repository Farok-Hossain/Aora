import { Account, Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.afs.aora",
  projectId: "663270ff00193324c50d",
  databaseId: "663278ef001108fe2af3",
  userCollectionId: "663279390016657cda9e",
  videoCollectionId: "6632798c0039a2e4b777",
  storageId: "663351d1001a51cf6792",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
