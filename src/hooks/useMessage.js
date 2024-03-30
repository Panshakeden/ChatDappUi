import { useCallback } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import { getEnsContract,getChatContract } from "../constants/contracts";
import { toast } from "react-toastify";


const useRegistar = ( _receiverUsername, _message,callback) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async (_receiverUsername, _message,callback) => {
        if (!isSupportedChain(chainId)) return toast.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getChatContract(signer);

        try {
            const transaction = await contract.sendMessage(_receiverUsername, _message);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                callback(true)
                return toast.success("message sent successfull!");
            }
            callback(false)

            toast.error("message sent failed!");
        } catch (error) {
            callback(false)

            // console.log(error);
            let errorText;
            if (error.reason === "username already exist") {
                errorText = "Username already exist!";
            }

            toast.error(`Error: ${errorText}`);
        }
    }, [chainId, walletProvider]);
}

export default useRegistar