import React from 'react';
import generateWallet, { WalletInfo } from '../../tools/Wallet/WalletGenerator';

const CreateAccount = () => {
  const createAccount = () => {
    console.log('Creating account...');
    try {
      const walletInfo: WalletInfo = generateWallet();
      console.log('Wallet generated:', walletInfo);
      console.log('Seed Phrase:', walletInfo.seedPhrase);
      console.log('Private Key:', walletInfo.privateKey);
      console.log('Address:', walletInfo.address);
    } catch (error) {
      console.error('Error generating wallet:', error);
    }
  };

  return (
    <div>
      <button onClick={createAccount}>Create Account</button>
    </div>
  );
};

export default CreateAccount;
