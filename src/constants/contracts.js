import { ethers } from "ethers";
import ensAbi from "./ensAbi";
import chatAbi from "./chatAbi"

export const getChatContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_CHATAPPLICATION_ADDRESS,
        chatAbi,
        providerOrSigner
    );

export const getEnsContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_ENS_ADDRESS,
        ensAbi,
        providerOrSigner
    );