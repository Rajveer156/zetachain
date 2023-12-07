import { config, passport } from "@imtbl/sdk";
import { ethers } from "ethers";

// TODO 1: Passport Configuration

const fetchAuth = async () => {
  try {
    const accounts = await passportProvider.request({
      method: "eth_requestAccounts",
    });
    console.log("connected", accounts);
  } catch (error) {
    console.error(error);
  } finally {
    window.location.reload();
  }
};

// TODO 2: get Wallet Info

// TODO 3: Initiate Transaction

export { passportInstance, passportProvider, fetchAuth, initiateTransaction, getWalletInfo };
